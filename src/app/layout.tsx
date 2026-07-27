import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apogeum Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
