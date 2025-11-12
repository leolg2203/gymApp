export default function MembershipCard({ active, daysLeft }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md text-white border border-gray-700 w-full max-w-lg mx-auto">
      <h3 className="text-xl font-semibold text-blue-400 mb-3">
        Estado de tu membresía
      </h3>

      {active ? (
        <>
          <p className="text-green-400 font-bold">✅ Activa</p>
          <p className="text-gray-300">Te quedan {daysLeft} días.</p>
        </>
        ) : (
        <>
          <p className="text-red-400 font-bold">❌ Inactiva</p>
          <p className="text-gray-300">Tu membresía ha expirado.</p>
        </>
      )}
    </div>
  );
}
