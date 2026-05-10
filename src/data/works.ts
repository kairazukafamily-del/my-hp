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
  {
    id: 1,
    title: "Subscriptions",
    description: "月額サービスを一元管理するためのツール。USD / JPY 自動換算、ブラウザ通知に対応。",
    tags: ["Next.js", "TypeScript", "localStorage"],
    url: "https://subscription-manager-jade.vercel.app",
  },
];
