import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          AssetFlow
        </h1>

        <Link
          href="/login"
          className="rounded-lg bg-cyan-500 px-5 py-2 transition hover:bg-cyan-600"
        >
          Login
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-10 py-24">
        <h1 className="text-6xl font-extrabold leading-tight">
          Enterprise Asset
          <br />
          Management
          <span className="text-cyan-400"> Made Easy</span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300">
          Track, assign, monitor and maintain every company asset through one
          intelligent enterprise platform designed for modern organizations.
        </p>

        <div className="mt-10 flex gap-5">
          <Link
            href="/dashboard"
            className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-600"
          >
            Open Dashboard
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-cyan-500 px-7 py-4 transition hover:bg-cyan-500"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-10 pb-20 md:grid-cols-3">
        <div className="rounded-xl bg-slate-900 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Asset Tracking
          </h2>

          <p className="text-slate-400">
            Monitor every enterprise asset in real time with complete ownership
            and location history.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Smart Maintenance
          </h2>

          <p className="text-slate-400">
            Schedule preventive maintenance and receive intelligent service
            reminders.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Business Analytics
          </h2>

          <p className="text-slate-400">
            Gain actionable insights through real-time reports, charts and
            performance metrics.
          </p>
        </div>
      </section>
    </main>
  );
}        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
