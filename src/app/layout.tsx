import "./reset.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head />
      <body>{children}</body>
    </html>
  );
}
