import React from 'react';
import type { PageRoute } from '../types';
import { CoursePage } from './CoursePage';
import { series3Data } from '../data/courseData';

export const CourseSeries3Page: React.FC<{ onNavigate: (path: PageRoute) => void }> = ({ onNavigate }) => {
  return <CoursePage data={series3Data} onNavigate={onNavigate} />;
};
