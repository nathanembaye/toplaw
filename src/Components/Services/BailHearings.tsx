import React, { useEffect, useRef, useState } from 'react';
import ContactCTA from './ContactCTA.tsx';
import Footer from '../Footer.tsx';
import './BailHearings.css';

const bailSections: Array<{
  id: string;
  indexTitle: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}> = [
  {
    id: 'bail-understanding',
    indexTitle: 'Understanding Bail',
    heading: 'What is a bail hearing in Canada?',
    paragraphs: [
      'A bail hearing is a court proceeding that determines whether a person charged with a criminal offence can be released from custody while awaiting trial. In Canada, individuals generally have the right not to be denied reasonable bail without just cause. However, release is not automatic, and the court must consider the circumstances of each case.',
      "Bail hearings in Ontario are generally conducted before a justice of the peace or judge. The court considers whether detention is necessary to ensure the accused attends court, protect public safety, or maintain confidence in the administration of justice.",
      "The outcome can significantly affect an accused person's ability to work, support their family, and prepare their defence. Having an experienced criminal defence lawyer involved early can help ensure that the proposed release plan addresses the court's concerns.",
      'TOP Law Criminal Defence assists individuals facing bail hearings in Toronto and throughout Ontario, providing legal guidance during this important stage of the criminal justice process.',
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'The Hearing Process',
    heading: 'What happens during a bail hearing in Ontario?',
    paragraphs: [
      'After an arrest, an accused person who is not released by police will generally be brought before a justice within 24 hours, or as soon as possible where a justice is not available.',
      'During a bail hearing, the Crown prosecutor may seek detention or propose conditions for release. The defence may present a release plan outlining where the accused will live, how they will comply with court requirements, and whether a surety will supervise them.',
      'A surety is an individual who agrees to help ensure that the accused complies with their bail conditions and attends required court appearances. Not every bail hearing requires a surety.',
      'The court considers the evidence and submissions presented before deciding whether to order release or detention. Depending on the charges, the Crown or the accused may bear the burden of demonstrating why detention or release is appropriate.',
      'Preparation is essential. A criminal defence lawyer can help identify potential concerns, prepare an appropriate release plan, and advocate for reasonable terms of release.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Release Conditions',
    heading: 'What conditions can be imposed on bail in Ontario?',
    paragraphs: [
      'When an accused person is released on bail, the court may impose conditions designed to address specific risks associated with the case. These conditions must be legally justified and proportionate to the circumstances.',
      'Not every condition is appropriate in every case. Canadian bail law emphasizes the principle of restraint, meaning that release should generally occur at the earliest reasonable opportunity and on the least restrictive conditions justified by the circumstances.',
      'Failing to comply with a bail condition can result in additional criminal charges or the accused being brought back into custody.',
      "A criminal defence lawyer can advocate for conditions that address legitimate concerns while minimizing unnecessary restrictions on an accused person's daily life.",
    ],
    bullets: [
      'Reporting to a designated authority',
      'Residing at a specified address',
      'Avoiding contact with certain individuals',
      'Staying away from particular locations',
      'Restrictions on possessing weapons',
      'Complying with supervision requirements involving a surety',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Bail Refusals',
    heading: 'What happens if bail is denied in Ontario?',
    paragraphs: [
      'When bail is denied, the accused is generally detained in custody while their criminal proceedings continue, unless a subsequent court order authorizes release.',
      'A refusal of bail does not mean that the accused has been found guilty. Bail hearings concern pretrial detention and release, not the final determination of criminal responsibility.',
      'In certain circumstances, an accused person may seek a bail review before a higher court. A bail review is not simply a second opportunity to present the same arguments. The reviewing court considers whether there are recognized legal grounds to intervene, which may include an error in the original decision or relevant new evidence.',
      'The availability and requirements of a bail review depend on the circumstances of the case.',
      'TOP Law Criminal Defence can assess the reasons for detention, review the original bail decision, and advise on potential legal options for pursuing release.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with a bail hearing?',
    paragraphs: [
      'A bail hearing can take place shortly after an arrest, leaving limited time to prepare. Early legal representation can help ensure that the accused understands the process and that relevant information is presented effectively.',
      'Every bail hearing presents different legal and practical considerations. Effective preparation requires an understanding of the allegations, the accused person\'s circumstances, and the concerns that may arise before the court.',
      'TOP Law Criminal Defence represents individuals facing criminal charges in Toronto and Ontario, providing focused advocacy throughout the bail process.',
    ],
    bullets: [
      "Reviewing the allegations and the Crown's position",
      'Explaining the applicable legal principles and burden of proof',
      'Identifying and preparing suitable sureties',
      'Developing a realistic and appropriate release plan',
      'Challenging unnecessary or overly restrictive bail conditions',
      'Presenting legal arguments in support of release',
      'Advising on potential bail reviews where detention is ordered',
    ],
  },
];

function BailHearings() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(bailSections[0].id);

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
              <h1 className="bailHearingsTitle">Bail Hearings.</h1>
            <p className="bailHearingsIntroduction">
              Clear, strategic representation at a critical moment in the criminal process.
            </p>

            <nav className="bailHearingsIndex" aria-label="Bail hearings sections">
              {bailSections.map((section, index) => (
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
          {bailSections.map((section, index) => (
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

export default BailHearings;
