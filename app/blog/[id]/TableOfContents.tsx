'use client';

import { useEffect, useState } from 'react';

type TocItem = {
  id: string;
  label: string;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const updateActiveItem = () => {
      let currentId = items[0]?.id ?? '';

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 180) currentId = item.id;
      }

      setActiveId(currentId);
    };

    updateActiveItem();
    window.addEventListener('scroll', updateActiveItem, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveItem);
  }, [items]);

  const links = items.map((item) => (
    <a
      className={activeId === item.id ? 'is-active' : undefined}
      href={`#${item.id}`}
      key={item.id}
      aria-current={activeId === item.id ? 'location' : undefined}
      onClick={() => setActiveId(item.id)}
    >
      {item.label}
    </a>
  ));

  return (
    <>
      <nav className="article-toc article-toc--desktop" aria-label="이 글의 목차">
        <p className="article-toc-label">목차</p>
        <div>{links}</div>
      </nav>
      <details className="article-toc article-toc--mobile">
        <summary>목차 <span aria-hidden="true">＋</span></summary>
        <nav aria-label="이 글의 목차">{links}</nav>
      </details>
    </>
  );
}
