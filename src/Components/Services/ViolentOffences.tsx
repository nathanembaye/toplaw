import React, { useEffect, useRef, useState } from 'react';
import ContactCTA from './ContactCTA.tsx';
import Footer from '../Footer.tsx';
import './ViolentOffences.css';

const violentSections: Array<{
  id: string;
  indexTitle: string;
  heading: string;
  paragraphs: string[];
  bullets?: Array<string | { label: string; description: string }>;
  trailingParagraphs?: string[];
}> = [
  {
    id: 'bail-understanding',
    indexTitle: 'Understanding Violent Offences',
    heading: 'What are violent offences under Canadian criminal law?',
    paragraphs: [
      'Violent offences generally involve the use or threatened use of force against another person. Under the Criminal Code of Canada, these offences range from common assault to more serious charges involving weapons, bodily harm or death.',
      'Common violent offences include:',
    ],
    bullets: [
      'Common assault',
      'Assault with a weapon or causing bodily harm',
      'Aggravated assault',
      'Uttering threats',
      'Criminal harassment',
      'Robbery',
      'Forcible confinement',
      'Manslaughter and murder',
      'Attempted murder',
    ],
    trailingParagraphs: [
      'The legal requirements and potential penalties vary depending on the offence.',
      'Being charged with a violent offence does not mean the accused is guilty. The accused is presumed innocent, and the Crown must prove every essential element of the offence beyond a reasonable doubt.',
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Assault Charges',
    heading: 'What are the different types of assault charges in Ontario?',
    paragraphs: [
      'Under section 265 of the Criminal Code, assault generally involves intentionally applying force to another person without their consent. Certain attempts or threats to apply force may also constitute assault, even where no physical contact occurs.',
      'The Criminal Code distinguishes between several types of assault:',
    ],
    bullets: [
      { label: 'Common assault:', description: 'Assault that does not involve the additional elements of a more serious assault offence.' },
      { label: 'Assault with a weapon or causing bodily harm:', description: 'Assault involving the use or threatened use of a weapon or resulting in bodily harm. Section 267 also covers certain other conduct, including choking, suffocating or strangling another person.' },
      { label: 'Aggravated assault:', description: "Assault that wounds, maims, disfigures or endangers another person's life." },
      { label: 'Assaulting a peace officer:', description: 'Assaulting a police officer or another peace officer acting in the execution of their duties.' },
    ],
    trailingParagraphs: [
      'The type of assault charge determines what the Crown must prove and what penalties may be imposed upon conviction.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Defending Violent Charges',
    heading: 'What defences are available for violent criminal charges in Canada?',
    paragraphs: [
      'The defence of a violent offence depends on the charge, the available evidence and what occurred during the alleged incident.',
      'Possible defences and legal issues include:',
    ],
    bullets: [
      { label: 'Self-defence:', description: 'Whether the accused acted reasonably to protect themselves or another person from the use or threat of force.' },
      { label: 'Defence of property:', description: 'Whether the accused acted lawfully to protect property.' },
      { label: 'Identity:', description: 'Whether the Crown can prove that the accused was the person responsible for the alleged offence.' },
      { label: 'Intent:', description: 'Whether the Crown can prove that the accused had the intent or other mental state required for the offence.' },
      { label: 'Witness credibility and reliability:', description: 'Whether witness accounts are accurate, consistent and trustworthy.' },
      { label: 'Charter violations:', description: 'Whether police violated the accused’s constitutional rights and whether a legal remedy, such as the exclusion of evidence, is available.' },
    ],
    trailingParagraphs: [
      'Self-defence, for example, does not require someone to wait until they have been physically attacked. The court considers whether the accused reasonably believed that force was being used or threatened, whether they acted to protect themselves or another person, and whether their response was reasonable in the circumstances.',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Penalties and Consequences',
    heading: 'What are the penalties for violent offences in Ontario?',
    paragraphs: [
      'Penalties for violent offences vary considerably depending on the charge and the circumstances of the case. Some offences may result in a fine or probation, while others can carry lengthy prison sentences. A conviction for murder carries a mandatory sentence of life imprisonment.',
      "When imposing a sentence, the court considers the seriousness of the offence, the offender's degree of responsibility and any relevant aggravating or mitigating circumstances.",
      'A conviction for a violent offence can also have consequences beyond the sentence itself, including:',
    ],
    bullets: [
      'A criminal record',
      'Difficulties obtaining employment or professional licences',
      'Travel and immigration restrictions',
      'Weapons prohibitions',
      'No-contact orders and other court-imposed restrictions',
      'Damage to personal and professional relationships',
    ],
    trailingParagraphs: [
      "The potential consequences depend on the specific offence, the sentence imposed and the individual's circumstances.",
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with violent offence charges?',
    paragraphs: [
      'Violent offence cases often involve conflicting accounts of what happened. Witness statements, video recordings, medical records and forensic evidence can all play an important role in determining how the charges are defended.',
      'A criminal defence lawyer can review the evidence, identify available defences and assess whether the Crown can prove the charges beyond a reasonable doubt.',
      'TOP Law Criminal Defence represents individuals charged with assault and other violent offences in Toronto and throughout Ontario. The firm can assist with:',
    ],
    bullets: [
      'Reviewing police reports, witness statements and Crown disclosure',
      'Examining video recordings, forensic evidence and medical records',
      'Assessing potential defences, including self-defence',
      'Challenging the credibility and reliability of Crown evidence',
      'Identifying Charter violations and procedural issues',
      'Representing clients at bail hearings',
      'Negotiating with the Crown where appropriate',
      'Preparing for and conducting criminal trials',
      'Representing clients at sentencing and advising on potential appeals',
    ],
  },
];

function ViolentOffences() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(violentSections[0].id);

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
              <h1 className="bailHearingsTitle">Violent Offences.</h1>
            <p className="bailHearingsIntroduction">
              Criminal defence representation for assault and other violent offences in Toronto and throughout Ontario.
            </p>

            <nav className="bailHearingsIndex" aria-label="Violent offence sections">
              {violentSections.map((section, index) => (
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
          {violentSections.map((section, index) => (
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
                    {section.bullets.map((item, bulletIndex) => (
                      <li key={bulletIndex}>
                        {typeof item === 'string' ? item : <><strong>{item.label}</strong> {item.description}</>}
                      </li>
                    ))}
                  </ul>
                )}
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

export default ViolentOffences;
