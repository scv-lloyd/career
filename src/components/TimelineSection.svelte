<script lang="ts">
    import { experiences } from '../lib/datas/career';
    import { getColorForCompany } from "../lib/utils/companyColors";
  
    // 타임라인 시작 및 종료 연도
    const startYear = 2010;
    const endYear = 2024;
    const totalYears = endYear - startYear + 1;
    
    // 연도 배열 생성
    const years = Array.from({ length: totalYears }, (_, i) => startYear + i);
    
    // 연도에서 회사명 찾기
    function getCompanyNameByYear(year: number): string | null {
      for (const exp of experiences) {
        const periodParts = exp.period.split(' ~ ');
        const startStr = periodParts[0];
        const endStr = periodParts[1] || '현재';
        
        const startYear = parseInt(startStr.split('.')[0]);
        const endYear = endStr === '현재' 
          ? new Date().getFullYear() 
          : parseInt(endStr.split('.')[0]);
        
        if (year >= startYear && year <= endYear) {
          return exp.company;
        }
      }
      return null;
    }
  </script>
  
  <div class="timeline-section">
    <h2 class="section-title">경력 요약</h2>
    
    <div class="timeline-container">
      <div class="timeline-bar">
        {#each years as year, index}
        {#if index < years.length - 1}
          {@const company = getCompanyNameByYear(year)}
          {#if company}
          <div class="timeline-segment" style="background-color: {getColorForCompany(company)}"></div>
          {:else}
          <div class="timeline-segment empty"></div>
          {/if}
        {/if}
        {/each}
      </div>
      
      <div class="timeline-markers">
        {#each experiences as exp}
        {@const startYear = parseInt(exp.period.split('.')[0])}
        <div class="timeline-year-marker">
          <div class="marker-dot"></div>
          <div class="marker-year">{startYear}</div>
        </div>
        {/each}
      </div>
      
      <div class="timeline-companies">
        {#each [...experiences].reverse() as exp, index}
        {#if index < 5}
          <div class="company-label" style="color: {getColorForCompany(exp.company)}">
          {exp.company}
          </div>
        {/if}
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .section-title {
      font-size: var(--font-xxlarge);
      font-weight: bold;
      color: var(--primary-color);
      margin-bottom: 20px;
    }
    
    .timeline-section {
      margin-bottom: 40px;
    }
    
    .timeline-container {
      position: relative;
      margin-bottom: 30px;
    }
    
    .timeline-bar {
      height: 6px;
      background-color: #e0e0e0;
      border-radius: 3px;
      display: flex;
      margin: 20px 0;
    }
    
    .timeline-segment {
      flex: 1;
      height: 100%;
    }
    
    .timeline-segment.empty {
      background-color: #e0e0e0;
    }
    
    .timeline-markers {
      display: flex;
      justify-content: space-between;
      position: relative;
      top: -28px;
    }
    
    .timeline-year-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    
    .marker-dot {
      width: 10px;
      height: 10px;
      background-color: #333;
      border-radius: 50%;
      margin-bottom: 5px;
    }
    
    .marker-year {
      font-size: 12px;
      color: #333;
    }
    
    .timeline-companies {
      display: flex;
      justify-content: space-around;
      margin-top: -10px;
    }
    
    .company-label {
      font-size: 10px;
      font-weight: 500;
    }
    
    /* 반응형 스타일 */
    @media (max-width: 768px) {
      .timeline-companies {
        display: none;
      }
    }
    
    @media (max-width: 480px) {
      .timeline-markers {
        justify-content: space-between;
      }
      
      .timeline-year-marker:nth-child(odd) {
        display: none;
      }
    }
  </style>