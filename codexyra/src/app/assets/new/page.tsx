"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewAsset() {
  const router = useRouter();

  const [asset, setAsset] = useState({
    name: "",
    category: "",
    serial: "",
    location: "",
    assignedTo: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setAsset({
      ...asset,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(asset);

    router.push("/assets");
  }

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <div className="mx-auto max-w-2xl rounded-xl bg-slate-900 p-8">
        <h1 className="mb-8 text-3xl font-bold">
          Add New Asset
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            placeholder="Asset Name"
            value={asset.name}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 p-3 outline-none"
          />

          <input
            name="category"
            placeholder="Category"
            value={asset.category}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 p-3 outline-none"
          />

          <input
            name="serial"
            placeholder="Serial Number"
            value={asset.serial}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 p-3 outline-none"
          />

          <input
            name="location"
            placeholder="Location"
            value={asset.location}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 p-3 outline-none"
          />

          <input
            name="assignedTo"
            placeholder="Assigned To"
            value={asset.assignedTo}
            onChange={handleChange}
            className="w-full rounded-lg bg-slate-800 p-3 outline-none"
          />

          <button
            className="w-full rounded-lg bg-cyan-500 p-3 font-semibold"
          >
            Save Asset
          </button>
        </form>
      </div>
    </main>
  );
}
