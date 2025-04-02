import type { Experience } from "../types/basic";

// 직무 경력
export const experiences: Experience[] = [
  { company: "토미시스템", period: '2010.08 ~ 2014.04',
    industry: '오프라인 포커게임 개발',
    descriptions: [
      { icon: "circle", contxt: "C++ 클라이언트" },
        { icon: "arrow", contxt: "게임 구조 구현" },
        { icon: "arrow", contxt: "UI 구현" },
        { icon: "arrow", contxt: "xml 오브젝트 작성 및 스크립트로 애니메이션 구현" },

      { icon: "circle", contxt: "FLASH 애니메이션" },
        { icon: "arrow", contxt: "이미지 리소스 타임라인 작업" },
        { icon: "arrow", contxt: "Actionscript로 애니메이션 분기 등 처리" },

      { icon: "circle", contxt: "임베디드" },
        { icon: "arrow", contxt: "아케이드 게임기 버튼 입력 처리" },
        { icon: "arrow", contxt: "게임물 등급위원회 성인 게임기 투입 금액 확인 기기 처리" },

      { icon: "circle", contxt: "Boost 라이브러리" },
        { icon: "arrow", contxt: "편의와 C++ 기능 보완" },
        // { icon: "arrow", contxt: "Any: 스크립트와 C++의 바인딩 간 타입 처리 보완" },
        // { icon: "arrow", contxt: "Filesystem: file 보완" },
        // { icon: "arrow", contxt: "Format: string 보완" },
        // { icon: "arrow", contxt: "Lambda" },
        // { icon: "arrow", contxt: "shared_ptr: 스마트 포인터" },
    ],
    skills: ['C++' , "boost 라이브러리", "FLASH", "Actionscript"]
  },
  { company: '아몬드소프트', period: '2014.06 ~ 2015.08',
    industry: '2D MMORPG 게임 개발',
    descriptions: [
      { icon: "circle", contxt: 'C++ 클라이언트' },
        { icon: "arrow", contxt: "인벤토리 창이나 스킬 창 등의 UI 업무" },
        { icon: "arrow", contxt: "cocos2d-x 렌더링 마이그레이션" },

      { icon: "circle", contxt: '버그 수정' },
        { icon: "arrow", contxt: "프레임워크의 마이너 버그를 수정하여 기능 안정화 지원" },
        { icon: "arrow", contxt: "MFC로 개발된 오브젝트 / 맵 툴 버그 수정" },
    ],
    skills: ['C', "MFC"]
  },
  { company: '미투온', period: '2016.03 ~ 2020.10',
    industry: '온라인 포커게임 개발',    
    descriptions: [
      { icon: "circle", contxt: '공통 업무' },
        { icon: "arrow", contxt: "TCP / IP 소켓통신 처리" },
        { icon: "arrow", contxt: "DB 정보 API 처리" },
        { icon: "arrow", contxt: "게임 UI" },
        { icon: "arrow", contxt: "이벤트 컨텐츠 개발" },

      { icon: "circle", contxt: 'PC 클라이언트' },
        { icon: "arrow", contxt: "빌드 관리 및 업데이트" },
        { icon: "arrow", contxt: "오브젝트 툴 리소스 작업" },

      { icon: "circle", contxt: '모바일 클라이언트' },
        { icon: "arrow", contxt: "안드로이드 빌드 및 업데이트" },
    ],
    skills: ["Unity", "NGUI", "C++", "MFC"]
  },
  { company: '캔비스', period: '2020.11 ~ 2022.06',
    industry: '온라인 포커게임 개발',
    descriptions: [
      { icon: "circle", contxt: 'Unity 클라이언트' },
        { icon: "arrow", contxt: "TCP / IP 소켓통신 처리" },
        { icon: "arrow", contxt: "DB 정보 API 처리" },
        { icon: "arrow", contxt: "홀덤 게임 류 다수 신규 개발" },
        { icon: "arrow", contxt: "토너먼트 서비스 신규 개발" },
        
      // { icon: "circle", contxt: '재택 근무자와 협업' },
      //   { icon: "arrow", contxt: "클라이언트 담당자와의 분업 조율" },
      //   { icon: "arrow", contxt: "아트 담당자의 리소스 관리 및 인게임 적용" },
    ],
    skills: ["Unity", "NGUI"]
  },
  { company: '위드와이드', period: '2023.07 ~ 2023.12',
    industry: '온라인 포커게임 개발',
    descriptions: [
      { icon: "circle", contxt: 'Unity 클라이언트' },
        { icon: "arrow", contxt: "TCP / IP 소켓통신 처리" },
        { icon: "arrow", contxt: "DB 정보 API 처리" },
        { icon: "arrow", contxt: "게임 UI" },
        { icon: "arrow", contxt: "기존 클라이언트 버그 수정 및 기능 보완" },
        { icon: "arrow", contxt: "안드로이드 & iOS 빌드 및 업데이트" },
    ],
    skills: ["Unity", "UGUI"]
  },
   // {
   //   company: '토미시스템',
   //   industry: '오프라인 포커게임 개발',
   //   period: '20xx.xx ~ 20xx.xx',
   //   descriptions: [
   //     { icon: "circle", contxt: '온라인 포커게임 개발 (회사 본업)' },
   //     { icon: "check", contxt: '게임 클라이언트 담당 (내 업무)' },
   //     { icon: "gem", contxt: '플래시로 분기 처리로 다양한 애니메이션 재미 요소 (내 업무성과)' },
   //     { icon: "star", contxt: '개발력 향상 (커리어)' },
   //   ],
   //   skills: ['C#', 'Unity', 'UGUI']
   // },
 ];
 