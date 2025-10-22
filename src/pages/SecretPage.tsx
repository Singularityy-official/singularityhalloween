// src/pages/SecretPage.tsx
import React, { useState } from "react";

export default function SecretPage() {
  const [won, setWon] = useState(false);

  // decorazioni: puoi sostituire emoji con immagini SVG/PNG
  const decorations = [
    { id: 1, label: "ragnatela", emoji: "🕸️" },
    { id: 2, label: "zucca-scura", emoji: "🎃" },
    { id: 3, label: "pipistrello", emoji: "🦇" },
    { id: 4, label: "ragno", emoji: "🕷️" },
    { id: 5, label: "teschio", emoji: "💀" },
    { id: 6, label: "strega", emoji: "🧙" },
    { id: 7, label: "tomba", emoji: "🪦" },
    { id: 8, label: "goccia", emoji: "🩸" },
    { id: 9, label: "bacchetta", emoji: "🪄" },
    { id: 10, label: "fantasma", emoji: "👻" },
  ];

  // scegliamo una decorazione "corretta" (qui fissa: 2)
  // se vuoi renderla casuale, puoi usare Math.random() su mount
  const correctId = 2;

  return (
    <main style={{ textAlign: "center", padding: 36 }}>
      <h1>🔒 Pagina Segreta di Halloween</h1>
      <p>Tra tutte le decorazioni trovi quella giusta — cliccala!</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 80px)", gap: 18, justifyContent: "center", marginTop: 28 }}>
        {decorations.map((d) => (
          <div
            key={d.id}
            onClick={() => {
              if (d.id === correctId) setWon(true);
              else alert("Non è quella giusta... prova ancora!");
            }}
            style={{ fontSize: 42, cursor: "pointer", userSelect: "none" }}
            title={d.label}
          >
            {d.emoji}
          </div>
        ))}
      </div>

      {won && (
        <div style={{ marginTop: 36, fontSize: 20, color: "orange" }}>
          🎉 <strong>Congratulazioni — hai vinto!</strong>
          <p>Fai uno screenshot di questa schermata e invialo a <b>premi@iltuosito.it</b></p>
        </div>
      )}
    </main>
  );
}
