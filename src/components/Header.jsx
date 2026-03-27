import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const translations = {
  en: {
    about: 'About',
    works: 'Our Works',
    faq: 'FAQ',
    contact: 'Contact'
  },
  ko: {
    about: 'About',
    works: 'Our Works',
    faq: 'FAQ',
    contact: 'Contact'
  }
};

const sections = [
  { id: 'about', labelEn: 'About', labelKo: 'About' },
  { id: 'works', labelEn: 'Our Works', labelKo: 'Our Works' },
  { id: 'faq', labelEn: 'FAQ', labelKo: 'FAQ' },
  { id: 'contact', labelEn: 'Contact', labelKo: 'Contact' }
];

export default function Header({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleMenuItemClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const t = translations[lang];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white pointer-events-none">
        <button
          type="button"
          onClick={handleLogoClick}
          className="pointer-events-auto cursor-pointer"
          aria-label="Go to top"
        >
          <span className="text-2xl font-semibold">Gleedoc</span>
        </button>
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
            className="px-3 py-1 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            {lang === 'en' ? 'KO' : 'EN'}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:opacity-70 transition-opacity cursor-pointer"
          >
            {menuOpen ? <X size={32} strokeWidth={1.5} /> : <Plus size={32} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* 메뉴 드롭다운 */}
      {menuOpen && (
        <div className="fixed top-24 right-6 z-40 bg-white text-black rounded-lg shadow-2xl p-4 w-48 border border-neutral-200">
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleMenuItemClick(section.id)}
                className="w-full text-left px-4 py-3 hover:bg-neutral-100 rounded-lg transition-colors font-medium"
              >
                {lang === 'en' ? section.labelEn : section.labelKo}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* 배경 클릭 시 메뉴 닫기 */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
