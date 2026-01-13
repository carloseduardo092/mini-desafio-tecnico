import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Sidebar />

      <div style={{ marginLeft: 250 }}>
        <Header />

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
}
