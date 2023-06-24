import "./reset.css";
import Head from "./head";
import Recoil from "@/share/Recoil";
import ReactQuery from "@/share/ReactQuery";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head />
      <body>
        <ReactQuery>
          <Recoil>{children}</Recoil>
        </ReactQuery>
      </body>
    </html>
  );
}
