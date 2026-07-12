import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-white">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Welcome back, Admin.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card title="Total Assets" value="1,245" />
            <Card title="Assigned Assets" value="983" />
            <Card title="Maintenance" value="34" />
            <Card title="Available Assets" value="228" />
          </div>

          <div className="mt-10 rounded-xl bg-slate-900 p-6">
            <h2 className="text-xl font-semibold text-white">
              Recent Activity
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-lg bg-slate-800 p-4 text-slate-300">
                Dell Latitude assigned to Rahul Sharma.
              </div>

              <div className="rounded-lg bg-slate-800 p-4 text-slate-300">
                HP Printer marked for maintenance.
              </div>

              <div className="rounded-lg bg-slate-800 p-4 text-slate-300">
                Lenovo ThinkPad returned to inventory.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
