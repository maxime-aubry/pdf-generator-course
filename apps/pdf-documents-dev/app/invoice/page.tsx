'use client';

export default function InvoicePdfViewer() {
  return (
    <iframe
      src="/api/invoice"
      width="100%"
      height="1500"
      style={{ border: 'none' }}
      title="PDF"
    />
  );
}
