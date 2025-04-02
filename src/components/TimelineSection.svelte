<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { experiences } from "../lib/datas/career";
  import { getColorForCompany } from "../lib/utils/companyColors";
  
  // 브라우저 환경인지 확인
  const isBrowser = typeof window !== 'undefined';
  
  // 화면 너비를 추적하는 스토어 생성
  const screenWidth = writable(isBrowser ? window.innerWidth : 1024);
  
  // 모바일 여부 확인 스토어
  const isMobile = writable(false);
  
  // 회사별 기간 정보 정확히 계산
  const companyPeriods = experiences.map(exp => {
    const periodParts = exp.period.split(' ~ ');
    const startStr = periodParts[0];
    const endStr = periodParts[1] || '현재';
    
    const startYear = parseInt(startStr.split('.')[0]);
    const endYear = endStr === '현재' 
      ? new Date().getFullYear() 
      : parseInt(endStr.split('.')[0]);
    
    return {
      company: exp.company,
      startYear,
      endYear
    };
  });
  
  // 특정 연도의 회사 찾기
  function getCompanyForYear(year: number): string | null {
    for (const period of companyPeriods) {
      if (year >= period.startYear && year <= period.endYear) {
        return period.company;
      }
    }
    return null;
  }
  
  // 타임라인에 표시할 모든 연도
  const displayYears = [2010, 2012, 2014, 2016, 2018, 2020, 2022, 2023];
  
  // 모바일용 표시 연도
  const mobileYears = [2010, 2016, 2023];
  
  interface TimelineSegment {
    year: number,
    company: string | null,
    color: string,
  }
  // 타임라인 세그먼트 데이터 생성
  let timelineSegments: TimelineSegment[] = [];
  for (let i = 2010; i <= 2023; i++) {
    const company = getCompanyForYear(i);

    timelineSegments.push({
      year: i,
      company,
      color: getColorForCompany(company)
    });
  }
  // $: console.log(`timelineSegments: ${JSON.stringify(timelineSegments)}`);
  
  // 화면 크기 변경 감지하는 함수
  function handleResize() {
    if (isBrowser) {
      screenWidth.set(window.innerWidth);
      isMobile.set(window.innerWidth < 768);
    }
  }
  
  onMount(() => {
    handleResize();
    
    if (isBrowser) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  });
  
  // 회사 이름을 표시 순서대로 정렬 (이미지와 같이 표시되도록)
  const displayedCompanies = ['토미시스템', '아몬드소프트', '미투온', '캔비스', '위드와이드'];
</script>

<section class="timeline-section">
  <h2 class="section-title">경력 요약</h2>
  
  <div class="timeline-container">
    <!-- 타임라인 바 -->
    <div class="timeline-bar">
      {#each timelineSegments as segment}
        <div 
          class="timeline-segment" 
          style="background-color: {segment.color};"
        ></div>
      {/each}
    </div>
    
    <!-- 연도 마커 -->
    <div class="timeline-markers">
      {#each displayYears as year}
        <div class="timeline-year-marker">
          <div class="marker-dot"></div>
          <div class="marker-year">{year}</div>
        </div>
      {/each}
    </div>
    
    <!-- 회사명 표시 - 이미지와 같은 순서로 출력 -->
    <div class="company-labels">
      {#each displayedCompanies as companyName}
        <div 
          class="company-label" 
          style="color: {getColorForCompany(companyName)};"
        >
          {companyName}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .timeline-section {
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: var(--font-xxlarge);
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 20px;
  }
  
  .timeline-container {
    position: relative;
    margin-bottom: 30px;
  }
  
  .timeline-bar {
    height: 6px;
    background-color: #e0e0e0;
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(14, 1fr); /* 2010-2023까지 14개 세그먼트 */
    margin: 20px 0;
  }
  
  .timeline-segment {
    height: 100%;
  }
  
  .timeline-markers {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: -15px;
  }
  
  .timeline-year-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .marker-dot {
    width: 10px;
    height: 10px;
    background-color: #333333;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  
  .marker-year {
    font-size: 12px;
    color: #333333;
  }
  
  .company-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .company-label {
    font-size: 12px;
    font-weight: 500;
  }
  
  /* 반응형 스타일 */
  @media (max-width: 768px) {
    .company-labels {
      display: none;
    }
    
    .timeline-bar {
      height: 4px;
    }
    
    .marker-dot {
      width: 8px;
      height: 8px;
    }
    
    .marker-year {
      font-size: 10px;
    }
  }
</style>