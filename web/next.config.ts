import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Rădăcina proiectului, ca Turbopack să nu urce la un package-lock.json străin.
  turbopack: { root: __dirname },
};

export default nextConfig;
