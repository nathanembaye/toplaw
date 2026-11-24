import React, { useState } from 'react';
import { cases } from '../Cases.tsx';
import '../../Styles/Profile/Directory.css';

const directoryIntroduction = {
  statement: 'Mr. Okada-Phillips has gained the respect of Crown’s and Judge’s alike. He has separated himself from his peers through his winning record.',
  conclusion: 'For instance, Mr. Okada-Phillips has secured the following results',
};

function Directory() {
  const [minusRows, setMinusRows] = useState<number[]>([]);
  const toggleRow = (index: number) => {
    setMinusRows((rows) => rows.includes(index)
      ? rows.filter((row) => row !== index)
      : [...rows, index]
    );
  };

  return (
    <div className="directoryMeasureContainer">
      <section id="directory" className="directoryContainer">
        <div className="directoryContent">
          <div className="directoryIntro">
            <p className="directoryIntroLabel">Notable Cases</p>
            <p className="directoryIntroStatement">{directoryIntroduction.statement}</p>
            <p className="directoryIntroConclusion">
              {directoryIntroduction.conclusion}<span className="directoryConclusionColon">:</span>
            </p>
          </div>
        <table className="directoryTable">
          <thead>
            <tr>
              <th scope="col" aria-label="Expand case"></th>
              <th scope="col">Case</th>
              <th scope="col">Citation</th>
              <th scope="col" aria-label="CanLII"></th>
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
                    <svg className="directoryRowToggleIcon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                      <path className="directoryToggleHorizontal" d="M3 8h10" />
                      <path className="directoryToggleVertical" d="M8 3v10" />
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
                      <div className="directoryExpandedInner">
                        <p className="directoryExpandedDescription">{caseItem.description}</p>
                        <a
                          className="directoryReadMore"
                          href={caseItem.pdfUrl}
                          aria-label={`Read decision for ${caseItem.name}`}
                          onClick={(event) => event.stopPropagation()}
                        >
                          <span className="directoryReadMoreText">Read decision</span>
                          <span className="directoryReadMorePdf">PDF</span>
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        </div>
      </section>
    </div>
  );
}

export default Directory;
