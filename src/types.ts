export type PageRoute = '/' | '/course' | '/course/series-1' | '/course/series-2' | '/course/series-3' | '/register' | '/register/series-2' | '/register/series-3' | '/payment-result' | '/feedback';
export type { CourseData } from './data/courseData';

export interface Mentor {
  name: string;
  nameEn: string;
  title: string;
  role: string;
  description: string;
  image?: string;
  avatarSeed: string;
}
