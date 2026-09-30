import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Plantillas360 - Generador de Google Apps Script',
  description: 'Generador de plantillas automatizadas de Google Sheets mediante IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
