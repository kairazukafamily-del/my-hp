import { profile } from "@/data/profile";

const linkLabels: Record<keyof typeof profile.links, string> = {
  github: "GitHub",
  email: "Email",
  note: "Note",
  threads: "Threads",
};

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
          {(Object.keys(profile.links) as (keyof typeof profile.links)[]).map((key) => (
            <a
              key={key}
              href={profile.links[key]}
              className="text-xs tracking-[0.15em] text-[#6a6560] hover:text-[#3a3734] transition-colors"
            >
              {linkLabels[key]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
