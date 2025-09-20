// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-neutral-950 text-neutral-100">
      <Nav />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">MySite</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white">特徴</a>
          <a href="#cta" className="hover:text-white">お問い合わせ</a>
          <a href="/about" className="hover:text-fuchsia-400">About</a>
          <a href="/contact" className="hover:text-fuchsia-400">Contact</a>
          <a
            href="https://x.com"
            target="_blank"
            className="rounded-full border border-neutral-700 px-3 py-1 hover:border-white"
          >
            X
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-600 blur-[120px] opacity-20" />
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              あなたのビジネスを<br className="hidden md:block" />
              <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Webで最速に拡張
              </span>
            </h1>
            <p className="mt-5 text-neutral-300 md:text-lg">
              Next.js と Tailwind で軽快・高品質なサイトを。
              モダンなUIと高速表示で、成果につながる体験をつくります。
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-neutral-900 font-medium hover:opacity-90"
              >
                無料相談する
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 text-white hover:border-white"
              >
                機能を見る
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <div className="absolute inset-0 rounded-2xl border border-neutral-800 bg-neutral-900/50" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-neutral-400">Hero 画像や製品モックを配置</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: "高速表示",
      desc: "Next.js の自動最適化と画像最適化でLCPを短縮し、離脱を防ぎます。",
    },
    {
      title: "美しいUI",
      desc: "Tailwindで統一感のあるデザイン。レスポンシブ対応は標準装備。",
    },
    {
      title: "SEO/OG最適化",
      desc: "メタ情報やOGPの整備でSNS・検索からの流入を増やします。",
    },
  ];

  return (
    <section id="features" className="border-t border-neutral-800/60">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl md:text-4xl font-bold">選ばれる理由</h2>
        <p className="mt-3 text-neutral-300">
          初期公開から改善まで、成果に直結する要素を最初から組み込みます。
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
            >
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-neutral-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="border-y border-neutral-800/60 bg-neutral-900/30">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          まずは課題を聞かせてください
        </h3>
        <p className="mt-3 text-neutral-300">
          目標・納期・ご予算に沿って、最短のプランをご提案します。
        </p>
        <a
          href="mailto:hello@example.com?subject=Webサイト相談"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-neutral-900 hover:opacity-90"
        >
          メールで相談する
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} MySite</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">プライバシー</a>
          <a href="#" className="hover:text-white">利用規約</a>
          <a href="https://x.com" target="_blank" className="hover:text-white">X</a>
        </div>
      </div>
    </footer>
  );
}

