export default function ThankYou() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">送信ありがとうございました！</h1>
      <p className="mt-4 text-neutral-300">
        内容を確認のうえ、折り返しご連絡いたします。
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