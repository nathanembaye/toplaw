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
      'Violent offences are criminal charges involving the use or threatened use of force against another person. Under the Criminal Code of Canada, these offences encompass a wide range of conduct, from common assault to more serious allegations involving weapons, bodily harm, or loss of life.',
      'Common violent criminal offences include:',
    ],
    bullets: [
      'Assault and aggravated assault',
      'Assault with a weapon or causing bodily harm',
      'Uttering threats',
      'Criminal harassment',
      'Robbery',
      'Forcible confinement',
      'Manslaughter and murder',
      'Attempted murder',
    ],
    trailingParagraphs: [
      'The legal elements, potential penalties, and procedures associated with violent offences vary significantly depending on the specific charge and circumstances.',
      "A violent criminal charge can have serious consequences for an accused person's liberty, employment, reputation, and future. However, being charged with an offence does not establish guilt. The Crown must prove every essential element of the offence beyond a reasonable doubt.",
      'TOP Law provides criminal defence representation for individuals facing violent offence allegations in Toronto and throughout Ontario.',
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Assault Charges',
    heading: 'What are the different types of assault charges in Ontario?',
    paragraphs: [
      'Assault is one of the most commonly prosecuted violent offences in Canada. Under section 265 of the Criminal Code, assault generally involves intentionally applying force to another person without their consent, or certain acts or gestures involving threats of force.',
      'The Criminal Code distinguishes between several categories of assault, including:',
    ],
    bullets: [
      { label: 'Common assault:', description: 'Assault that does not involve the additional elements required for more serious assault offences.' },
      { label: 'Assault with a weapon or causing bodily harm:', description: 'Allegations involving a weapon, bodily harm, or other conduct specified under section 267.' },
      { label: 'Aggravated assault:', description: "Assault that wounds, maims, disfigures, or endangers another person's life." },
      { label: 'Assaulting a peace officer:', description: 'Certain assaults involving police officers or other peace officers acting in the execution of their duties.' },
    ],
    trailingParagraphs: [
      'The seriousness of an assault charge depends on the alleged conduct, the surrounding circumstances, and the applicable provisions of the Criminal Code.',
      'A criminal defence lawyer can assess the allegations, review witness statements and other evidence, and identify potential legal defences.',
      'TOP Law assists individuals charged with assault and related violent offences, providing representation throughout the criminal court process.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Defending Violent Charges',
    heading: 'What defences are available for violent criminal charges in Canada?',
    paragraphs: [
      'The defence of a violent criminal charge depends on the specific offence, the evidence, and the circumstances surrounding the allegations.',
      'A criminal defence lawyer may examine whether the Crown can establish the essential elements of the offence and whether a recognized legal defence applies.',
      'Depending on the circumstances, relevant issues may include:',
    ],
    bullets: [
      { label: 'Self-defence:', description: 'Whether the accused acted to protect themselves or another person in circumstances recognized by Canadian law.' },
      { label: 'Defence of property:', description: "Whether the accused's conduct falls within the legal requirements governing the protection of property." },
      { label: 'Identity:', description: 'Whether the Crown can prove that the accused was the person responsible for the alleged conduct.' },
      { label: 'Intent:', description: 'Whether the prosecution can establish the mental element required for the particular offence.' },
      { label: 'Credibility and reliability:', description: 'Whether witness testimony and other evidence can be relied upon.' },
      { label: 'Charter violations:', description: 'Whether police conduct infringed constitutional rights and whether an appropriate legal remedy is available.' },
    ],
    trailingParagraphs: [
      "Not every defence is available in every case. For example, a claim of self-defence requires an assessment of the accused's beliefs, the perceived threat, and whether the response was reasonable in the circumstances.",
      'Careful examination of the evidence is essential to determining the legal issues that may affect the outcome of a violent offence prosecution.',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Penalties and Consequences',
    heading: 'What are the penalties for violent offences in Ontario?',
    paragraphs: [
      'The penalties for violent criminal offences in Canada vary considerably depending on the charge, the seriousness of the conduct, and the circumstances of the accused.',
      'Less serious offences may carry penalties such as probation, fines, or imprisonment, while more serious violent offences can result in lengthy custodial sentences. Certain offences, including murder, carry mandatory sentences prescribed by the Criminal Code.',
      'When determining an appropriate sentence, a court considers factors such as the gravity of the offence, the degree of responsibility of the offender, the harm caused, and any relevant aggravating or mitigating circumstances.',
      'A conviction for a violent offence may also have consequences beyond the sentence imposed by the court, including:',
    ],
    bullets: [
      'A criminal record',
      'Restrictions on employment or professional licensing',
      'Travel and immigration complications',
      'Weapons prohibitions',
      'No-contact or other court-ordered restrictions',
      'Long-term personal and reputational consequences',
    ],
    trailingParagraphs: [
      "The consequences depend on the offence, the individual's circumstances, and the orders made by the court.",
      'A criminal defence lawyer can explain the potential penalties associated with a particular charge and provide advice on the legal options available throughout the proceedings.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with violent offence charges?',
    paragraphs: [
      'Violent criminal allegations often involve complex factual disputes, conflicting witness accounts, forensic evidence, and significant legal consequences.',
      'Early legal representation can help ensure that the accused understands the allegations, the applicable law, and the decisions that may arise during the criminal proceedings.',
      'A criminal defence lawyer may assist by:',
    ],
    bullets: [
      'Reviewing police reports, witness statements, and Crown disclosure',
      'Examining video recordings, forensic evidence, and medical records',
      'Assessing potential defences, including self-defence where applicable',
      'Challenging the credibility and reliability of prosecution evidence',
      'Identifying constitutional or procedural issues',
      'Representing the accused at bail hearings',
      'Negotiating with the Crown where appropriate',
      'Preparing for and conducting criminal trials',
      'Advising on sentencing and potential appeals',
    ],
    trailingParagraphs: [
      'Every violent offence prosecution requires an individualized assessment of the allegations and available evidence. A carefully developed defence strategy considers both the legal elements of the charge and the practical consequences of the proceedings.',
      'TOP Law represents individuals facing violent criminal charges in Toronto and Ontario, providing detailed case preparation, strategic legal advice, and focused courtroom advocacy.',
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
              Strategic criminal defence for serious allegations involving violence, threats, and personal harm.
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
