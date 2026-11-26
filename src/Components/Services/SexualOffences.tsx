import React, { useEffect, useRef, useState } from 'react';
import ContactCTA from './ContactCTA.tsx';
import Footer from '../Footer.tsx';
import './SexualOffences.css';

const sexualSections: Array<{
  id: string;
  indexTitle: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  trailingParagraphs?: string[];
}> = [
  {
    id: 'bail-understanding',
    indexTitle: 'Understanding Sexual Offences',
    heading: 'What are sexual offences under Canadian criminal law?',
    paragraphs: [
      "Sexual offences under Canada's Criminal Code cover a range of conduct, including sexual activity without consent, sexual exploitation and prohibited sexual activity involving minors.",
      'Common sexual offences include:',
    ],
    bullets: [
      'Sexual assault',
      'Sexual assault with a weapon or causing bodily harm',
      'Aggravated sexual assault',
      'Sexual interference',
      'Invitation to sexual touching',
      'Sexual exploitation',
      'Child sexual abuse and exploitation material offences',
      'Non-consensual distribution of intimate images',
    ],
    trailingParagraphs: [
      'The legal requirements and potential penalties vary depending on the offence.',
      "Sexual offence allegations can affect a person's employment, reputation and personal relationships even before a case goes to trial. However, being charged with a sexual offence does not establish guilt. The accused is presumed innocent, and the Crown must prove every essential element of the offence beyond a reasonable doubt.",
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Sexual Assault Charges',
    heading: 'What constitutes sexual assault in Canada?',
    paragraphs: [
      'Sexual assault is an assault of a sexual nature. It can involve unwanted sexual touching and does not require penetration or physical injury.',
      'Under the Criminal Code, consent means the voluntary agreement of the complainant to engage in the sexual activity in question. Consent must be present at the time of the activity and can be withdrawn at any point.',
      'A person cannot legally consent if they are unconscious or otherwise incapable of consenting. Canadian law also places restrictions on consent in circumstances involving an abuse of trust, power or authority, or where a person is below the applicable age of consent.',
      'Sexual assault cases often involve differing accounts of what happened. Text messages, witness testimony and other evidence may be relevant to determining whether consent was present.',
      'Canadian law places strict limits on the defence of an honest but mistaken belief in communicated consent. Among other requirements, the accused must have taken reasonable steps, in the circumstances known to them at the time, to ascertain consent.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Evidence and Defences',
    heading: 'How are sexual offence allegations defended in Ontario?',
    paragraphs: [
      'The defence of a sexual offence charge depends on the allegations, the available evidence and what the Crown must prove.',
      'In many sexual assault cases, the court must assess differing accounts of the same incident. The credibility and reliability of witness testimony can be central to the outcome.',
      'Relevant evidentiary and legal issues may include:',
    ],
    bullets: [
      'Inconsistencies in witness statements or testimony',
      'The reliability of identification evidence',
      'Text messages, photographs and other digital communications',
      'The interpretation of medical or forensic evidence',
      'Whether the Crown can prove each element of the offence',
      'The application of Canadian consent laws',
      "Violations of the accused's Charter rights during the investigation",
    ],
    trailingParagraphs: [
      "Sexual offence trials are subject to specific rules about what evidence can be introduced in court. These include restrictions on evidence of a complainant's prior sexual activity and rules governing certain private records.",
      'Before such evidence can be introduced, the defence may need to bring a separate application and obtain permission from the judge.',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Penalties and Consequences',
    heading: 'What are the penalties for sexual offences in Ontario?',
    paragraphs: [
      'Penalties for sexual offences vary depending on the charge and the circumstances of the case. More serious offences can carry lengthy prison sentences. Mandatory minimum sentences may also apply to certain offences, depending on the applicable law.',
      "When imposing a sentence, the court considers the seriousness of the offence, the offender's degree of responsibility, the harm caused and any relevant aggravating or mitigating circumstances.",
      'A conviction for a sexual offence can also have consequences beyond the sentence itself, including:',
    ],
    bullets: [
      'A criminal record',
      'Registration on the National Sex Offender Registry, where required by law',
      'Difficulties obtaining employment or professional licences',
      'Travel and immigration complications',
      'No-contact orders and other court-imposed restrictions',
      'Damage to personal and professional relationships',
    ],
    trailingParagraphs: [
      "Not every sexual offence conviction results in the same penalties or restrictions. The consequences depend on the specific offence, the individual's circumstances and the applicable law.",
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with sexual offence charges?',
    paragraphs: [
      'Speaking with a criminal defence lawyer early in the process can help an accused person understand the charges, preserve relevant evidence and avoid decisions that could affect their defence.',
      "Sexual offence cases are often sensitive and deeply personal. A lawyer can explain the legal process, assess the Crown's evidence and advise the accused on their options in confidence.",
      'TOP Law Criminal Defence represents individuals charged with sexual assault and other sexual offences in Toronto and throughout Ontario. The firm can assist with:',
    ],
    bullets: [
      'Reviewing Crown disclosure and investigative materials',
      'Examining witness statements and digital communications',
      'Assessing the credibility and reliability of witness testimony',
      'Identifying potential legal defences and Charter violations',
      'Challenging the admissibility of evidence and preparing evidentiary applications',
      'Preparing for and conducting cross-examinations',
      'Representing clients at bail hearings',
      'Negotiating with the Crown where appropriate',
      'Preparing for and conducting criminal trials',
      'Representing clients at sentencing and advising on potential appeals',
    ],
  },
];

function SexualOffences() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(sexualSections[0].id);

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
              <h1 className="bailHearingsTitle">Sexual Offences.</h1>
            <p className="bailHearingsIntroduction">
              Criminal defence representation for sexual assault and other sexual offences in Toronto and throughout Ontario.
            </p>

            <nav className="bailHearingsIndex" aria-label="Sexual offence sections">
              {sexualSections.map((section, index) => (
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
          {sexualSections.map((section, index) => (
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

export default SexualOffences;
