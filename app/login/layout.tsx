import "@/app/ui/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
