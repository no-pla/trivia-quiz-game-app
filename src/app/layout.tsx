import "./reset.css";
import Head from "./head";
import Recoil from "@/share/Recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head />
      <body>
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}
