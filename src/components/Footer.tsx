import { siteContent } from '@/data/content';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#e8e2d9]">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-mono text-xs text-[#8a8078]">
          {siteContent.name}
        </p>
        <p className="font-mono text-xs text-[#8a8078]">
          {siteContent.footer.message}
        </p>
      </div>
    </footer>
  );
}
