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
      'A criminal appeal is a legal process through which a higher court reviews a decision made in a criminal proceeding. In Canada, individuals convicted of a criminal offence may have the right to appeal their conviction, sentence, or both, depending on the circumstances of their case.',
      'Unlike a trial, a criminal appeal does not ordinarily involve presenting witnesses or hearing the evidence again. Instead, the appellate court examines the trial record to determine whether errors occurred that justify changing the original decision.',
      'Criminal appeals in Ontario are generally heard by the Superior Court of Justice or the Court of Appeal for Ontario, depending on how the offence was prosecuted and the court in which the original proceedings took place.',
      'An appeal may involve questions about the interpretation of criminal law, the assessment of evidence, procedural fairness, or the appropriateness of a sentence.',
      'TOP Law Criminal Defence assists individuals seeking to challenge criminal convictions and sentences in Toronto and throughout Ontario, providing careful analysis and strategic appellate advocacy.',
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Grounds for Appeal',
    heading: 'What are the grounds for appealing a criminal conviction in Ontario?',
    paragraphs: [
      'A criminal conviction cannot be overturned simply because an individual disagrees with the outcome of their trial. A successful criminal appeal generally requires identifying a recognized legal basis for appellate intervention.',
      'Not every error made during a criminal trial will justify overturning a conviction. The appellate court considers the nature of the alleged error, the applicable standard of review, and whether the legal requirements for intervention have been satisfied.',
      'In limited circumstances, an appellate court may also permit fresh evidence that was not presented during the original proceedings.',
      'A criminal appeal lawyer can examine the trial record, identify potential grounds of appeal, and assess whether there is a legal basis to challenge the conviction.',
    ],
    bullets: [
      "Errors in the trial judge's interpretation or application of the law",
      'Improper admission or exclusion of evidence',
      'Incorrect instructions provided to a jury',
      'A verdict that is unreasonable or unsupported by the evidence',
      "Procedural unfairness affecting the accused's right to a fair trial",
      'A miscarriage of justice',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Sentence Appeals',
    heading: 'Can you appeal a criminal sentence in Ontario?',
    paragraphs: [
      'A person convicted of a criminal offence may be able to appeal the sentence imposed by the trial court. A sentence appeal asks a higher court to determine whether the original sentence should be changed.',
      'Criminal sentencing in Canada is governed by principles that include proportionality, parity, rehabilitation, deterrence, and the circumstances of both the offence and the offender.',
      'A sentence appeal is not automatically successful because another judge might have imposed a different punishment. Appellate courts generally give considerable deference to sentencing decisions unless a recognized basis for intervention exists.',
      'Depending on the circumstances, the appellate court may reduce a sentence, increase it where legally permitted, or leave the original sentence unchanged.',
      'TOP Law Criminal Defence can review sentencing decisions and assess potential grounds for pursuing a criminal sentence appeal in Ontario.',
    ],
    bullets: [
      'An error in the application of sentencing principles',
      'Failure to consider relevant mitigating circumstances',
      'Improper consideration of aggravating factors',
      'A sentence that is demonstrably unfit',
      'An error affecting the calculation or structure of the sentence',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'The Appeals Process',
    heading: 'How does the criminal appeals process work in Ontario?',
    paragraphs: [
      'The criminal appeals process generally begins with filing a notice of appeal within the applicable deadline. In many Ontario criminal appeals, the notice must be filed within 30 days after sentencing, although the specific requirements depend on the type of appeal and the court involved.',
      'Once an appeal has been initiated, the process may involve obtaining trial transcripts, reviewing the court record, identifying grounds of appeal, and preparing written legal arguments.',
      'These written submissions, commonly called a factum, explain the legal errors alleged and the reasons the appellate court should intervene.',
      'The Crown may file responding materials, and the parties may present oral arguments before the appellate court.',
      'Depending on the outcome, the court may dismiss the appeal, order a new trial, set aside a conviction, enter an acquittal where legally appropriate, or modify a sentence.',
      'An individual serving a custodial sentence is not automatically released simply because an appeal has been filed. In appropriate circumstances, an application for release pending appeal may be available.',
      'Because criminal appeals involve strict procedural requirements and deadlines, obtaining legal advice promptly after a conviction or sentence is important.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal appeal lawyer help challenge a conviction or sentence?',
    paragraphs: [
      'Criminal appeals require a different approach from trial proceedings. Rather than presenting the original defence again, appellate advocacy focuses on identifying legal errors, analyzing the trial record, and developing arguments that satisfy the requirements for appellate intervention.',
      'The strength of a criminal appeal often depends on careful legal research, a thorough understanding of the trial proceedings, and the ability to identify errors that may have affected the outcome.',
      'Not every conviction or sentence provides grounds for a successful appeal. An informed assessment can help determine whether appellate intervention is available and what steps should be taken.',
      "TOP Law Criminal Defence provides criminal appeal representation in Toronto and Ontario, with an emphasis on detailed case analysis, persuasive written advocacy, and the protection of clients' legal rights.",
    ],
    bullets: [
      'Reviewing trial transcripts, evidence, and judicial decisions',
      'Identifying potential errors of law or miscarriages of justice',
      'Assessing the merits of conviction and sentence appeals',
      'Preparing notices of appeal and other required court documents',
      'Conducting legal research and drafting written appellate arguments',
      'Presenting oral submissions before the appellate court',
      'Advising on applications for release pending appeal',
      'Responding to appeals initiated by the Crown',
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
              Focused appellate advocacy to challenge convictions, sentences, and errors in criminal proceedings.
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
