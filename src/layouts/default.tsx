import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-x-hidden ">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 text-small">
        <div className="flex flex-col items-center gap-1">
          <span>© 2025 {siteConfig.name}</span>
          <span className="text-default-400">
            Template borrowed from{" "}
            <a
              href="https://xiaohao-liu.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-default-600"
            >
              Xiaohao Liu
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
