"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { pieces } from "@/lib/pieces";

type Point = { x: number; y: number };

export default function Hero() {
  // Default: vasito helado
  const defaultPieceId = "ice-cream-cup";
  const defaultIndex = useMemo(() => {
    const i = pieces.findIndex((p) => p.id === defaultPieceId);
    return i >= 0 ? i : 0;
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const selectedPiece = pieces[selectedIndex];

  // Refs para medir posiciones reales
  const heroRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null); // desktop card
  const cardMobileRef = useRef<HTMLDivElement | null>(null); // mobile card
  const hotspotRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Puntos (origen y destino)
  const [start, setStart] = useState<Point | null>(null);
  const [cardPoint, setCardPoint] = useState<Point | null>(null); // desktop target
  const [cardPointMobile, setCardPointMobile] = useState<Point | null>(null); // mobile target

  // Animación: flag de una sola vez
  const animateNextRef = useRef(false);

  // Para animar “dibujado” del path
  const pathRef = useRef<SVGPathElement | null>(null); // desktop path
  const pathMobileRef = useRef<SVGPathElement | null>(null); // mobile path

  const [dash, setDash] = useState<{ array: number; offset: number } | null>(null);
  const [dashMobile, setDashMobile] = useState<{ array: number; offset: number } | null>(null);

  // 1) Medir start (spot activo) + cardPoint (desktop) + cardPointMobile (mobile)
  useLayoutEffect(() => {
    const heroEl = heroRef.current;
    const spotEl = hotspotRefs.current[selectedIndex];
    if (!heroEl || !spotEl) return;

    const compute = () => {
      const heroRect = heroEl.getBoundingClientRect();
      const spotRect = spotEl.getBoundingClientRect();

      // Centro del spot activo (start)
      const nextStart: Point = {
        x: spotRect.left - heroRect.left + spotRect.width / 2,
        y: spotRect.top - heroRect.top + spotRect.height / 2,
      };
      setStart(nextStart);

      // Desktop card point (si existe y tiene tamaño real)
      const cardEl = cardRef.current;
      if (cardEl) {
        const cardRect = cardEl.getBoundingClientRect();
        if (cardRect.width > 0 && cardRect.height > 0) {
          setCardPoint({
            x: cardRect.left - heroRect.left,
            y: cardRect.top - heroRect.top + cardRect.height * 0.55,
          });
        }
      }

      // Mobile card point (top-center)
      const cardM = cardMobileRef.current;
      if (cardM) {
        const cardRect = cardM.getBoundingClientRect();
        if (cardRect.width > 0 && cardRect.height > 0) {
          setCardPointMobile({
            x: cardRect.left - heroRect.left + cardRect.width / 2,
            y: cardRect.top - heroRect.top,
          });
        }
      }
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [selectedIndex]);

  // 2) Path DESKTOP (igual que ya tenías)
  const d = useMemo(() => {
    if (!start || !cardPoint) return null;
    const elbowX = Math.max(start.x + 40, cardPoint.x - 160);
    return `M ${start.x} ${start.y} H ${elbowX} V ${cardPoint.y} H ${cardPoint.x}`;
  }, [start, cardPoint]);

  // 2b) Path MOBILE (baja a la card)
  const dMobile = useMemo(() => {
    if (!start || !cardPointMobile) return null;

    // codo un poquito antes de tocar la card
    const elbowY = cardPointMobile.y - 24;

    return `M ${start.x} ${start.y} V ${elbowY} H ${cardPointMobile.x} V ${cardPointMobile.y}`;
  }, [start, cardPointMobile]);

  // 3) Animación DESKTOP
  useLayoutEffect(() => {
    if (!d || !pathRef.current) return;

    const length = pathRef.current.getTotalLength();

    if (!animateNextRef.current) {
      setDash({ array: length, offset: 0 }); // default: completo
      return;
    }

    animateNextRef.current = false;
    setDash({ array: length, offset: length });
    requestAnimationFrame(() => setDash({ array: length, offset: 0 }));
  }, [d]);

  // 3b) Animación MOBILE
  useLayoutEffect(() => {
    if (!dMobile || !pathMobileRef.current) return;

    const length = pathMobileRef.current.getTotalLength();

    if (!animateNextRef.current) {
      setDashMobile({ array: length, offset: 0 }); // default: completo
      return;
    }

    animateNextRef.current = false;
    setDashMobile({ array: length, offset: length });
    requestAnimationFrame(() => setDashMobile({ array: length, offset: 0 }));
  }, [dMobile]);

  return (
    <section className="w-full">
      <div className="relative mx-auto px-6 py-16">
        <div
          ref={heroRef}
          className="relative min-h-[500px] flex flex-col items-center md:flex md:items-start md:min-h-[460px]"
        >
          {/* Texto */}
          <div className="relative z-10 w-full max-w-[400px] text-center md:text-left md:max-w-[450px]">
            <h1 className="text-4xl font-medium italic leading-[1.05] text-black md:text-6xl lg:text-5xl">
              The Fussion of <br />
              Imagination At<br />
              Your Table
            </h1>

            <p className="mt-5 max-w-3xs text-sm leading-6 text-black/70 md:text-base mx-auto md:mx-0">
              Discover the art of handcrafted pottery where creativity meets
              sustainability. Each piece tells a unique story with modern
              craftsmanship for a truly authentic experience.
            </p>
          </div>

          {/* Imagen + hotspots */}
          {/* ✅ MOBILE: relativo y en flujo / ✅ DESKTOP: absolute como ya lo tenías */}
          <div className="relative mt-10 w-full max-w-[520px] md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[60%] md:max-w-[900px]">
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[999px]">
              <Image
                src="/images/hero.png"
                alt="Ceramic pieces in artist studio"
                fill
                priority
                className="object-cover object-none"
              />

              {pieces.map((piece, index) => {
                const isActive = index === selectedIndex;

                return (
                  <button
                    key={piece.id}
                    ref={(el) => {
                      hotspotRefs.current[index] = el;
                    }}
                    type="button"
                    aria-label={`Select piece: ${piece.name}`}
                    aria-pressed={isActive}
                    onClick={() => {
                      animateNextRef.current = true;
                      setSelectedIndex(index);
                    }}
                    className={[
                      "absolute cursor-pointer -translate-x-1/2 -translate-y-1/2",
                      "h-2.5 w-2.5 rounded-full bg-white/90",
                      "shadow-[0_0_0_7px_rgba(0,0,0,0.22)]",
                      "transition-transform duration-200 hover:scale-105",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                      isActive
                        ? "shadow-[0_0_0_8px_rgba(0,0,0,0.28)]"
                        : "opacity-85 hover:opacity-100",
                    ].join(" ")}
                    style={{
                      left: `${piece.hotspot.x}%`,
                      top: `${piece.hotspot.y}%`,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* ✅ MOBILE CARD */}
          <div ref={cardMobileRef} className="mt-10 w-full flex justify-center md:hidden">
            <FeaturedCard piece={selectedPiece} />
          </div>

          {/* Card DESKTOP (NO TOCAR) */}
          <div
            ref={cardRef}
            className="absolute right-3 top-3 z-20 hidden w-[220px] md:block"
          >
            <FeaturedCard piece={selectedPiece} />
          </div>

          {/* ✅ MOBILE SVG overlay (ARREGLADO: ahora cubre TODO el hero, no solo la imagen) */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 md:hidden"
            width="100%"
            height="100%"
          >
            <defs>
              {/* glow suave para que se vea sobre la foto */}
              <filter id="pathGlowMobile" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {dMobile && (
              <path
                ref={pathMobileRef}
                d={dMobile}
                fill="none"
                stroke="rgba(0,0,0,0.55)"
                strokeWidth="1.25"
                strokeLinecap="round"
                filter="url(#pathGlowMobile)"
                style={{
                  strokeDasharray: dashMobile ? dashMobile.array : undefined,
                  strokeDashoffset: dashMobile ? dashMobile.offset : undefined,
                  transition: "stroke-dashoffset 450ms ease",
                }}
              />
            )}
          </svg>

          {/* SVG overlay DESKTOP (MISMO layout, solo mejor contraste) */}
          <svg
            className="pointer-events-none absolute inset-0 z-10 hidden md:block"
            width="100%"
            height="100%"
          >
            <defs>
              {/* glow suave para que se vea sobre la foto */}
              <filter id="pathGlowDesktop" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {d && (
              <path
                ref={pathRef}
                d={d}
                fill="none"
                stroke="rgba(0,0,0,0.55)"
                strokeWidth="1.25"
                strokeLinecap="round"
                filter="url(#pathGlowDesktop)"
                style={{
                  strokeDasharray: dash ? dash.array : undefined,
                  strokeDashoffset: dash ? dash.offset : undefined,
                  transition: "stroke-dashoffset 450ms ease",
                }}
              />
            )}
          </svg>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row">
          <span>Since 2020</span>
          <span>By Angie</span>
          <span>Buenos Aires</span>
        </div>
      </div>
    </section>
  );
}
