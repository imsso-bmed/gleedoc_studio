import React, { useMemo, useState } from 'react';
import { projects } from './ProjectGrid';

export default function ProjectSlider() {
  // Fisher-Yates shuffle
  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 프로젝트 메타데이터를 유지한 채 셔플해서 alt 텍스트 혼동을 방지
  const shuffledProjects = useMemo(
    () =>
      shuffle(
        projects
          .filter((p) => typeof p?.image === 'string' && p.image.trim())
          .map((p) => ({ id: p.id, title: p.title, src: p.image }))
      ),
    []
  );

  const marqueeItems = useMemo(
    () =>
      Array.from({ length: 4 }, (_, copyIndex) =>
        shuffledProjects.map((project, itemIndex) => ({
          ...project,
          key: `${project.id ?? 'unknown'}-${copyIndex}-${itemIndex}`,
        }))
      ).flat(),
    [shuffledProjects]
  );

  const [failedKeys, setFailedKeys] = useState(() => new Set());

  const handleImageError = (key) => {
    setFailedKeys((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  };

  return (
    <section className="py-12 bg-white overflow-hidden cursor-scale">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-marquee {
            animation-duration: 170s !important;
          }
        }
        .marquee-group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-group w-full overflow-hidden">
        <div
          className="flex gap-2 md:gap-8 animate-marquee w-full md:w-max"
        >
          {marqueeItems.map((item, i) => {
            if (failedKeys.has(item.key)) return null;

            return (
              <div
                key={item.key}
                className={
                  `relative flex-shrink-0 w-[90vw] h-[90vw] max-w-[400px] max-h-[400px] md:w-[400px] md:h-[400px] overflow-hidden transition-all duration-500 hover:opacity-90 ` +
                  (i % 3 === 0 ? 'rounded-tl-[100px]' : '') +
                  (i % 3 === 1 ? 'rounded-tr-[100px] rounded-bl-[40px]' : '') +
                  (i % 3 === 2 ? 'rounded-[40px]' : '')
                }
              >
                <img
                  src={item.src}
                  alt={item.title ? `${item.title} (ID: ${item.id})` : `Project ID ${item.id}`}
                  loading="lazy"
                  onError={() => handleImageError(item.key)}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

