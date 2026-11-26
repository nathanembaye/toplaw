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
    id: 'drug-understanding',
    indexTitle: 'Understanding Drug Offences',
    heading: 'What are drug offences under Canadian law?',
    paragraphs: [
      'Drug offences in Canada are primarily governed by the Controlled Drugs and Substances Act (CDSA), which regulates the possession, trafficking, production, importation and exportation of controlled substances.',
      'Common drug-related criminal charges include:',
    ],
    bullets: [
      'Possession of a controlled substance',
      'Possession for the purpose of trafficking',
      'Drug trafficking',
      'Production of controlled substances',
      'Importing or exporting controlled substances',
      'Possession for the purpose of exporting',
      'Conspiracy to commit drug trafficking offences',
    ],
    trailingParagraphs: [
      'These charges may involve substances such as cocaine, fentanyl, heroin, methamphetamine and other controlled drugs.',
      'Possession of a controlled substance is not always unlawful. Certain substances may be legally possessed under a valid prescription, statutory exemption or other lawful authorization.',
      'The seriousness of a drug charge and the potential penalties depend on the substance involved, the nature of the allegations and the circumstances of the case.',
    ],
  },
  {
    id: 'drug-possession',
    indexTitle: 'Possession & Trafficking',
    heading: 'What is the difference between drug possession and drug trafficking in Canada?',
    paragraphs: [
      'Drug possession and drug trafficking are separate criminal offences with different legal requirements and potential penalties.',
      'For a possession charge, the Crown generally must prove that the accused knowingly possessed a controlled substance without lawful authorization. A person does not necessarily need to have drugs physically on them to be charged with possession. Knowledge and control are important considerations.',
      'Drug trafficking is not limited to selling drugs. Under the Controlled Drugs and Substances Act, trafficking can also include giving, transferring, transporting or delivering a controlled substance.',
      'Possession for the purpose of trafficking is a separate offence. The Crown must prove that the accused possessed a controlled substance with the intention of trafficking it.',
      'Evidence relied upon by the Crown may include:',
    ],
    bullets: [
      'The quantity and packaging of the drugs',
      'Scales or other drug-related equipment',
      'Cash and financial records',
      'Text messages and other electronic communications',
      'Police surveillance',
      'The circumstances in which the drugs were discovered',
    ],
    trailingParagraphs: [
      'The presence of any one of these factors does not necessarily establish an intention to traffic. The Crown must prove every essential element of the offence beyond a reasonable doubt.',
    ],
  },
  {
    id: 'drug-search',
    indexTitle: 'Search and Seizure',
    heading: 'Can drug charges be challenged if police conducted an unlawful search?',
    paragraphs: [
      'Drug charges often arise from police searches of vehicles, homes, electronic devices or personal belongings. Whether those searches were lawful can be an important issue in the defence.',
      'Section 8 of the Canadian Charter of Rights and Freedoms protects individuals against unreasonable search or seizure.',
      'Police generally require a warrant to search a place where a person has a reasonable expectation of privacy, unless a recognized legal exception applies. Even when police have a search warrant, there are limits on how the search can be conducted.',
      'Common legal issues in drug cases include:',
    ],
    bullets: [
      'Whether police had lawful grounds to stop or detain the accused',
      'Whether a search warrant was lawfully obtained and executed',
      'Whether police had legal grounds to conduct a search without a warrant',
      'Whether police exceeded the permitted scope of a search',
      "Whether the accused's Charter rights, including the right to counsel, were respected",
      'Whether seized evidence was properly handled and documented',
    ],
    trailingParagraphs: [
      "If police violated the accused's Charter rights, the defence may apply to have evidence excluded under section 24(2) of the Charter.",
      "Evidence obtained through a Charter violation is not automatically excluded. The court must determine whether admitting the evidence would bring the administration of justice into disrepute. If key evidence is excluded, it can significantly weaken the Crown's case.",
    ],
  },
  {
    id: 'drug-penalties',
    indexTitle: 'Penalties and Consequences',
    heading: 'What are the penalties for drug offences in Ontario?',
    paragraphs: [
      'Penalties for drug offences vary depending on the charge, the substance involved and the circumstances of the offence.',
      'Simple possession generally carries less severe penalties than trafficking, production or importation. Serious drug trafficking offences can result in lengthy prison sentences.',
      "When imposing a sentence, the court may consider the type and quantity of drugs involved, the offender's role in the offence and any relevant aggravating or mitigating circumstances.",
      'A drug conviction can also have consequences beyond the sentence itself, including:',
    ],
    bullets: [
      'A criminal record',
      'Difficulties obtaining employment or professional licences',
      'Travel and immigration complications',
      'Forfeiture of property where permitted by law',
      'Restrictions imposed through probation or other court orders',
      'Personal and financial consequences',
    ],
    trailingParagraphs: [
      'Not every drug charge results in a criminal conviction or imprisonment. Depending on the offence and the circumstances of the accused, alternatives such as diversion programs, treatment programs or non-custodial sentences may be available.',
    ],
  },
  {
    id: 'drug-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with drug charges?',
    paragraphs: [
      'Drug cases often raise questions about how police obtained their evidence and whether the accused knew about or had control over the drugs in question. A criminal defence lawyer can review the investigation, challenge the admissibility of evidence and assess whether the Crown can prove the charges.',
      'TOP Law Criminal Defence represents individuals charged with drug possession, trafficking and other drug offences in Toronto and throughout Ontario. The firm can assist with:',
    ],
    bullets: [
      'Reviewing police reports, search warrants and Crown disclosure',
      'Assessing the legality of searches, seizures and arrests',
      'Identifying potential Charter violations',
      'Challenging evidence of possession, knowledge or control',
      'Examining allegations of trafficking or possession for the purpose of trafficking',
      'Reviewing surveillance and electronic communications',
      'Representing clients at bail hearings',
      'Negotiating with the Crown where appropriate',
      'Preparing for and conducting criminal trials',
      'Representing clients at sentencing and advising on potential appeals',
    ],
  },
];

function DrugOffences() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(drugSections[0].id);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const sections = Array.from(content.querySelectorAll<HTMLElement>('[data-drug-section]'));
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
              Criminal defence representation for drug possession, trafficking and other drug offences in Toronto and throughout Ontario.
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
              data-drug-section
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
