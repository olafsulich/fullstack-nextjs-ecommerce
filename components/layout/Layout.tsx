import type { ReactNode } from "react";
import { Header } from "./header/Header";

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className="h-full w-full bg-white py-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center">
        FullStack Next.js E-commerce
      </h1>
      {children}
    </main>
  </>
);
