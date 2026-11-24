import React, { useRef, useState } from 'react';
import ContactCTA from '../Services/ContactCTA.tsx';
import Footer from '../Footer.tsx';
import '../../Styles/CaseLibrary/CaseLibrary.css';

type CaseEntry = {
  title: string;
  category: 'Appeals' | 'Bail' | 'Constitutional challenges';
  area: string;
  outcome: string;
  year: string;
  court: string;
  issue: string;
  summary: string;
};

const cases: CaseEntry[] = [
  {
    title: 'Roadside stop ruled unlawful', category: 'Constitutional challenges', area: 'Impaired driving', outcome: 'Charges withdrawn', year: '2026', court: 'Ontario Court of Justice', issue: 'Charter s. 9 and s. 8',
    summary: 'Our client was stopped without a clear articulable reason and asked for a breath sample. We challenged the stop and the demand and argued the evidence should be excluded. The Crown withdrew all charges before trial.',
  },
  {
    title: 'Delay leads to stay of proceedings', category: 'Constitutional challenges', area: 'Assault', outcome: 'Charges stayed', year: '2026', court: 'Superior Court of Justice', issue: 'Charter s. 11(b)',
    summary: 'The matter ran well past the presumptive ceiling to reach trial. We built a detailed timeline showing the delay was not caused by the defence. The court entered a stay.',
  },
  {
    title: 'Vehicle searched without grounds', category: 'Constitutional challenges', area: 'Drug offences', outcome: 'Acquitted', year: '2025', court: 'Superior Court of Justice', issue: 'Charter s. 8',
    summary: 'Police searched a parked vehicle on an unverified tip. Cross-examination exposed the weak grounds and the evidence was excluded under s. 24(2). Acquittal on all counts.',
  },
  {
    title: 'Release ordered on bail review', category: 'Bail', area: 'Fraud', outcome: 'Released on bail', year: '2025', court: 'Superior Court of Justice', issue: 'Detention review',
    summary: 'Our client was detained after a show-cause hearing. We presented a stronger release plan with strong sureties and supervision, and the court ordered release on conditions.',
  },
  {
    title: 'Bail granted despite reverse onus', category: 'Bail', area: 'Weapons', outcome: 'Released on bail', year: '2024', court: 'Ontario Court of Justice', issue: 'Reverse onus',
    summary: 'Although the onus was on our client, we showed a workable plan and a weak Crown case. The justice ordered release with house arrest and a surety.',
  },
  {
    title: 'Sentence reduced on appeal', category: 'Appeals', area: 'Drug offences', outcome: 'Appeal allowed', year: '2024', court: 'Court of Appeal', issue: 'Sentencing principles',
    summary: 'The sentencing judge gave too little weight to the mitigating factors. We argued the sentence was demonstrably unfit and the court substituted a shorter one.',
  },
  {
    title: 'Conviction overturned on appeal', category: 'Appeals', area: 'Assault', outcome: 'Appeal allowed', year: '2023', court: 'Court of Appeal', issue: 'Jury instructions',
    summary: 'The trial judge’s instructions on reasonable doubt were incomplete. We focused the appeal on the legal error and its effect on the verdict. New trial ordered.',
  },
];

const intro = 'Notable results from our criminal defence work, from withdrawn charges to acquittals and successful appeals. Matters are anonymized, and every case turns on its own facts.';

function CaseDetail({ entry }: { entry: CaseEntry }) {
  return (
    <div className="caseLibraryDetailContent" key={entry.title}>
      <p className="caseLibraryEyebrow">{entry.category} · {entry.year}</p>
      <h2 className="caseLibraryTitle">{entry.title}</h2>
      <p className="caseLibraryOutcome">{entry.outcome}</p>
      <dl className="caseLibraryFacts">
        <dt>Area</dt><dd>{entry.area}</dd>
        <dt>Court</dt><dd>{entry.court}</dd>
        <dt>Issue</dt><dd>{entry.issue}</dd>
        <dt>Summary</dt><dd>{entry.summary}</dd>
      </dl>
    </div>
  );
}

function CaseLibrary() {
  const categories = ['All', 'Appeals', 'Bail', 'Constitutional challenges'] as const;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [selectedTitle, setSelectedTitle] = useState(cases[0].title);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const visibleCases = activeCategory === 'All'
    ? cases
    : cases.filter((entry) => entry.category === activeCategory);
  const selectedIndex = Math.max(0, visibleCases.findIndex((entry) => entry.title === selectedTitle));
  const selected = visibleCases[selectedIndex];

  const moveSelection = (direction: number) => {
    const next = (selectedIndex + direction + visibleCases.length) % visibleCases.length;
    setSelectedTitle(visibleCases[next].title);
    optionRefs.current[next]?.focus();
  };

  return (
    <div className="caseLibraryPage">
      <header className="caseLibraryHeader">
        <h1>Case Library</h1>
        <p>{intro}</p>
        <nav className="caseLibraryFilters" aria-label="Filter cases by category">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              className={`caseLibraryFilter${activeCategory === category ? ' isActive' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                const nextCases = category === 'All' ? cases : cases.filter((entry) => entry.category === category);
                setSelectedTitle(nextCases[0].title);
                setMobileDetailOpen(false);
              }}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>

      <main className="caseLibraryLayout">
        <div
          className="caseLibraryList"
          role="listbox"
          aria-label="Case results"
          onKeyDown={(event) => {
            if (window.matchMedia('(max-width: 799px)').matches) return;
            if (event.key === 'ArrowDown') { event.preventDefault(); moveSelection(1); }
            if (event.key === 'ArrowUp') { event.preventDefault(); moveSelection(-1); }
          }}
        >
          {visibleCases.map((entry, index) => {
            const isSelected = entry.title === selected.title;
            return (
              <button
                type="button"
                role="option"
                aria-selected={isSelected}
                aria-current={isSelected ? 'true' : undefined}
                className={`caseLibraryOption${isSelected ? ' isSelected' : ''}`}
                key={entry.title}
                ref={(element) => { optionRefs.current[index] = element; }}
                onClick={() => {
                  setSelectedTitle(entry.title);
                  if (window.matchMedia('(max-width: 799px)').matches) setMobileDetailOpen(true);
                }}
              >
                <span className="caseLibraryOptionTitle">{entry.title}</span>
                <span className="caseLibraryOptionMeta">
                  {entry.area} · <span className="caseLibraryOptionYear">{entry.year}</span>
                </span>
              </button>
            );
          })}
        </div>

        <section className="caseLibraryDetail" aria-label="Selected case" aria-live="polite">
          <CaseDetail entry={selected} />
        </section>
      </main>

      {mobileDetailOpen && (
        <section className="caseLibraryMobileOverlay" role="dialog" aria-modal="true" aria-label={selected.title} aria-live="polite">
          <button className="caseLibraryBack" type="button" onClick={() => setMobileDetailOpen(false)}>← All cases</button>
          <CaseDetail entry={selected} />
        </section>
      )}

      <ContactCTA />
      <Footer />
    </div>
  );
}

export default CaseLibrary;
