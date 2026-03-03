import type { ReactNode } from "react";
import { DynamicBackground } from "@/components/ui/dynamic-background";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <DynamicBackground />
      <div className="relative flex min-h-screen flex-col">
        {children}
      </div>
    </>
  );
}
