import { redirect } from "next/navigation";

async function submitAction(formData: FormData) {
  "use server";
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");
  console.log("[CONTACT]", { name, email, message });
  redirect("/thank-you");
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16 bg-white text-neutral-900">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-3 text-neutral-500">
        下記フォームからお気軽にお問い合わせください。
      </p>

      <form action={submitAction} className="mt-8 space-y-5">
        <div>
          <label className="block text-sm text-neutral-600">お名前</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3
                       text-neutral-900 placeholder-neutral-400 outline-none
                       focus:border-neutral-500 focus:ring-2 focus:ring-neutral-200"
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-600">メールアドレス</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3
                       text-neutral-900 placeholder-neutral-400 outline-none
                       focus:border-neutral-500 focus:ring-2 focus:ring-neutral-200"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-600">内容</label>
          <textarea
            name="message"
            rows={6}
            required
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3
                       text-neutral-900 placeholder-neutral-400 outline-none
                       focus:border-neutral-500 focus:ring-2 focus:ring-neutral-200"
            placeholder="ご用件をご記入ください"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-neutral-900 px-6 py-3 font-medium text-white hover:opacity-90"
        >
          送信する
        </button>
      </form>
    </main>
  );
}

