import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f7f5f2] px-8">
      <div className="flex flex-col items-center text-center max-w-md w-full">
        <p className="text-xs tracking-[0.25em] text-[#aaa49e] uppercase mb-12">
          {profile.role}
        </p>

        <h1 className="mb-14">
          <span className="block text-4xl md:text-6xl font-light text-[#3a3734] tracking-[0.1em] leading-tight">
            {profile.name.last}
          </span>
          <span className="block text-4xl md:text-6xl font-light text-[#3a3734] tracking-[0.1em] leading-tight">
            {profile.name.first}
          </span>
        </h1>

        <p className="text-sm text-[#6a6560] mb-12 leading-loose">
          {profile.tagline}
        </p>

        <nav className="flex flex-col items-center gap-6">
          {[
            { label: "About", href: "#about" },
            { label: "Works", href: "#works" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs tracking-[0.15em] text-[#6a6560] hover:text-[#3a3734] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
