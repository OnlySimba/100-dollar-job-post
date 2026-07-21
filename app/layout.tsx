import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { AppProvider } from "@/components/AppProvider";

export const metadata: Metadata = { title: "$100 Job Post", description: "Small jobs. Fair price. Done right." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><AppProvider><Header/><main>{children}</main><footer><div className="wrap footer"><strong>$100 Job Post</strong><span>Small jobs. Fair price. Done right.</span><span>© 2026</span></div></footer></AppProvider></body></html>;
}
