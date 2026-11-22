import React, { useEffect, useRef, useState } from 'react';
import ContactCTA from './ContactCTA.tsx';
import Footer from '../Footer.tsx';
import './CriminalTrials.css';

const trialSections: Array<{ id: string; indexTitle: string; heading: string; paragraphs: string[]; bullets?: string[]; trailingParagraphs?: string[] }> = [
  {
    id: 'bail-understanding',
    indexTitle: 'Understanding Trials',
    heading: 'What is a criminal trial in Canada?',
    paragraphs: [
      'A criminal trial is a court proceeding in which the Crown prosecutor must prove that an accused person committed a criminal offence beyond a reasonable doubt. In Canada, every person charged with a criminal offence is presumed innocent unless and until proven guilty according to law.',
      'Criminal trials in Ontario may take place before a judge in the Ontario Court of Justice or the Superior Court of Justice. Depending on the offence and applicable legal requirements, some trials may be heard by a judge and jury.',
      "During a criminal trial, the court considers admissible evidence, hears testimony from witnesses, and evaluates the legal arguments presented by the Crown and defence. The accused has the right to challenge the prosecution's case and is not required to prove their innocence.",
      'The outcome of a criminal trial can have significant consequences, including a criminal record, restrictions on liberty, or imprisonment.',
      "TOP Law provides criminal trial representation in Toronto and throughout Ontario, focusing on careful preparation, effective advocacy, and the protection of clients' legal rights.",
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Trial Process',
    heading: 'What happens during a criminal trial in Ontario?',
    paragraphs: [
      'The criminal trial process involves several stages designed to ensure that the allegations against an accused person are examined fairly and according to law.',
      'Before trial, the Crown is required to disclose relevant information in its possession or control, subject to applicable legal exceptions. This disclosure may include police reports, witness statements, recordings, forensic evidence, and other materials related to the allegations.',
      "At trial, the Crown generally presents its case first, calling witnesses and introducing evidence in support of the charges. Defence counsel may cross-examine Crown witnesses to challenge their testimony, test the reliability of evidence, and identify inconsistencies.",
      'After the Crown closes its case, the defence may choose to present evidence, although the accused is not required to testify or call witnesses.',
      'The parties may then make closing submissions addressing the evidence and applicable law. The judge or jury determines whether the Crown has proven the charges beyond a reasonable doubt.',
      'A criminal defence lawyer can help the accused understand each stage of the trial and develop a strategy suited to the evidence and legal issues involved.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Evidence & Witnesses',
    heading: 'How is evidence challenged during a criminal trial?',
    paragraphs: [
      'Evidence plays a central role in determining the outcome of a criminal trial. However, not all information collected during an investigation is necessarily admissible in court.',
      "A criminal defence lawyer may examine whether evidence was obtained lawfully, whether witnesses are credible and reliable, and whether the Crown's evidence establishes the elements of the alleged offence.",
      'Potential issues may include:',
    ],
    bullets: [
      'Inconsistencies in witness statements or testimony',
      'The reliability of eyewitness identification',
      'The accuracy and interpretation of forensic evidence',
      'The admissibility of statements made to police',
      'The legality of searches, seizures, and arrests',
      'Potential violations of rights protected by the Canadian Charter of Rights and Freedoms',
    ],
    trailingParagraphs: [
      'Where police conduct or investigative procedures raise constitutional concerns, defence counsel may bring applications seeking appropriate remedies, including the exclusion of evidence in certain circumstances.',
      'Cross-examination is another important part of the trial process. Through careful questioning, defence counsel can test the accuracy, reliability, and credibility of testimony presented by Crown witnesses.',
      'TOP Law approaches evidentiary issues through detailed review, legal research, and focused courtroom advocacy.',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Trial Outcomes',
    heading: 'What happens after a criminal trial in Ontario?',
    paragraphs: [
      "At the conclusion of a criminal trial, the judge or jury determines whether the Crown has proven the accused person's guilt beyond a reasonable doubt.",
      'If the Crown has not met this burden, the accused is acquitted of the charge. An acquittal means that the prosecution has not established guilt to the standard required by criminal law.',
      'If the accused is found guilty, the matter generally proceeds to sentencing. Depending on the offence and circumstances, the court may consider penalties ranging from a discharge, where legally available, to probation, a fine, or imprisonment.',
      "Sentencing decisions are governed by Canadian criminal law and take into account factors such as the seriousness of the offence, the offender's circumstances, and the principles of proportionality and restraint.",
      'In some cases, a conviction or sentence may be challenged through the criminal appeals process. The availability and grounds of appeal depend on the circumstances of the proceedings.',
      'Understanding the possible outcomes of a criminal trial is an important part of making informed decisions throughout the defence process.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help during a trial?',
    paragraphs: [
      'Criminal trials require careful preparation, a thorough understanding of the evidence, and the ability to respond effectively to legal issues as they arise in court.',
      "A criminal defence lawyer works to protect the accused person's rights while testing whether the Crown can prove the allegations beyond a reasonable doubt.",
      'Legal representation during a criminal trial may include:',
    ],
    bullets: [
      'Reviewing Crown disclosure and investigative materials',
      "Identifying weaknesses or inconsistencies in the prosecution's evidence",
      'Developing a defence strategy based on the facts and applicable law',
      'Preparing and conducting cross-examinations',
      'Challenging the admissibility of improperly obtained evidence',
      'Bringing constitutional and procedural applications',
      'Presenting defence evidence where appropriate',
      'Making legal arguments and closing submissions',
      'Advising on sentencing and potential appeals where necessary',
    ],
    trailingParagraphs: [
      'Every criminal trial involves distinct factual, evidentiary, and legal considerations. Effective representation requires adapting the defence strategy to the circumstances of the case rather than relying on a predetermined approach.',
      "TOP Law represents individuals facing criminal charges in Toronto and Ontario, providing focused trial preparation, strategic courtroom advocacy, and dedicated attention to each client's defence.",
    ],
  },
];

function CriminalTrials() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(trialSections[0].id);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const sections = Array.from(content.querySelectorAll<HTMLElement>('[data-bail-section]'));
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleSections.length) {
        setActiveSection((visibleSections[0].target as HTMLElement).id);
      }
    }, {
      rootMargin: '-100px 0px -55% 0px',
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <main className="bailHearingsPage">
        <div className="bailHearingsLayout">
        <aside className="bailHearingsSidebar">
          <div className="bailHearingsSidebarContent">
            <p className="bailHearingsEyebrow">PRACTICE AREA</p>
              <h1 className="bailHearingsTitle">Criminal Trials.</h1>
            <p className="bailHearingsIntroduction">
              Thorough preparation and strategic advocacy at every stage of the criminal trial process.
            </p>

            <nav className="bailHearingsIndex" aria-label="Criminal trial sections">
              {trialSections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  className={activeSection === section.id ? 'bailHearingsIndexItem bailHearingsIndexItem--active' : 'bailHearingsIndexItem'}
                  aria-current={activeSection === section.id ? 'location' : undefined}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="bailHearingsIndexNumber">{String(index + 1).padStart(2, '0')}</span>
                  <span>{section.indexTitle}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="bailHearingsContent" ref={contentRef}>
          {trialSections.map((section, index) => (
            <section
              className="bailHearingsSection"
              id={section.id}
              data-bail-section
              key={section.id}
            >
              <p className="bailHearingsSectionNumber">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="bailHearingsQuestion">{section.heading}</h2>
              <div className="bailHearingsAnswer">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.trailingParagraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </>
  );
}

export default CriminalTrials;
