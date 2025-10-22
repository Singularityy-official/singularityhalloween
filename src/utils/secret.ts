// src/utils/secret.ts
const SECRET_KEY = "halloween_secret_pumpkin_v1";

export function getOrCreateSecretPumpkinId() {
  if (typeof window === "undefined") return null;
  let id = localStorage.getItem(SECRET_KEY);
  if (!id) {
    // scegliamo tra gli ID effettivi che hai nel sito
    const allIds = [
      "hero-pumpkin-1",
      "hero-pumpkin-2",
      "hero-pumpkin-3",
      "hero-pumpkin-4",
      "services-pumpkin-1",
      "services-pumpkin-2",
      "services-pumpkin-3",
      "footer-pumpkin-1",
    ];
    id = allIds[Math.floor(Math.random() * allIds.length)];
    localStorage.setItem(SECRET_KEY, id);
  }
  return id;
}

export function forceSecretPumpkinId(forcedId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SECRET_KEY, forcedId);
}
