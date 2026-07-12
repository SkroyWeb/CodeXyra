import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const employees = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "Engineering",
    assets: 2,
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya Verma",
    department: "HR",
    assets: 1,
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Aman Gupta",
    department: "Finance",
    assets: 3,
    status: "Leave",
  },
];

export default function Employees() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Employees
              </h1>

              <p className="mt-2 text-slate-400">
                Manage employees and assigned assets.
              </p>
            </div>

            <button className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-600">
              Add Employee
            </button>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">
            <table className="w-full">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-300">
                    Employee ID
                  </th>

                  <th className="px-6 py-4 text-left text-slate-300">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-slate-300">
                    Department
                  </th>

                  <th className="px-6 py-4 text-left text-slate-300">
                    Assets
                  </th>

                  <th className="px-6 py-4 text-left text-slate-300">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {employees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-t border-slate-800 bg-slate-950"
                  >
                    <td className="px-6 py-5 text-white">
                      {employee.id}
                    </td>

                    <td className="px-6 py-5 text-white">
                      {employee.name}
                    </td>

                    <td className="px-6 py-5 text-slate-300">
                      {employee.department}
                    </td>

                    <td className="px-6 py-5 text-slate-300">
                      {employee.assets}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-green-500 px-3 py-1 text-sm text-white">
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
