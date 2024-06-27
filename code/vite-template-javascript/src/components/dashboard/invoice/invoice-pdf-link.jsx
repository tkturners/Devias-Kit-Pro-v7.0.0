'use client';

import * as React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { InvoicePDFDocument } from '@/components/dashboard/invoice/invoice-pdf-document';

export function InvoicePDFLink({ children }) {
  return (
    <PDFDownloadLink document={<InvoicePDFDocument invoice={undefined} />} fileName="invoice">
      {children}
    </PDFDownloadLink>
  );
}
