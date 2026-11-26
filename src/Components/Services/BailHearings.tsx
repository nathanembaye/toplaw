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
      'A bail hearing determines whether a person charged with a criminal offence can be released from custody while awaiting trial. Under the Canadian Charter of Rights and Freedoms, an accused person has the right not to be denied reasonable bail without just cause.',
      'In Ontario, bail hearings generally take place before a justice of the peace or judge. The court considers whether detention is necessary to ensure the accused attends court, protect public safety, or maintain confidence in the administration of justice.',
      "The outcome of a bail hearing can significantly affect the accused's ability to continue working, support their family and prepare their defence.",
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'The Hearing Process',
    heading: 'What happens during a bail hearing in Ontario?',
    paragraphs: [
      'If the police do not release someone following an arrest, the accused must be brought before a justice of the peace or judge without unreasonable delay. This must occur within 24 hours if a justice of the peace or judge is available, or as soon as possible otherwise.',
      'At the hearing, the Crown prosecutor may oppose release or request that certain conditions be imposed. The defence may present a release plan addressing where the accused will live and what arrangements, if any, are needed for supervision.',
      'A surety is someone who agrees to help ensure that the accused follows their bail conditions and attends court. Not every bail hearing requires a surety.',
      'The Crown generally bears the burden of showing why the accused should remain in custody. In certain circumstances, this burden shifts to the accused, who must demonstrate why their release is justified. The court then decides whether to grant bail.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Release Conditions',
    heading: 'What conditions can be imposed on bail in Ontario?',
    paragraphs: [
      'An accused person may be released on bail with conditions. These conditions must address legitimate concerns arising from the case and should not be more restrictive than necessary.',
      'Canadian bail law requires courts to favour release at the earliest reasonable opportunity and on the least restrictive conditions justified by the circumstances.',
      'Breaching a bail condition can lead to further criminal charges and a return to custody.',
    ],
    bullets: [
      'Reporting to a designated authority',
      'Living at a specified address',
      'Having no contact with certain individuals',
      'Staying away from certain locations',
      'Restrictions on possessing weapons',
      'Being supervised by a surety',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Bail Refusals',
    heading: 'What happens if bail is denied in Ontario?',
    paragraphs: [
      'If bail is denied, the accused will generally remain in custody while their case proceeds, unless they are later granted release.',
      'Being denied bail does not mean the accused has been found guilty. The purpose of a bail hearing is to determine whether the accused should remain in custody while awaiting trial.',
      'An accused person may be able to challenge a refusal of bail through a bail review before a higher court. A bail review is not simply a second opportunity to present the same arguments. There must be legal grounds for the court to intervene, such as an error in the original decision or a material change in circumstances.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with a bail hearing?',
    paragraphs: [
      'Bail hearings often take place shortly after an arrest, leaving little time to prepare. Getting a criminal defence lawyer involved early allows the defence to begin making arrangements for release before the hearing.',
      'TOP Law Criminal Defence represents individuals at bail hearings and bail reviews in Toronto and throughout Ontario. The firm can assist with:',
    ],
    bullets: [
      "Reviewing the allegations and the Crown's position",
      'Explaining the bail process and what to expect in court',
      'Identifying and preparing suitable sureties',
      'Preparing a release plan',
      'Challenging unnecessary or overly restrictive bail conditions',
      'Presenting legal arguments in support of release',
      'Advising on and pursuing bail reviews',
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
              Criminal defence representation for bail hearings and bail reviews in Toronto and throughout Ontario.
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
