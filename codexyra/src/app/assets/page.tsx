import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AssetCard from "@/components/AssetCard";
import { assets } from "@/data/assets";
import Link from "next/link";

export default function Assets() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Assets
              </h1>

              <p className="mt-2 text-slate-400">
                Manage and monitor enterprise assets.
              </p>
            </div>

            
            <Link
  href="/assets/new"
  className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-600"
>
  Add Asset
</Link>
          </div>

          <div className="mt-8 flex gap-4">
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {assets.map((asset) => (
              <AssetCard key={asset.id} {...asset} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
