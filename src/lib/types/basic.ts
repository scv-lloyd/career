export interface ExperienceDescription {
  icon: string;
  contxt: string;
}
 // 경력 타입
export interface Experience {
  company: string;
  industry: string;//업종
  period: string;
  descriptions: ExperienceDescription[];
  skills?: string[];
}