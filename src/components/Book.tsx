'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pages, BookPage } from '@/data/pages';
import { illustrations } from '@/components/illustrations';

// ─── PAGE RENDERERS ────────────────────────────────────────

function CoverPage() {
  return (
    <div className="cover-page">
      <div className="cover-texture" />
      <div className="cover-content">
        <div className="cover-label">
          <span className="cover-label-icon">⚠️</span>
          <span>CONTAINS<br/>SPOILERS</span>
        </div>
        <h1 className="cover-title">the pixar<br/>playbook</h1>
        <p className="cover-edition">First Edition · 2025</p>
        <p className="cover-handwritten">Notes on making characters<br/>you&apos;d die for</p>
        <div className="cover-sticker">
          <span>CAUTION!!!</span>
          <span className="cover-sticker-sub">may cause tears</span>
        </div>
        <div className="cover-barcode">
          <div className="barcode-lines">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="barcode-line" style={{ height: `${14 + Math.random() * 10}px`, width: Math.random() > 0.3 ? '2px' : '1px' }} />
            ))}
          </div>
          <span className="barcode-number">978-0-PIXAR-001</span>
        </div>
        <div className="cover-corner-label">
          <span>THIS</span>
          <span>SIDE UP</span>
          <span className="cover-corner-arrow">↑</span>
        </div>
      </div>
    </div>
  );
}

function renderPage(page: BookPage) {
  switch (page.type) {
    case 'dedication':
      return (
        <div className="page-dedication">
          {page.content?.map((line, i) => (
            <p key={i} className="dedication-line">{line}</p>
          ))}
        </div>
      );

    case 'title':
      return (
        <div className="page-title-page">
          <h1 className="title-main">{page.heading}</h1>
          {page.content?.map((line, i) => (
            <p key={i} className={i === 0 ? 'title-subtitle' : 'title-meta'}>{line}</p>
          ))}
        </div>
      );

    case 'toc':
      return (
        <div className="page-toc">
          <h2 className="toc-heading">{page.heading}</h2>
          <div className="toc-list">
            {page.content?.map((line, i) => (
              <div key={i} className="toc-entry">
                <span className="toc-text">{line.split(' — ')[0]}</span>
                <span className="toc-dots" />
                <span className="toc-page">{line.split(' — ')[1] || ''}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'chapter-cover':
      return (
        <div className="page-chapter-cover">
          {page.sticker && <span className="chapter-sticker">{page.sticker}</span>}
          <span className="chapter-number">Chapter {page.chapter}</span>
          <h2 className="chapter-title">{page.chapterTitle}</h2>
          <p className="chapter-subtitle">{page.chapterSubtitle}</p>
          <div className="chapter-rule" />
        </div>
      );

    case 'quote':
      return (
        <div className="page-quote">
          <div className="quote-mark">&ldquo;</div>
          <blockquote className="quote-text">{page.quote}</blockquote>
          <div className="quote-attribution">
            <span className="quote-author">— {page.attribution}</span>
            {page.attributionContext && (
              <span className="quote-context">{page.attributionContext}</span>
            )}
          </div>
        </div>
      );

    case 'content':
      return (
        <div className="page-content">
          {page.heading && <h3 className="content-heading">{page.heading}</h3>}
          <div className="content-body">
            {page.content?.map((para, i) => (
              <p key={i} className="content-paragraph">{para}</p>
            ))}
          </div>
          {page.illustration && (
            <div className="page-illustration">
              {illustrations[page.illustration] ? (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  {(() => { const Illus = illustrations[page.illustration!]; return <Illus />; })()}
                  {page.illustrationCaption && (
                    <span style={{ fontFamily: 'Caveat, cursive', fontSize: 13, color: '#8a7b6b', textAlign: 'center' as const }}>
                      {page.illustrationCaption}
                    </span>
                  )}
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={page.illustration} alt={page.illustrationCaption || ''} />
              )}
            </div>
          )}
          {page.highlight && (
            <div className="content-highlight">
              <span className="highlight-marker" />
              {page.highlight}
            </div>
          )}
          {page.examples && (
            <div className="content-examples">
              {page.examples.map((ex, i) => (
                <div key={i} className="example-item">
                  <span className="example-bullet">→</span>
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          )}
          {page.marginNote && (
            <div className="content-margin-note">
              <span className="margin-note-icon">✎</span>
              {page.marginNote}
            </div>
          )}
          {page.sticker && <span className="page-sticker">{page.sticker}</span>}
          {page.sources && (
            <div className="content-sources">
              {page.sources.map((s, i) => (
                <span key={i} className="source-item">{s}</span>
              ))}
            </div>
          )}
        </div>
      );

    case 'bibliography':
      return (
        <div className="page-bibliography">
          <h3 className="bib-heading">{page.heading}</h3>
          <div className="bib-list">
            {page.content?.map((entry, i) => (
              <p key={i} className="bib-entry">{entry}</p>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

// ─── BOOK COMPONENT ────────────────────────────────────────

export default function Book() {
  const totalPages = pages.length;
  const [currentPage, setCurrentPage] = useState(-1); // -1 = cover
  const [direction, setDirection] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const goToPage = useCallback((target: number) => {
    if (isFlipping) return;
    const clamped = Math.max(-1, Math.min(target, totalPages - 1));
    if (clamped === currentPage) return;
    setDirection(clamped > currentPage ? 1 : -1);
    setIsFlipping(true);
    setCurrentPage(clamped);
    setTimeout(() => setIsFlipping(false), 500);
  }, [currentPage, isFlipping, totalPages]);

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const prevPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextPage(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prevPage(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextPage, prevPage]);

  const sliderValue = currentPage + 1; // 0 = cover, 1 = first page, etc.
  const progress = totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;

  return (
    <div className="book-container">
      {/* Ambient glow */}
      <div className="book-ambient" />

      {/* The Book */}
      <div className="book-wrapper">
        <div className="book-spine" />
        <div className="book-body" onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          if (x < rect.width * 0.3) prevPage();
          else if (x > rect.width * 0.7) nextPage();
        }}>
          {/* Page edge effect */}
          <div className="page-edges">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="page-edge" style={{ right: `${-2 - i * 1}px`, opacity: 1 - i * 0.1 }} />
            ))}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{ rotateY: direction > 0 ? 8 : -8, opacity: 0.4, scale: 0.98 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: direction > 0 ? -8 : 8, opacity: 0.4, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="page-surface"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              {currentPage === -1 ? (
                <CoverPage />
              ) : (
                <div className="page-inner">
                  <div className="page-number">
                    {currentPage + 1}
                  </div>
                  {renderPage(pages[currentPage])}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Click zones hint */}
          {currentPage >= 0 && (
            <>
              <div className="click-zone click-zone-left" title="Previous page">‹</div>
              <div className="click-zone click-zone-right" title="Next page">›</div>
            </>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="book-controls">
        <button className="nav-btn" onClick={prevPage} disabled={currentPage <= -1}>
          ← Prev
        </button>
        <div className="slider-container">
          <input
            type="range"
            min={0}
            max={totalPages}
            value={sliderValue}
            onChange={(e) => goToPage(parseInt(e.target.value) - 1)}
            className="page-slider"
          />
          <div className="slider-progress" style={{ width: `${progress}%` }} />
          <span className="page-indicator">
            {currentPage === -1 ? 'Cover' : `${currentPage + 1} / ${totalPages}`}
          </span>
        </div>
        <button className="nav-btn" onClick={nextPage} disabled={currentPage >= totalPages - 1}>
          Next →
        </button>
      </div>
    </div>
  );
}
