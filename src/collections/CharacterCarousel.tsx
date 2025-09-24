'use client'

import Image from "next/image";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const characters = [
  { name: "Dreamseeker Female", img: "/assets/Dreamseeker_Female.png", offset: 0 },
  { name: "Dreamseeker Male", img: "/assets/Dreamseeker_Male.png", offset: 0 },
  { name: "Helia", img: "/assets/HELIA.png", offset: 0 },
  { name: "Jovial Deception", img: "/assets/Jovial_Deception_-_Shadowdimmer.png", offset: 40 },
  { name: "Lone Planetfarer", img: "/assets/Lone_Planetfarer.png", offset: 20 },
  { name: "Peregrine Sword", img: "/assets/Peregrine_Sword.png", offset: 0 },
  { name: "Planar Armament", img: "/assets/Planar_Armament_-_Warped_Spacetime.png", offset: 0 },
  { name: "Reign Solaris", img: "/assets/Reign_Solaris.png", offset: 0 },
  { name: "SENADINA", img: "/assets/SENADINA.png", offset: 0 },
  { name: "Serapeum", img: "/assets/Serapeum.png", offset: 0 },
  { name: "Theresa Apocalypse", img: "/assets/Theresa_Apocalypse_AstralOps.png", offset: 0 },
  { name: "Thousand-Faced Maestro", img: "/assets/Thousand-Faced_Maestro_-_Cameo.png", offset: 0 },
  { name: "Valkyrie Blastmetal", img: "/assets/Valkyrie_Blastmetal.png", offset: 0 },
];

const THUMBNAILS_PER_PAGE = 5;

export default function CharacterCarousel() {
  const [current, setCurrent] = useState(2); // Start with Helia
  const [anim, setAnim] = useState("in");
  const [thumbPage, setThumbPage] = useState(Math.floor(2 / THUMBNAILS_PER_PAGE));

  const nextChar = () => {
    setAnim("out");
    setTimeout(() => {
      const next = (current + 1) % characters.length;
      setCurrent(next);
      setThumbPage(Math.floor(next / THUMBNAILS_PER_PAGE));
      setAnim("in");
    }, 200);
  };
  const prevChar = () => {
    setAnim("out");
    setTimeout(() => {
      const prev = (current - 1 + characters.length) % characters.length;
      setCurrent(prev);
      setThumbPage(Math.floor(prev / THUMBNAILS_PER_PAGE));
      setAnim("in");
    }, 200);
  };
  const goToChar = (idx: number) => {
    setAnim("out");
    setTimeout(() => {
      setCurrent(idx);
      setThumbPage(Math.floor(idx / THUMBNAILS_PER_PAGE));
      setAnim("in");
    }, 200);
  };

  // Thumbnail strip logic
  const totalPages = Math.ceil(characters.length / THUMBNAILS_PER_PAGE);
  const startIdx = thumbPage * THUMBNAILS_PER_PAGE;
  const endIdx = Math.min(startIdx + THUMBNAILS_PER_PAGE, characters.length);
  const visibleThumbs = characters.slice(startIdx, endIdx);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem", marginBottom: 8 }}>
        <button
          onClick={prevChar}
          style={{
            fontSize: 36,
            background: "rgba(30,30,30,0.85)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            borderRadius: "50%",
            width: 56,
            height: 56,
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
            marginRight: 24,
          }}
          aria-label="Previous character"
        >
          &#60;
        </button>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            minHeight: 0,
            position: "relative",
            height: 600,
            maxWidth: 600,
          }}
        >
          <div
            style={{
              transition: "transform 0.2s, opacity 0.2s",
              transform: anim === "in" ? "scale(1)" : "scale(0.7)",
              opacity: anim === "in" ? 1 : 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={characters[current].img}
              alt={characters[current].name}
              width={600}
              height={900}
              style={{
                objectFit: "contain",
                width: "auto",
                maxWidth: "100%",
                maxHeight: 600,
                marginTop: characters[current].offset,
                marginBottom: 0,
                transition: "margin-top 0.2s",
                pointerEvents: "none",
                userSelect: "none",
              }}
              draggable={false}
            />
            <div className={montserrat.className} style={{
              position: "absolute",
              bottom: 24,
              left: 0,
              right: 0,
              textAlign: "center",
              fontSize: "2.2rem",
              fontWeight: 700,
              letterSpacing: 2,
              color: "#222",
              textShadow: "0 2px 8px #fff, 0 1px 1px #fff",
              background: "rgba(255,255,255,0.7)",
              borderRadius: 12,
              padding: "0.5rem 1.5rem",
              margin: "0 auto",
              width: "fit-content",
              display: "inline-block"
            }}>
              {characters[current].name}
            </div>
          </div>
        </div>
        <button
          onClick={nextChar}
          style={{
            fontSize: 36,
            background: "rgba(30,30,30,0.85)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            borderRadius: "50%",
            width: 56,
            height: 56,
            boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
            marginLeft: 24,
          }}
          aria-label="Next character"
        >
          &#62;
        </button>
      </div>
      {/* Thumbnail strip */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        margin: "24px 0 8px 0",
        background: "rgba(255,255,255,0.95)",
        borderRadius: 16,
        boxShadow: "0 2px 8px rgba(30,30,30,0.08)",
        padding: "12px 24px",
        minHeight: 110,
        minWidth: 320,
        maxWidth: 600,
        width: "100%",
        overflow: "hidden"
      }}>
        {thumbPage > 0 && (
          <button onClick={() => setThumbPage(thumbPage - 1)} style={{ fontSize: 28, background: "#eee", border: "none", borderRadius: 8, cursor: "pointer", marginRight: 8, height: 64, width: 32 }}>&#60;</button>
        )}
        {visibleThumbs.map((char, idx) => {
          const realIdx = startIdx + idx;
          return (
            <div
              key={char.name}
              onClick={() => goToChar(realIdx)}
              style={{
                border: realIdx === current ? "3px solid #e91e63" : "2px solid #bbb",
                borderRadius: 12,
                overflow: "hidden",
                cursor: "pointer",
                background: realIdx === current ? "#fff0f6" : "#f7f7f7",
                boxShadow: realIdx === current ? "0 2px 8px #e91e63aa" : "0 1px 4px #bbb2",
                transition: "border 0.2s, box-shadow 0.2s, background 0.2s",
                width: 64,
                height: 90,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 4px"
              }}
            >
              <Image src={char.img} alt={char.name} width={48} height={72} style={{ objectFit: "contain", width: 48, height: 72, pointerEvents: "none" }} draggable={false} />
            </div>
          );
        })}
        {thumbPage < totalPages - 1 && (
          <button onClick={() => setThumbPage(thumbPage + 1)} style={{ fontSize: 28, background: "#eee", border: "none", borderRadius: 8, cursor: "pointer", marginLeft: 8, height: 64, width: 32 }}>&#62;</button>
        )}
      </div>
      {/* Dot navigation */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 8 }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            onClick={() => setThumbPage(i)}
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: i === thumbPage ? "#e91e63" : "#bbb",
              cursor: "pointer",
              transition: "background 0.2s"
            }}
          />
        ))}
      </div>
    </div>
  );
}
