export default function PlanCard({ title, price, features }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md w-72 text-white hover:shadow-lg transition-all border border-gray-700">
      <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">${price}/mes</p>
      <ul className="text-sm text-gray-300 space-y-1">
        {features.map((f, i) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">
        Elegir plan
      </button>
    </div>
  );
}
