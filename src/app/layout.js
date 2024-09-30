import "./globals.css";

export const metadata = {
  title: "Quiz de Práctica CEI",
  description: "App con NextJS 14 y Mongo - Quiz de Práctica CEI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
