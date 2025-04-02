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
  
  // 회사별 기간 정보 정확히 계산 및 정렬
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
        endYear,
        period: exp.period
      };
    })
    .sort((a, b) => a.startYear - b.startYear);
  
  // 특정 연도의 회사 찾기
  function getCompanyForYear(year: number): string | null {
    for (const period of companyPeriods) {
      if (year >= period.startYear && year <= period.endYear) {
        return period.company;
      }
    }
    return null;
  }
  
  // 마커에 표시할 연도 (회사 시작 연도만)
  const markerYears = companyPeriods.map(p => p.startYear);
  
  interface TimelineSegment {
    year: number,
    company: string | null,
    color: string,
  }
  // 타임라인 세그먼트 데이터 생성
  const timelineSegments: TimelineSegment[] = [];
  for (let i = 2010; i <= 2023; i++) {
    const company = getCompanyForYear(i);
    timelineSegments.push({
      year: i,
      company,
      color: getColorForCompany(company)
    });
  }
  
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
  
  // 첫 번째와 마지막 회사 가져오기
  const firstCompany = companyPeriods[0].company;
  const lastCompany = companyPeriods[companyPeriods.length - 1].company;
  
  // 각 회사별 마커 위치 조정을 위한 오프셋 값 (% 단위)
  const markerPositionAdjustments: Record<string, number> = {
    '토미시스템': 0, // 기본 위치 유지
    '아몬드소프트': 5, // 우측으로 3% 이동
    '미투온': -3, // 좌측으로 2% 이동
    '캔비스': 2, // 우측으로 1% 이동
    '위드와이드': -7 // 좌측으로 8% 이동
  };
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
    
    <!-- 회사 시작 연도에만 마커 표시 - 위치 수정 및 회사별 조정 -->
    <div class="timeline-markers">
      {#each companyPeriods as period, i}
        <!-- 회사별 마커 위치 조정 -->
        <div 
          class="timeline-year-marker"
          style="
            left: calc({(period.startYear - 2010) / 13 * 100}% + {markerPositionAdjustments[period.company] || 0}%); 
            transform: none;
          "
        >
          <div class="marker-dot" style="background-color: {getColorForCompany(period.company)};"></div>
          
          <!-- <div class="marker-content" style="align-items: {i === 0 ? 'flex-start' : 'center'}; transform: {i === 0 ? 'none' : 'translateX(-50%)'};"> -->
          <div 
            class="marker-content"
            style="
              align-items: 'flex-start'};
              transform: {'translateX(-10%)'}; 
            "
          >
            <div class="marker-year">{period.startYear}</div>
            <div 
              class="company-label" 
              style="
                color: {getColorForCompany(period.company)};
                text-align: {i === 0 ? 'left' : 'center'};
              "
            >
              {period.company}
            </div>
          </div>
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
    padding-bottom: 40px; /* 회사 이름을 위한 공간 확보 */
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
    position: relative;
    height: 0px;
    margin-top: -15px;
  }
  
  .timeline-year-marker {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .marker-content {
    display: flex;
    flex-direction: column;
    position: relative;
    width: max-content;
  }
  
  .marker-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  
  .marker-year {
    font-size: 12px;
    color: #333333;
    margin-bottom: 0px;
  }
  
  .company-label {
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
  }
  
  /* 반응형 스타일 */
  @media (max-width: 768px) {
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
    
    .company-label {
      font-size: 10px;
    }
    
    .timeline-container {
      padding-bottom: 60px; /* 모바일에서 회사 이름이 겹치지 않도록 공간 확보 */
    }
  }
</style>