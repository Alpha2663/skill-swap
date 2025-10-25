export default function TopProviders() {
  const providers = [
    { name: "Alex Martin", skill: "Guitar", rating: 4.8 },
    { name: "Sara Hossain", skill: "English", rating: 4.7 },
    { name: "Anita Das", skill: "Yoga", rating: 4.9 },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-yellow-600 text-center">
        Top Rated Providers
      </h2>......
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {providers.map((p, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl"
          >
            <div className="text-4xl mb-2">🏆</div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p>{p.skill}</p>
            <p className="text-yellow-600 font-semibold">⭐ {p.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
