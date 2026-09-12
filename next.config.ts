import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Implicit next/image recomprimă la 75, ceea ce peste surse deja
    // comprimate adaugă artefacte peste artefacte. 90 pentru fotografii.
    qualities: [75, 90],
  },
  // Rădăcina proiectului, ca Turbopack să nu urce la un package-lock.json străin.
  turbopack: { root: __dirname },
};

export default nextConfig;
