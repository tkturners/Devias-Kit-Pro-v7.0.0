'use client';

import dynamic from 'next/dynamic';
import type ReactPDF from '@react-pdf/renderer';

export const PDFViewer = dynamic<ReactPDF.PDFViewerProps>(
  () => import('@react-pdf/renderer').then((module) => module.PDFViewer),
  { ssr: false }
);
