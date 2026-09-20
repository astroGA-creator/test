import React from 'react';
import type { PageRoute } from '../types';
import { CoursePage } from './CoursePage';
import { series2Data } from '../data/courseData';

export const CourseSeries2Page: React.FC<{ onNavigate: (path: PageRoute) => void }> = ({ onNavigate }) => {
  return <CoursePage data={series2Data} onNavigate={onNavigate} />;
};
