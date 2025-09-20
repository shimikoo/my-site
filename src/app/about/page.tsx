export default function AboutPage() {
  return (
    <main className="min-h-dvh px-6 py-16 bg-neutral-950 text-neutral-100">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
        このページは <code>/about</code> に自動でルーティングされました。<br />
        Next.js App Router の特徴は、フォルダ構造がそのまま URL になることです。
      </p>
      <p className="mt-4 text-neutral-400">
        例えば <code>src/app/blog/page.tsx</code> を作れば
        <code>/blog</code> になります。
      </p>
      <a
        href="/"
        className="mt-8 inline-block rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium hover:opacity-90"
      >
        ホームへ戻る
      </a>
    </main>
  );
}
