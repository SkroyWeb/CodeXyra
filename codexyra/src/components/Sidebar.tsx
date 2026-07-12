import Link from "next/link";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Assets", href: "/assets" },
    { name: "Employees", href: "/employees" },
    { name: "Reports", href: "/reports" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-10 text-xl font-bold text-white">
        Enterprise Panel
      </h2>

      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-cyan-500 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
