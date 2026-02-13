import "./globals.css";

export const metadata = {
  title: "Ink Avenue – Festival Airbrush Tattoos",
  description: "Fast & bold airbrush tattoos made live at festivals.",
  icons: {
    icon: "/media/inkavenue-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-text overflow-x-hidden">{children}</body>
    </html>
  );
}
