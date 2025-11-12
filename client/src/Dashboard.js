import Navbar from "./components/Navbar";
import MembershipCard from "./components/MembershipCard";
import PlanCard from "./components/PlanCard";

export default function Dashboard({ onLogout }) {
  // 🔹 Datos temporales (luego se obtendrán del backend)
  const membership = { active: true, daysLeft: 12 };

  const plans = [
    {
      title: "Plan Básico",
      price: 20,
      features: ["Acceso al gimnasio", "1 asesoría mensual", "Uso de lockers"],
    },
    {
      title: "Plan Premium",
      price: 40,
      features: [
        "Acceso ilimitado",
        "Clases grupales incluidas",
        "Seguimiento personalizado",
      ],
    },
    {
      title: "Plan Elite",
      price: 60,
      features: [
        "Acceso 24/7",
        "Entrenador personal",
        "Nutrición personalizada",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">

      <Navbar onLogout={onLogout} />

      <div className="p-8 text-white space-y-10">
        <section>
          <MembershipCard active={membership.active} daysLeft={membership.daysLeft} />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
            Nuestros Planes
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {plans.map((p, i) => (
              <PlanCard key={i} {...p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
