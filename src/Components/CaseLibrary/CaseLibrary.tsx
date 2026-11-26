import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContactCTA from '../Services/ContactCTA.tsx';
import Footer from '../Footer.tsx';
import '../../Styles/CaseLibrary/CaseLibrary.css';

type CaseEntry = {
  title: string;
  caseName: string;
  citation: string;
  canliiUrl: string;
  category: 'Appeals' | 'Charter' | 'Trials';
  area: string;
  outcome: string;
  year: string;
  court: string;
  issue: string;
  summary: string;
};

const cases: CaseEntry[] = [
  {
    title: 'Racial Profiling and Unlawful Search', caseName: 'R. v. Morgan', citation: '2023 ONSC 6855', canliiUrl: 'https://www.canlii.org/en/on/onsc/doc/2023/2023onsc6855/2023onsc6855.pdf', category: 'Charter', area: 'Firearm & Drug Offences', outcome: 'Evidence Excluded', year: '2023', court: 'Ontario Superior Court of Justice', issue: 'Charter ss. 8, 9, 10(a), 10(b) & 24(2); Racial Profiling',
    summary: 'The defence successfully challenged a police traffic stop and subsequent vehicle search that led to the discovery of a firearm and cannabis. The Court found that racial bias influenced the police encounter and that multiple Charter rights had been violated. The seized evidence was excluded.',
  },
  {
    title: 'Impaired Driving Conviction Overturned', caseName: 'R. v. McIntyre', citation: '2022 ONSC 6966', canliiUrl: 'https://www.canlii.org/en/on/onsc/doc/2022/2022onsc6966/2022onsc6966.pdf', category: 'Appeals', area: 'Impaired Driving', outcome: 'Appeal Allowed — Acquitted', year: '2022', court: 'Ontario Superior Court of Justice', issue: 'Charter ss. 8, 10(a), 10(b) & 24(2); Admissibility of Evidence',
    summary: 'The defence successfully appealed an impaired driving conviction on the basis that blood sample evidence had been obtained in violation of the accused’s Charter rights. The Court excluded the evidence, overturned the conviction and entered an acquittal.',
  },
  {
    title: 'Unlawful Vehicle Search and Drug Seizure', caseName: 'R. v. Ellis', citation: '2021 ONSC 8155', canliiUrl: 'https://www.canlii.org/en/on/onsc/doc/2021/2021onsc8155/2021onsc8155.pdf', category: 'Charter', area: 'Drug Offences', outcome: 'Evidence Excluded', year: '2021', court: 'Ontario Superior Court of Justice', issue: 'Charter ss. 8, 10(b) & 24(2); Search and Seizure',
    summary: 'The accused faced multiple drug trafficking-related charges following a police vehicle search that uncovered fentanyl, cocaine and other controlled substances. The defence successfully challenged the constitutionality of the search, resulting in the exclusion of all evidence obtained during the search.',
  },
  {
    title: 'Unlawful Searches and Denial of Counsel', caseName: 'R. v. Khan', citation: '2021 ONSC 5663', canliiUrl: 'https://www.canlii.org/en/on/onsc/doc/2021/2021onsc8550/2021onsc8550.pdf', category: 'Charter', area: 'Armed Robbery, Sexual Assault & Weapons Offences', outcome: 'Key Evidence Excluded', year: '2021', court: 'Ontario Superior Court of Justice', issue: 'Charter ss. 8, 10(a), 10(b) & 24(2); Search and Seizure; Right to Counsel',
    summary: 'The accused faced 27 charges arising from a series of alleged armed robberies in Toronto. The defence successfully challenged the admissibility of evidence obtained through unlawful searches and violations of the accused’s right to counsel. The Court found serious Charter violations, including bad faith on the part of the lead investigator, and excluded key physical and surveillance evidence linking the accused to the alleged offences.',
  },
  {
    title: 'Armed Home Invasion Acquittal', caseName: 'R. v. Johnson and Bancroft', citation: '2021 ONSC 6441', canliiUrl: 'https://www.canlii.org/en/on/onsc/doc/2021/2021onsc6441/2021onsc6441.pdf', category: 'Trials', area: 'Robbery & Home Invasion', outcome: 'Acquitted on All Counts', year: '2021', court: 'Ontario Superior Court of Justice', issue: 'Witness Credibility; Reasonable Doubt',
    summary: 'The accused faced serious criminal charges arising from an alleged armed home invasion. The defence challenged the reliability and credibility of the Crown’s evidence. The Court found that the Crown had failed to establish guilt beyond a reasonable doubt and acquitted both defendants on all counts.',
  },
  {
    title: 'Attempted Murder and Self-Defence', caseName: 'R. v. DaSilva Smith', citation: '2021 ONSC 5521', canliiUrl: 'https://www.canlii.org/en/on/onsc/doc/2021/2021onsc5521/2021onsc5521.pdf', category: 'Trials', area: 'Attempted Murder, Assault & Robbery', outcome: 'Acquitted on Three Charges', year: '2021', court: 'Ontario Superior Court of Justice', issue: 'Criminal Code s. 34; Self-Defence; Mens Rea',
    summary: 'The accused faced charges of attempted murder, aggravated assault and robbery. The defence raised issues of self-defence and criminal intent. The Court found that the Crown had failed to meet its burden of proof and acquitted the accused of all three charges. The accused had separately pleaded guilty to failure to comply.',
  },
  {
    title: 'Mandatory Minimum Sentence Struck Down', caseName: 'R. v. Ahmed', citation: '2019 ONSC 4822', canliiUrl: 'https://www.canlii.org/en/on/onsc/doc/2019/2019onsc4822/2019onsc4822.pdf', category: 'Charter', area: 'Human Trafficking', outcome: 'Mandatory Minimum Struck Down', year: '2019', court: 'Ontario Superior Court of Justice', issue: 'Charter s. 12; Mandatory Minimum Sentences; Sentencing Principles',
    summary: 'The defence challenged the constitutionality of a five-year mandatory minimum sentence for human trafficking involving a person under the age of 18. The Court found that the mandatory minimum constituted cruel and unusual punishment under section 12 of the Charter. The accused was sentenced to one additional day in custody after receiving credit for pre-sentence custody.',
  },
  {
    title: 'Constitutional Challenge to Victim Surcharge', caseName: 'R. v. Madeley', citation: '2016 ONCJ 108', canliiUrl: 'https://www.canlii.org/en/on/oncj/doc/2016/2016oncj108/2016oncj108.pdf', category: 'Charter', area: 'Uttering Threats & Breach of Probation', outcome: 'Prima Facie Charter Violation Established', year: '2016', court: 'Ontario Court of Justice', issue: 'Charter ss. 7 & 15; Equality Rights; Mandatory Victim Surcharge',
    summary: 'The defence challenged the constitutionality of the mandatory victim surcharge on the basis that it disproportionately disadvantaged individuals with mental disabilities. The Court found that the legislation had a discriminatory impact, establishing a prima facie violation of equality rights under section 15 of the Charter. Further submissions were requested to determine whether the infringement could be constitutionally justified.',
  },
];

const intro = 'Notable results from our criminal defence work, from withdrawn charges to acquittals and successful appeals. Every case turns on its own facts.';

function CaseDetail({ entry }: { entry: CaseEntry }) {
  return (
    <div className="caseLibraryDetailContent" key={entry.title}>
      <p className="caseLibraryEyebrow">{entry.category} · {entry.year}</p>
      <h2 className="caseLibraryTitle">{entry.title}</h2>
      <p className="caseLibraryOutcome">{entry.outcome}</p>
      <dl className="caseLibraryFacts">
        <dt>Name</dt><dd>{entry.caseName}</dd>
        <dt>Citation</dt><dd>{entry.citation}</dd>
        <dt>CanLII</dt><dd><a className="caseLibraryCanliiLink" href={entry.canliiUrl} target="_blank" rel="noreferrer">View decision</a></dd>
        <dt>Area</dt><dd>{entry.area}</dd>
        <dt>Court</dt><dd>{entry.court}</dd>
        <dt>Issue</dt><dd>{entry.issue}</dd>
        <dt>Summary</dt><dd>{entry.summary}</dd>
      </dl>
    </div>
  );
}

function CaseLibrary() {
  const location = useLocation();
  const navigate = useNavigate();
  const categories = ['All', 'Appeals', 'Charter', 'Trials'] as const;
  const matchesCategory = (entry: CaseEntry, category: (typeof categories)[number]) => {
    if (category === 'All') return true;
    return entry.category === category;
  };
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');
  const [selectedTitle, setSelectedTitle] = useState(cases[0].title);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);
  const mobileListScrollYRef = useRef(0);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mobileCaseTitle = new URLSearchParams(location.search).get('case');
  const visibleCases = activeCategory === 'All'
    ? cases
    : cases.filter((entry) => matchesCategory(entry, activeCategory));
  const selectedIndex = Math.max(0, visibleCases.findIndex((entry) => entry.title === selectedTitle));
  const selected = visibleCases[selectedIndex];

  const moveSelection = (direction: number) => {
    const next = (selectedIndex + direction + visibleCases.length) % visibleCases.length;
    setSelectedTitle(visibleCases[next].title);
    optionRefs.current[next]?.focus();
  };

  useEffect(() => {
    if (!mobileCaseTitle) {
      setMobileDetailOpen(false);
      return;
    }

    const mobileCase = cases.find((entry) => entry.title === mobileCaseTitle);
    if (!mobileCase) {
      navigate('/case-library', { replace: true });
      setMobileDetailOpen(false);
      return;
    }

    setSelectedTitle(mobileCase.title);
    setMobileDetailOpen(true);
  }, [mobileCaseTitle, navigate]);

  useEffect(() => {
    if (!mobileDetailOpen) return;
    mobileListScrollYRef.current = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      window.scrollTo(0, mobileListScrollYRef.current);
    };
  }, [mobileDetailOpen]);

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
                const nextCases = cases.filter((entry) => matchesCategory(entry, category));
                setSelectedTitle(nextCases[0].title);
                setMobileDetailOpen(false);
                  if (mobileCaseTitle) navigate('/case-library', { replace: true });
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
                  if (window.matchMedia('(max-width: 799px)').matches) {
                    navigate(
                      { pathname: location.pathname, search: `?case=${encodeURIComponent(entry.title)}` },
                      { state: { fromCaseLibrary: true } },
                    );
                  }
                }}
              >
                <span className="caseLibraryOptionTitle">{entry.title}</span>
                <span className="caseLibraryOptionOutcome">{entry.outcome}</span>
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
          <button
            className="caseLibraryBack"
            type="button"
            onClick={() => {
              setMobileDetailOpen(false);
              const detailNavigationState = location.state as { fromCaseLibrary?: boolean } | null;
              if (detailNavigationState?.fromCaseLibrary) navigate(-1);
              else navigate('/case-library', { replace: true });
            }}
          >
            ← Back to case library
          </button>
          <CaseDetail entry={selected} />
        </section>
      )}

      <ContactCTA />
      <Footer />
    </div>
  );
}

export default CaseLibrary;
