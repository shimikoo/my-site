import { redirect } from "next/navigation";

async function submitAction(formData: FormData) {
  "use server";
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");
  // ここで実際は送信処理（メールAPI/DBなど）を呼ぶ
  console.log("[CONTACT]", { name, email, message });
  redirect("/thank-you");
}

export default function ContactPage() {
  return (
    <section className="bg-neutral-900 min-h-screen py-20">
      <main className="mx-auto max-w-xl px-4">
        <h1 className="text-3xl font-bold text-white">Contact</h1>
        <p className="mt-3 text-neutral-400">
          下記フォームからお気軽にお問い合わせください。
        </p>

        <form action={submitAction} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-neutral-300">お名前</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-neutral-700 bg-white text-neutral-900 px-4 py-3 outline-none focus:border-neutral-400"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-300">メールアドレス</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-neutral-700 bg-white text-neutral-900 px-4 py-3 outline-none focus:border-neutral-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-300">内容</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-1 w-full rounded-xl border border-neutral-700 bg-white text-neutral-900 px-4 py-3 outline-none focus:border-neutral-400"
              placeholder="ご用件をご記入ください"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-white px-6 py-3 font-medium text-neutral-900 hover:opacity-90"
          >
            送信する
          </button>
        </form>
      </main>
    </section>
  );
}
