'use client'

import { useEffect, useState, MouseEvent } from "react";
import Link from "next/link";
import { DiscordIcon, XTwitterIcon, InstagramIcon } from "@/components/icons";

type NavItem = {
  id: string;
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "characters", label: "Characters", href: "#characters" },
  { id: "news", label: "News", href: "#news" },
  { id: "login", label: "Login", href: "/login" },
  { id: "register", label: "Register", href: "/register" },
];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionNavs = navItems.filter(item => item.href.startsWith("#"));
      const offsets = sectionNavs.map((item) => {
        const el = document.getElementById(item.id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const index = offsets.findIndex((top) => top > 80);
      setActive(
        index === -1 ? sectionNavs[sectionNavs.length - 1].id : sectionNavs[Math.max(0, index - 1)].id
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for in-page links
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      style={{
        margin: 0,
        padding: 0,
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(30,30,30,0.97)",
        borderBottom: "1px solid #eee",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 64,
      }}
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div style={{ fontWeight: 500, fontSize: 22, letterSpacing: 2, color: "#fff", display: "flex", alignItems: "center", paddingRight: "100px"}}>
          <span style={{ marginRight: 6, fontSize: 26 }}>🌸</span> NBB TUS
        </div>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0, letterSpacing: 2 }}>
          {navItems.map((item) => (
            <li key={item.id}>
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  onClick={e => handleNavClick(e, item.href)}
                  style={{
                    fontWeight: active === item.id ? 800 : 400,
                    color: active === item.id ? "#e91e63" : "#fff",
                    fontSize: 20,
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    padding: "6px 16px",
                    borderRadius: 4,
                    background: active === item.id ? "#444" : "none",
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = "#bbb")}
                  onMouseOut={e => (e.currentTarget.style.background = active === item.id ? "#444" : "none")}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} style={{
                  fontWeight: 400,
                  color: "#fff",
                  fontSize: 20,
                  textDecoration: "none",
                  transition: "color 0.2s, background 0.2s",
                  padding: "6px 16px",
                  borderRadius: 4,
                  display: "inline-block"
                }}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(90deg, #1a73e8 0%, #e91e63 100%)",
      color: "#fff",
      padding: "2rem 0 1rem 0",
      marginTop: 40,
      textAlign: "center",
      letterSpacing: 2,
      boxShadow: "0 -2px 16px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
    }}>
      <div style={{ fontSize: 24, fontWeight: 500, marginBottom: 8 }}>NBB TUS Blog</div>
       <div style={{ marginBottom: 16, display: "flex", gap: 24, justifyContent: "center" }}>
         <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: 18, display: "flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
           <XTwitterIcon size={24} color="#fff" />
           X
         </a>
         <a href="https://discord.gg/vxh6PCPp" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: 18, display: "flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
           <DiscordIcon size={24} color="#fff" />
           Discord
         </a>
         <a href="https://www.instagram.com/nbb.tus/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: 18, display: "flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
           <InstagramIcon size={24} color="#fff" />
           Instagram
         </a>
       </div>
      <div style={{ fontSize: 14, opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} NBB TUS Blog. Inspired by <a href="https://www.anantagame.com/en/index.html" style={{ color: "#fff", textDecoration: "underline" }}>Ananta Game</a>.
      </div>
    </footer>
  );
}

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#fafbfc", margin: 0, fontFamily: "HyliliangHeiJ, sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
