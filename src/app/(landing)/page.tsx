import CharacterCarousel from "@/collections/CharacterCarousel";

const newsList = [
  {
    title: "Cheers to the Spring Festival",
    date: "2025/01/28",
    description: "Celebrate the Spring Festival with new in-game events and rewards!",
  },
  {
    title: "HAPPY NEW YEAR!",
    date: "2025/01/01",
    description: "Wishing all players a fantastic new year filled with adventure!",
  },
  {
    title: "ANANTA Vanguards is recruiting!",
    date: "2024/12/05",
    description: "Join the ANANTA Vanguards and be part of our growing community.",
  },
];

export default function Home() {
  return (
    <main>
      <section id="home" style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: 2, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background: "url(/assets/Honkai-Impact-3rd-part-2.png) center/cover no-repeat",
          filter: "blur(12px) brightness(1.15)",
          opacity: 0.7,
        }} />
        <h1 style={{ position: "relative", zIndex: 1, color: "rgb(255, 255, 255)", WebkitTextStroke: "0.1px black", fontSize: "52px", letterSpacing: 2, margin: 0 }} className="text-5xl font-normal font-serif">NBB TUS - Nippon 文化ブ</h1>
      </section>
      <section id="characters" style={{ padding: "4rem 0", background: "#f7f7f7", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 className="text-3xl font-normal mb-8 text-center">Characters</h2>
        <CharacterCarousel />
      </section>
      <section id="news" className="news-sans-serif" style={{ padding: "4rem 0" }}>
        <h2 className="text-3xl font-normal mb-12 text-center">News & Blog</h2>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {newsList.map((news, idx) => (
            <div key={idx} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(30,30,30,0.06)", padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2, margin: 0 }}>{news.title}</h3>
                <span style={{ fontSize: 18, color: "#888", fontWeight: 500, letterSpacing: 2 }}>{news.date}</span>
              </div>
              <p style={{ fontSize: 20, color: "#222", letterSpacing: 2, margin: 0 }}>{news.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
