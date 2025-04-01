<script lang="ts">
  import Header from './components/Header.svelte';
  import Body from './components/Body.svelte';

  import { MyName } from './lib/datas/profile';
  import { Version } from './lib/datas/version';

  // const FooterMessage = "© 2023 경력 기술서 | 모든 권리 보유";
  const FooterMessage = "모든 권리 보유";
</script>

<svelte:head>
  <title>{MyName} | 경력 기술서</title>
  <meta name="description" content="게임 개발자 경력 기술서" />
  
  <!-- 외부 스타일시트 -->
  <!-- 폰트어썸: 아이콘 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <div class="app-container">
    <!-- 버전 정보 -->
    <div class="version-info">{Version}</div>
    
    <Header />
    
    <Body />
    
    <footer>
      <div class="footer-container">
        <p>{FooterMessage}</p>
      </div>
    </footer>
  </div>
</main>

<style>
  .app-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    position: relative;
  }
  
  .version-info {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 10px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
    z-index: 100;
  }
  
  footer {
    width: 100%;
    background-color: #2c3e50;
    color: white;
    padding: 15px 0;
    margin-top: 30px;
  }
  
  .footer-container {
    display: flex;
    justify-content: center; /* 중앙 정렬로 변경 */
    align-items: center;
    padding: 0 20px;
  }
  
  .footer-container p {
    margin: 0;
    font-size: 12px;
  }
</style>