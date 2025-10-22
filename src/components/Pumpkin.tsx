// src/components/Pumpkin.tsx
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getOrCreateSecretPumpkinId } from "../utils/secret";

type Props = {
  id: string; // es: "home-1", "about-2"
  size?: number;
};

const Pumpkin: React.FC<Props> = ({ id, size = 44 }) => {
  const navigate = useNavigate();
  const secretId = useMemo(() => getOrCreateSecretPumpkinId(), []);
  const isSecret = secretId === id;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSecret) {
      navigate("/pagina-segreta");
    } else {
      // effetto "gioco": piccolo bounce (puoi rimuovere alert in produzione)
      (e.currentTarget as HTMLElement).classList.add("pumpkin-bounce");
      setTimeout(() => (e.currentTarget as HTMLElement).classList.remove("pumpkin-bounce"), 600);
    }
  };

  return (
    <div
      onClick={handleClick}
      data-pumpkin-id={id}
      title={isSecret ? "..." : "Decorazione"}
      style={{ width: size, height: size, display: "inline-block", cursor: "pointer", margin: 6 }}
    >
      <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="34" r="20" fill="#ff8c00" />
        <path d="M20 24 C24 14,40 14,44 24" fill="#ffb347" />
        <rect x="28" y="8" width="8" height="8" rx="2" fill="#2e7d32" />
      </svg>
      <style>{`
        .pumpkin-bounce { animation: pumpkinBounce 0.6s; }
        @keyframes pumpkinBounce {
          0% { transform: translateY(0) scale(1); }
          30% { transform: translateY(-6px) scale(1.05); }
          60% { transform: translateY(0) scale(0.98); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Pumpkin;
