export default function Register() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #e0e7ff 0%, #f7f7f7 100%)" }}>
      <div style={{ maxWidth: 420, width: "100%", background: "rgba(255,255,255,0.95)", padding: 40, borderRadius: 24, boxShadow: "0 4px 32px rgba(30,30,30,0.12)", display: "flex", flexDirection: "column", alignItems: "center", letterSpacing: 2 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📝</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, letterSpacing: 2, color: "#222" }}>Register</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
          <input type="text" placeholder="Username" style={{ border: "1px solid #bbb", padding: 14, borderRadius: 8, fontSize: 18, letterSpacing: 2, outline: "none", transition: "border 0.2s" }} onFocus={e => e.currentTarget.style.border = '1.5px solid #e91e63'} onBlur={e => e.currentTarget.style.border = '1px solid #bbb'} />
          <input type="password" placeholder="Password" style={{ border: "1px solid #bbb", padding: 14, borderRadius: 8, fontSize: 18, letterSpacing: 2, outline: "none", transition: "border 0.2s" }} onFocus={e => e.currentTarget.style.border = '1.5px solid #e91e63'} onBlur={e => e.currentTarget.style.border = '1px solid #bbb'} />
          <input type="password" placeholder="Confirm Password" style={{ border: "1px solid #bbb", padding: 14, borderRadius: 8, fontSize: 18, letterSpacing: 2, outline: "none", transition: "border 0.2s" }} onFocus={e => e.currentTarget.style.border = '1.5px solid #e91e63'} onBlur={e => e.currentTarget.style.border = '1px solid #bbb'} />
          <button type="submit" style={{ background: "linear-gradient(90deg, #e91e63 0%, #1a73e8 100%)", color: "#fff", padding: 14, borderRadius: 8, fontSize: 20, fontWeight: 700, letterSpacing: 2, border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(30,30,30,0.08)", transition: "background 0.2s, transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>Register</button>
        </form>
      </div>
    </main>
  );
}
