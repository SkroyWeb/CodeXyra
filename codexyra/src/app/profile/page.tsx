import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-white">
            Profile
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your account information.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-900 p-8 shadow-lg">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500 text-3xl font-bold text-white">
                A
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Admin User
                </h2>

                <p className="text-slate-400">
                  System Administrator
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Full Name
                </label>

                <input
                  type="text"
                  value="Admin User"
                  readOnly
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  value="admin@assetflow.com"
                  readOnly
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Department
                </label>

                <input
                  type="text"
                  value="Administration"
                  readOnly
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Role
                </label>

                <input
                  type="text"
                  value="Super Admin"
                  readOnly
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
                />
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
                Edit Profile
              </button>

              <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
                Change Password
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
