import { works } from "@/data/works";

export default function Works() {
  return (
    <section id="works" className="py-32 px-8 bg-[#f7f5f2]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-light text-[#3a3734] tracking-wide mb-12 text-center">
          Works
        </h2>

        <div className="grid grid-cols-2 gap-12">
          {works.map((work) => (
            <div key={work.id} className="flex flex-col items-center text-center">
              <h3 className="text-base font-light text-[#3a3734] mb-3">
                {work.title}
              </h3>

              <p className="text-sm text-[#7a7572] leading-loose mb-4">
                {work.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-0.5 bg-[#eceae6] text-[#6a6560] rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={work.url}
                {...(work.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs tracking-[0.15em] text-[#6a6560] hover:text-[#3a3734] transition-colors"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
