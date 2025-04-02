// src/lib/utils/responsive.ts

import { writable, derived } from 'svelte/store';

// 브라우저 환경인지 확인
const isBrowser = typeof window !== 'undefined';

// 브레이크포인트 정의
export const breakpoints = {
  sm: 480,  // 스몰 모바일
  md: 768,  // 태블릿
  lg: 1024, // 작은 데스크탑
  xl: 1280  // 큰 데스크탑
};

// 화면 너비를 추적하는 스토어 생성
export const screenWidth = writable(isBrowser ? window.innerWidth : 1024);

// 화면 방향을 추적하는 스토어 생성
export const isPortrait = derived(
  screenWidth,
  $screenWidth => isBrowser ? window.innerHeight > $screenWidth : false
);

// 화면 크기에 따른 디바이스 타입 스토어
export const device = derived(
  screenWidth,
  $screenWidth => {
    if ($screenWidth < breakpoints.sm) return 'mobile-sm';
    if ($screenWidth < breakpoints.md) return 'mobile';
    if ($screenWidth < breakpoints.lg) return 'tablet';
    if ($screenWidth < breakpoints.xl) return 'desktop';
    return 'desktop-xl';
  }
);

// 모바일 여부 확인 스토어
export const isMobile = derived(
  device,
  $device => $device === 'mobile' || $device === 'mobile-sm'
);

// 화면 크기 변경 감지하는 함수
export function initResponsiveTracking() {
  if (isBrowser) {
    const handleResize = () => {
      screenWidth.set(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  return () => {};
}