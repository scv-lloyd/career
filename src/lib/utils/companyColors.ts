export const companyColors: Record<string, string> = {
    '위드와이드': 'var(--company1-color)',
    '캔비스': 'var(--company2-color)',
    '미투온': 'var(--company3-color)',
    '아몬드소프트': 'var(--company4-color)',
    '토미시스템': 'var(--company5-color)'
  };
  
  export function getColorForCompany(company: string | null): string {
    if (!company) return '#cccccc';
    return companyColors[company] || '#cccccc';
  }