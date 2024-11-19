import type { Metadata } from "next";

import SideNavBar from "@/components/sidebar/SideNavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <main className="flex h-[100vh] w-[100vw] gap-32" >
      <aside className="flex items-center  h-full">
        <SideNavBar />
      </aside>
      <div className=" w-full h-full  ">
      {children}
      </div>
    </main>
  );
}
