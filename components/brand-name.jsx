"use client";

import React, { useState } from "react";

const BRANDS = {
  "Buildcorp":            { color: "#E8501A", font: "Bebas Neue" },
  "Buildcorp QLD":        { color: "#E8501A", font: "Bebas Neue" },
  "John Holland":         { color: "#E10B17", font: "Anton" },
  "Multiplex":            { color: "#005BAA", font: "Big Shoulders Display" },
  "Lendlease":            { color: "#00843D", font: "Teko" },
  "Mirvac":               { color: "#00878A", font: "Oswald" },
  "Mirvac Group":         { color: "#00878A", font: "Oswald" },
  "BMD Group":            { color: "#F47920", font: "Black Ops One" },
  "Hutchinson Builders":  { color: "#E1251B", font: "Barlow Condensed" },
  "CIMIC Group":          { color: "#0065BD", font: "Squada One" },
  "McNab Constructions":  { color: "#009C7A", font: "Russo One" },
  "FKG Group":            { color: "#CC1417", font: "Chakra Petch" },
  "Hansen Yuncken":       { color: "#0046AD", font: "Rajdhani" },
  "Roberts Co":           { color: "#E85A00", font: "Orbitron" },
  "Probuild":             { color: "#1B3A6B", font: "Teko" },
  "ADCO Constructions":   { color: "#CC3300", font: "Big Shoulders Display" },
};

export function BrandName({ name, className = "" }) {
  const [hovered, setHovered] = useState(false);
  const brand = BRANDS[name];

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`cursor-default select-none ${className}`}
      style={{
        fontFamily: brand ? `"${brand.font}", sans-serif` : undefined,
        color: hovered && brand ? brand.color : "rgba(0,0,0,0.42)",
        textShadow: hovered && brand ? `0 0 20px ${brand.color}50` : "none",
        transition: "color 0.22s ease, text-shadow 0.22s ease",
      }}
    >
      {name}
    </span>
  );
}
