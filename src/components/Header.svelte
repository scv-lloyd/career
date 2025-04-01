<script lang="ts">
    // 필요한 데이터나 함수를 여기에 추가할 수 있습니다
  </script>
  
  <header class="header">
    <div class="header-content">
      <h1 class="header-title">경력 기술서</h1>
    </div>
  </header>
  
  <style>
    .header {
      width: 100%;
      height: 100px;
      background-color: var(--primary-color);
      color: white;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }
    
    .header-content {
      padding: 0 50px;
      width: 100%;
    }
    
    .header-title {
      font-size: var(--font-title);
      font-weight: bold;
      margin: 0;
    }
    
    /* 반응형 스타일 */
    @media (max-width: 768px) {
      .header {
        height: 80px;
        margin-bottom: 20px;
      }
      
      .header-content {
        padding: 0 30px;
      }
    }
    
    @media (max-width: 480px) {
      .header {
        height: 70px;
        margin-bottom: 15px;
      }
      
      .header-content {
        padding: 0 20px;
      }
    }
  </style>