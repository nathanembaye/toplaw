import React, { useEffect, useRef, useState } from 'react';
import { cases } from './Cases.tsx';
import '../Styles/Directory.css';

function Directory() {
  const [minusRows, setMinusRows] = useState<number[]>([]);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasEnteredViewport(true);
      observer.disconnect();
    }, { threshold: 0.15 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const toggleRow = (index: number) => {
    setMinusRows((rows) => rows.includes(index)
      ? rows.filter((row) => row !== index)
      : [...rows, index]
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`directoryContainer${hasEnteredViewport ? ' directoryContainer--visible' : ''}`}
    >
      <div className="directoryContent">
        <p className="directoryIntro">
          Mr. Okada-Phillips has gained the respect of Crown’s and Judge’s alike. He has separated himself from his peers through his winning record. For instance, Mr. Okada-Phillips has secured the following results:
        </p>
        <h2 className="directorySectionLabel">NOTABLE CASES</h2>
        <table className="directoryTable">
          <thead>
            <tr>
              <th scope="col" aria-label="Expand case"></th>
              <th scope="col">Case</th>
              <th scope="col">Citation</th>
              <th scope="col">CanLii</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem, index) => (
              <React.Fragment key={caseItem.name}>
                <tr
                  className={minusRows.includes(index) ? 'isOpen' : ''}
                  tabIndex={0}
                  aria-expanded={minusRows.includes(index)}
                  onClick={() => toggleRow(index)}
                  onKeyDown={(event) => {
                    if (event.target instanceof HTMLElement && event.target.closest('a')) return;
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      toggleRow(index);
                    }
                  }}
                >
                  <td className="directoryChevronCell">
                    <svg className="directoryRowChevron" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path d="m3 6 5 5 5-5" />
                    </svg>
                  </td>
                  <td>{caseItem.name}</td>
                  <td>{caseItem.citation}</td>
                  <td>
                    <a
                      href={caseItem.pdfUrl}
                      aria-label={`Open ${caseItem.name} PDF`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <svg className="directoryLinkArrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <path d="M4 12 12 4M5 4h7v7" />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr className={`directoryExpandedRow${minusRows.includes(index) ? ' isOpen' : ''}`} aria-hidden={!minusRows.includes(index)}>
                  <td colSpan={4}>
                    <div className="directoryExpandedContent">
                      <div className="directoryExpandedInner">{caseItem.description}</div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Directory;
