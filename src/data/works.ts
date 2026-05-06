export type Work = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url: string;
};

export const works: Work[] = [
  {
    id: 0,
    title: "Personal Website",
    description: "本サイト。静かな余白と最小構成で設計しています。現在も調整しながら更新しています。",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "/",
  },
];
