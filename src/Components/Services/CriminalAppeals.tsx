import React, { useEffect, useRef, useState } from 'react';
import ContactCTA from './ContactCTA.tsx';
import Footer from '../Footer.tsx';
import './CriminalAppeals.css';

const appealSections: Array<{
  id: string;
  indexTitle: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}> = [
  {
    id: 'bail-understanding',
    indexTitle: 'Understanding Appeals',
    heading: 'What is a criminal appeal in Canada?',
    paragraphs: [
      'A criminal appeal allows a higher court to review a decision made by a lower court. In Canada, a person convicted of a criminal offence may appeal their conviction, sentence or both, subject to the applicable legal requirements.',
      'An appeal is not a new trial. Witnesses are not ordinarily called to testify again. Instead, the appeal court reviews the trial record to determine whether there are legal grounds to overturn or change the original decision.',
      'In Ontario, criminal appeals are generally heard by the Superior Court of Justice or the Court of Appeal for Ontario. Which court hears the appeal depends on how the offence was prosecuted and the decision being appealed.',
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Grounds for Appeal',
    heading: 'What are the grounds for appealing a criminal conviction in Ontario?',
    paragraphs: [
      'Disagreeing with the outcome of a trial is not enough to overturn a criminal conviction. There must be a legal basis for the appeal.',
      'Not every error made during a trial will justify overturning a conviction. The appeal court considers the nature of the error and whether it provides a legal basis for setting aside the conviction.',
      'In certain circumstances, the appeal court may also consider new evidence that was not presented at trial.',
    ],
    bullets: [
      "Errors in the trial judge's interpretation or application of the law",
      'Improper admission or exclusion of evidence',
      'Incorrect instructions given to a jury',
      'An unreasonable verdict or one that cannot be supported by the evidence',
      "Violations of the accused's right to a fair trial",
      'A miscarriage of justice',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Sentence Appeals',
    heading: 'Can you appeal a criminal sentence in Ontario?',
    paragraphs: [
      'A person convicted of a criminal offence may challenge their sentence without challenging the conviction itself. A sentence appeal asks a higher court to review whether the sentence imposed was appropriate.',
      "In Canada, a sentence must be proportionate to the seriousness of the offence and the offender's degree of responsibility. Courts must also consider other applicable sentencing principles and the circumstances of the case.",
      'The fact that another judge might have imposed a different sentence is not enough to justify changing it. An appeal court may intervene where the sentence is demonstrably unfit or where an error in principle affected the sentence.',
      'The appeal court may reduce the sentence, increase it where legally permitted, or leave it unchanged.',
    ],
    bullets: [
      'An error in the application of sentencing principles',
      'Failure to consider relevant mitigating circumstances',
      'Improper consideration of aggravating factors',
      'A sentence that is demonstrably unfit',
      'Errors in calculating or structuring the sentence',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'The Appeals Process',
    heading: 'How does the criminal appeals process work in Ontario?',
    paragraphs: [
      'A criminal appeal generally begins with filing a notice of appeal. In many Ontario criminal appeals, the deadline is 30 days after sentencing. The applicable deadline depends on the type of appeal and the court involved.',
      'Once the appeal is underway, the defence reviews the court record and trial transcripts, identifies the grounds of appeal and prepares written legal arguments.',
      'These written arguments are generally set out in a document called a factum, which explains why the original decision should be overturned or changed.',
      'The Crown may respond in writing, and both sides may present oral arguments before the appeal court.',
      'The court may dismiss the appeal, order a new trial, overturn a conviction, enter an acquittal where appropriate, or change the sentence.',
      'Filing an appeal does not automatically release someone from custody. In certain circumstances, a person may apply for bail pending appeal.',
      'Given the strict filing deadlines, it is important to seek legal advice promptly after sentencing.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal appeal lawyer help challenge a conviction or sentence?',
    paragraphs: [
      'A criminal appeal requires a different approach from a trial. An appeal lawyer reviews what happened during the original proceedings to determine whether there are grounds to challenge the conviction or sentence.',
      'TOP Law Criminal Defence represents clients in conviction and sentence appeals in Toronto and throughout Ontario. The firm can assist with:',
    ],
    bullets: [
      'Reviewing trial transcripts, evidence and court decisions',
      'Identifying errors of law and other grounds for appeal',
      'Assessing the merits of conviction and sentence appeals',
      'Preparing notices of appeal and other required court documents',
      'Conducting legal research and preparing written arguments',
      'Presenting oral arguments before the appeal court',
      'Advising on and pursuing bail pending appeal',
      'Responding to Crown appeals',
    ],
  },
];

function CriminalAppeals() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(appealSections[0].id);

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
              <h1 className="bailHearingsTitle">Criminal Appeals.</h1>
            <p className="bailHearingsIntroduction">
              Criminal defence representation for conviction and sentence appeals in Toronto and throughout Ontario.
            </p>

            <nav className="bailHearingsIndex" aria-label="Criminal appeals sections">
              {appealSections.map((section, index) => (
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
          {appealSections.map((section, index) => (
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
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
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

export default CriminalAppeals;
