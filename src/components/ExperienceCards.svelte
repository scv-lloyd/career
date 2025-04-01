<script lang="ts">
    import { experiences } from '../lib/datas/career';
    import { getColorForCompany } from '../lib/utils/companyColors';
  </script>
  
  <div class="experience-cards">
    {#each experiences as exp}
      <div class="experience-card">
        <div 
          class="card-color-bar" 
          style="background-color: {getColorForCompany(exp.company)}"
        ></div>
        
        <div class="card-content">
          <!-- 카드 헤더 -->
          <div class="card-header">
            <h3 class="company-name">{exp.company}</h3>
            <span class="period">{exp.period}</span>
          </div>
          
          <!-- 태그 섹션 -->
          <div class="tags-container">
            <span class="tag industry-tag">{exp.industry}</span>
            {#if exp.skills && exp.skills.length > 0}
              {#each exp.skills as skill}
                <span class="tag tech-tag">{skill}</span>
              {/each}
            {/if}
          </div>
          
          <!-- 업무 내용 -->
          <div class="job-description">
            {#each exp.descriptions as desc}
              {#if desc.icon === 'circle'}
                <h4 class="desc-title">{desc.contxt}</h4>
              {:else if desc.icon === 'arrow'}
                <div class="desc-item"
                >
                  <div 
                    class="bullet-point" 
                    style="background-color: {getColorForCompany(exp.company)}"
                  ></div>
                  <span>{desc.contxt}</span>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    .experience-cards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .experience-card {
      display: flex;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    
    .experience-card:hover {
      transform: translateY(-5px);
    }
    
    .card-color-bar {
      width: 10px;
      flex-shrink: 0;
    }
    
    .card-content {
      flex-grow: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    
    .company-name {
      font-size: var(--font-xxlarge);
      font-weight: bold;
      color: var(--text-primary);
    }
    
    .period {
      font-size: var(--font-medium);
      color: var(--text-secondary);
    }
    
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }
    
    .tag {
      padding: 4px 10px;
      border-radius: 15px;
      font-size: var(--font-small);
      font-weight: 500;
    }
    
    .industry-tag {
      background-color: rgba(52, 152, 219, 0.1);
      color: var(--secondary-color);
    }
    
    .tech-tag {
      background-color: rgba(46, 204, 113, 0.1);
      color: #2ecc71;
    }
    
    .job-description {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }
    
    .desc-title {
      grid-column: 1 / -1;
      font-size: var(--font-large);
      font-weight: bold;
      margin-bottom: 10px;
      color: var(--text-primary);
    }
    
    .desc-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: var(--font-medium);
    }
    
    .bullet-point {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    /* 반응형 디자인 */
    @media (max-width: 768px) {
      .job-description {
        grid-template-columns: 1fr;
      }
      
      .card-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
    
    @media (max-width: 480px) {
      .card-content {
        padding: 15px;
      }
      
      .company-name {
        font-size: var(--font-xlarge);
      }
      
      .tags-container {
        margin-bottom: 10px;
      }
    }
  </style>