import './globals.css';

export const metadata = {
  title: 'Ink Avenue – Festival Airbrush Tattoos',
  description: 'Fast & bold airbrush tattoos made live at festivals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
