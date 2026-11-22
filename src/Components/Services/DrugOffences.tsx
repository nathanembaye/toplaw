import React, { useEffect, useRef, useState } from 'react';
import ContactCTA from './ContactCTA.tsx';
import Footer from '../Footer.tsx';
import './DrugOffences.css';

const drugSections: Array<{
  id: string;
  indexTitle: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  trailingParagraphs?: string[];
}> = [
  {
    id: 'bail-understanding',
    indexTitle: 'Understanding Drug Offences',
    heading: 'What are drug offences under Canadian law?',
    paragraphs: [
      'Drug offences in Canada are primarily governed by the Controlled Drugs and Substances Act (CDSA), which regulates the possession, production, trafficking, importation, and distribution of controlled substances.',
      'The legal consequences of a drug charge depend on the substance involved, the alleged conduct, and the applicable provisions of federal legislation.',
      'Common drug-related criminal charges include:',
    ],
    bullets: [
      'Possession of a controlled substance',
      'Possession for the purpose of trafficking',
      'Drug trafficking',
      'Production of controlled substances',
      'Importing or exporting controlled substances',
      'Possession for the purpose of exporting',
      'Conspiracy or other offences connected to drug trafficking',
    ],
    trailingParagraphs: [
      'Drug prosecutions may involve substances such as cocaine, fentanyl, heroin, methamphetamine, and other controlled drugs.',
      'Not every possession of a substance is necessarily unlawful. The applicable schedules, statutory exemptions, authorizations, and other legal requirements must be considered.',
      'A drug-related criminal charge can carry serious consequences, particularly where the allegations involve trafficking, production, or large quantities of controlled substances.',
      'TOP Law provides criminal defence representation for individuals facing drug charges in Toronto and throughout Ontario, with a focus on detailed evidence review and strategic legal advocacy.',
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Possession & Trafficking',
    heading: 'What is the difference between drug possession and drug trafficking in Canada?',
    paragraphs: [
      'Drug possession and drug trafficking are distinct offences under Canadian law, with different legal elements and potential consequences.',
      'A possession charge generally requires the Crown to establish that the accused knowingly possessed a controlled substance without lawful authorization. Possession may be actual, constructive, or joint, depending on the circumstances.',
      'Drug trafficking involves conduct such as selling, administering, giving, transferring, transporting, sending, or delivering a controlled substance, as defined by the Controlled Drugs and Substances Act.',
      'Possession for the purpose of trafficking is a separate offence. It may be alleged where the Crown believes that controlled substances were possessed with the intention of trafficking them.',
      'In determining whether possession was for the purpose of trafficking, investigators and prosecutors may rely on evidence such as:',
    ],
    bullets: [
      'The quantity and packaging of the substances',
      'Scales or other drug-related equipment',
      'Cash and financial records',
      'Electronic messages and communications',
      'Surveillance evidence',
      'The circumstances in which the substances were discovered',
    ],
    trailingParagraphs: [
      'No single factor necessarily establishes trafficking. The Crown must prove the essential elements of the particular offence beyond a reasonable doubt.',
      'A criminal defence lawyer can assess the evidence and determine whether the prosecution can establish possession, knowledge, control, or the alleged purpose of trafficking.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Search and Seizure',
    heading: 'Can drug charges be challenged if police conducted an unlawful search?',
    paragraphs: [
      'Drug investigations frequently involve searches of vehicles, residences, electronic devices, and personal belongings.',
      'Section 8 of the Canadian Charter of Rights and Freedoms protects individuals against unreasonable search or seizure. Police searches must comply with applicable constitutional and statutory requirements.',
      'Depending on the circumstances, police may require judicial authorization before conducting a search. Certain exceptions permit warrantless searches, but those exceptions are subject to legal limits.',
      'Potential issues in a drug prosecution may include:',
    ],
    bullets: [
      'Whether police had lawful grounds to stop or detain an individual',
      'Whether a search warrant was validly obtained and executed',
      'Whether a warrantless search was legally authorized',
      'Whether police exceeded the permitted scope of a search',
      "Whether the accused's rights during detention or arrest were respected",
      'Whether seized evidence was handled and documented appropriately',
    ],
    trailingParagraphs: [
      'If a Charter violation occurred, defence counsel may seek an appropriate legal remedy. In some circumstances, this may include an application to exclude evidence under section 24(2) of the Charter.',
      'Evidence is not automatically excluded whenever a constitutional violation is established. The court must apply the relevant legal test.',
      'TOP Law examines the legality of police investigative methods and the admissibility of evidence when defending drug-related criminal charges.',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Penalties and Consequences',
    heading: 'What are the penalties for drug offences in Ontario?',
    paragraphs: [
      'The penalties for drug offences in Canada depend on the specific charge, the controlled substance involved, and the circumstances of the alleged conduct.',
      'Simple possession offences may carry different maximum penalties from trafficking, production, or importation offences. Serious drug trafficking allegations can result in lengthy custodial sentences.',
      "Sentencing courts consider factors such as the nature and quantity of the substance, the offender's role, the circumstances of the offence, and relevant aggravating or mitigating factors.",
      'A drug conviction may also result in consequences beyond the sentence imposed by the court, including:',
    ],
    bullets: [
      'A criminal record',
      'Employment or professional licensing difficulties',
      'Travel and immigration complications',
      'Forfeiture of certain property where legally authorized',
      'Restrictions arising from probation or other court orders',
      'Long-term personal and financial consequences',
    ],
    trailingParagraphs: [
      'The availability of alternatives to incarceration depends on the offence, the individual\'s circumstances, and applicable law.',
      'In appropriate cases, legal options may include diversionary measures, treatment-related approaches, or other sentencing alternatives.',
      'A criminal defence lawyer can explain the potential consequences of a drug charge and assess the legal options available at each stage of the proceedings.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with drug charges?',
    paragraphs: [
      'Drug prosecutions often involve complex investigations, police surveillance, search warrants, electronic communications, and questions concerning possession or control of controlled substances.',
      'Effective criminal defence requires careful examination of the investigative process and the evidence relied upon by the Crown.',
      'A criminal defence lawyer may assist by:',
    ],
    bullets: [
      'Reviewing police reports, search warrants, and Crown disclosure',
      'Assessing the legality of searches, seizures, and arrests',
      'Identifying potential Charter violations',
      'Challenging evidence concerning possession, knowledge, or control',
      'Examining allegations of trafficking or possession for the purpose of trafficking',
      'Reviewing surveillance and electronic communications',
      'Representing the accused at bail hearings',
      'Negotiating with the Crown where appropriate',
      'Preparing for and conducting criminal trials',
      'Advising on sentencing and potential appeals',
    ],
    trailingParagraphs: [
      'Every drug prosecution involves distinct factual and legal considerations. The appropriate defence strategy depends on the charges, the investigative methods used, and the available evidence.',
      'TOP Law represents individuals facing drug-related criminal charges in Toronto and Ontario, providing thorough case preparation, strategic legal advice, and focused courtroom advocacy.',
    ],
  },
];

function DrugOffences() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(drugSections[0].id);

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
              <h1 className="bailHearingsTitle">Drug Offences.</h1>
            <p className="bailHearingsIntroduction">
              Strategic criminal defence for drug possession, trafficking, and controlled substance allegations.
            </p>

            <nav className="bailHearingsIndex" aria-label="Drug offence sections">
              {drugSections.map((section, index) => (
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
          {drugSections.map((section, index) => (
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

export default DrugOffences;
