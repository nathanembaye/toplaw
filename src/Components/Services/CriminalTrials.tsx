import React, { useEffect, useRef, useState } from 'react';
import ContactCTA from './ContactCTA.tsx';
import Footer from '../Footer.tsx';
import './CriminalTrials.css';

const trialSections: Array<{ id: string; indexTitle: string; heading: string; paragraphs: string[]; bullets?: string[]; trailingParagraphs?: string[] }> = [
  {
    id: 'trial-understanding',
    indexTitle: 'Understanding Trials',
    heading: 'What is a criminal trial in Canada?',
    paragraphs: [
      'A criminal trial determines whether a person accused of a criminal offence is guilty or not guilty. Under Canadian law, the accused is presumed innocent, and the Crown prosecutor must prove guilt beyond a reasonable doubt.',
      'In Ontario, criminal trials may take place before a judge in the Ontario Court of Justice or the Superior Court of Justice. Depending on the offence and applicable legal requirements, a trial may also be heard by a judge and jury.',
      'During a trial, the Crown presents evidence in support of the charges. The defence has the right to challenge that evidence and present its own case. The accused is not required to prove their innocence.',
      'A criminal conviction can have serious consequences, including a criminal record, restrictions on liberty and imprisonment.',
    ],
  },
  {
    id: 'trial-process',
    indexTitle: 'Trial Process',
    heading: 'What happens during a criminal trial in Ontario?',
    paragraphs: [
      'Before trial, the Crown is required to disclose relevant information in its possession or control, subject to certain legal exceptions. Crown disclosure may include police reports, witness statements, recordings, forensic evidence and other materials related to the charges.',
      'The Crown generally presents its case first, calling witnesses and introducing evidence. The defence may cross-examine Crown witnesses to test the reliability of their testimony and identify inconsistencies.',
      'Once the Crown has finished presenting its case, the defence may choose to present evidence or call witnesses. The accused has the right not to testify.',
      'Both sides may then make closing arguments addressing the evidence and applicable law. In a trial before a judge alone, the judge decides whether the Crown has proven guilt beyond a reasonable doubt. In a jury trial, that decision is made by the jury.',
    ],
  },
  {
    id: 'trial-evidence',
    indexTitle: 'Evidence & Witnesses',
    heading: 'How is evidence challenged during a criminal trial?',
    paragraphs: [
      'Not all evidence collected during a criminal investigation is admissible in court. The defence may challenge how evidence was obtained, whether it is reliable and whether it should be admitted at trial.',
      'Common issues that may arise include:',
    ],
    bullets: [
      'Inconsistencies in witness statements or testimony',
      'The reliability of eyewitness identification',
      'The accuracy and interpretation of forensic evidence',
      'The admissibility of statements made to police',
      'The legality of searches, seizures and arrests',
      'Violations of rights protected by the Canadian Charter of Rights and Freedoms',
    ],
    trailingParagraphs: [
      "If police have violated the accused's Charter rights, the defence may ask the court to exclude evidence obtained as a result of those violations. Whether the evidence is excluded depends on the circumstances and applicable law.",
      "Through cross-examination, the defence can also challenge a witness's account, question their recollection of events and expose weaknesses in their testimony.",
    ],
  },
  {
    id: 'trial-outcomes',
    indexTitle: 'Trial Outcomes',
    heading: 'What happens after a criminal trial in Ontario?',
    paragraphs: [
      'If the Crown has not proven guilt beyond a reasonable doubt, the accused is acquitted of the charge.',
      'If the accused is found guilty, the matter generally proceeds to sentencing. Depending on the offence and the circumstances of the case, possible outcomes include a discharge where legally available, probation, a fine or imprisonment.',
      "A sentence must be proportionate to the seriousness of the offence and the offender's degree of responsibility. The court also considers relevant aggravating and mitigating circumstances.",
      'A person convicted of a criminal offence may be able to challenge their conviction, sentence or both through a criminal appeal. Strict deadlines apply, so it is important to seek legal advice promptly.',
    ],
  },
  {
    id: 'trial-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help during a trial?',
    paragraphs: [
      'A criminal defence lawyer begins preparing for trial well before the first court appearance at which evidence is heard. This involves reviewing the Crown\'s evidence, identifying weaknesses in the prosecution\'s case and determining how best to defend against the charges.',
      'TOP Law Criminal Defence represents individuals facing criminal charges in Toronto and throughout Ontario. The firm can assist with:',
    ],
    bullets: [
      'Reviewing Crown disclosure and investigative materials',
      "Identifying weaknesses and inconsistencies in the Crown's evidence",
      'Developing a defence strategy based on the evidence and applicable law',
      'Preparing for and conducting cross-examinations',
      'Challenging the admissibility of evidence',
      'Bringing Charter and procedural applications',
      'Presenting defence evidence where appropriate',
      'Making legal arguments and closing submissions',
      'Representing clients at sentencing and advising on potential appeals',
    ],
  },
];

function CriminalTrials() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(trialSections[0].id);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const sections = Array.from(content.querySelectorAll<HTMLElement>('[data-trial-section]'));
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
              Criminal defence representation at trial in Toronto and throughout Ontario.
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
              data-trial-section
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
