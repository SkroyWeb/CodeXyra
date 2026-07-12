type Asset = {
  id: number;
  name: string;
  category: string;
  assignedTo: string;
  location: string;
  status: string;
};

export default function AssetCard({
  name,
  category,
  assignedTo,
  location,
  status,
}: Asset) {
  const badge =
    status === "Assigned"
      ? "bg-green-500"
      : status === "Maintenance"
      ? "bg-orange-500"
      : "bg-cyan-500";

  return (
    <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          {name}
        </h2>

        <span className={`rounded-full px-3 py-1 text-sm text-white ${badge}`}>
          {status}
        </span>
      </div>

      <div className="mt-5 space-y-2 text-slate-300">
        <p>Category: {category}</p>
        <p>Assigned To: {assignedTo}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}
