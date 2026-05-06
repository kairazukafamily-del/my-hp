import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-[#f7f5f2]">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl font-light text-[#3a3734] tracking-wide mb-12">
          About
        </h2>

        <div className="space-y-4 text-sm text-[#7a7572] leading-loose mb-10">
          {profile.bio.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p>
            設計や試行の過程は、
            <a
              href={profile.links.note}
              className="text-[#6a6560] border-b border-[#6a6560] hover:text-[#3a3734] hover:border-[#3a3734] transition-colors"
            >
              note
            </a>
            にまとめています。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-0.5 bg-[#eceae6] text-[#6a6560] rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* TODO: プロフィール画像を追加する */}
      </div>
    </section>
  );
}
