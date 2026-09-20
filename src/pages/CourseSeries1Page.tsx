import React from 'react';
import type { PageRoute } from '../types';
import { CoursePage } from './CoursePage';
import { series1Data } from '../data/courseData';

export const CourseSeries1Page: React.FC<{ onNavigate: (path: PageRoute) => void }> = ({ onNavigate }) => {
  return <CoursePage data={series1Data} onNavigate={onNavigate} />;
};
