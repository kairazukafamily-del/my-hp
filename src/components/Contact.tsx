import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 bg-[#f7f5f2]">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl font-light text-[#3a3734] tracking-wide mb-12">
          Contact
        </h2>

        <p className="text-sm text-[#7a7572] leading-loose mb-12">
          つくることについて、気軽にお話できれば嬉しいです。
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={profile.links.threads}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] text-[#6a6560] hover:text-[#3a3734] transition-colors"
          >
            Threads
          </a>
          <a
            href={profile.links.note}
            className="text-xs tracking-[0.15em] text-[#6a6560] hover:text-[#3a3734] transition-colors"
          >
            Note
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] text-[#6a6560] hover:text-[#3a3734] transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.links.email}
            className="text-xs tracking-[0.15em] text-[#6a6560] hover:text-[#3a3734] transition-colors"
          >
            E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
