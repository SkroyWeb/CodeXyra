export default function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <h1 className="text-2xl font-bold text-cyan-400">
        AssetFlow
      </h1>

      <div className="flex items-center gap-4">
        <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-slate-700">
          Notifications
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-semibold text-white">
          A
        </div>
      </div>
    </nav>
  );
}
