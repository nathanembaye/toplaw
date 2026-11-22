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
      "Sexual offences are criminal charges involving conduct prohibited by the sexual offence provisions of Canada's Criminal Code. These allegations can involve a wide range of circumstances, from unwanted sexual contact to offences involving sexual exploitation or sexual activity with minors.",
      'Common sexual offences under Canadian law include:',
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
      'The legal elements and potential penalties vary depending on the specific offence, the circumstances of the allegations, and the applicable provisions of the Criminal Code.',
      "Sexual offence allegations can have significant consequences for an accused person's liberty, reputation, employment, and personal relationships. However, an allegation or criminal charge does not establish guilt. The Crown must prove the essential elements of the offence beyond a reasonable doubt.",
      "TOP Law provides criminal defence representation for individuals facing sexual offence allegations in Toronto and throughout Ontario, emphasizing careful preparation, confidentiality, and the protection of clients' legal rights.",
    ],
  },
  {
    id: 'bail-process',
    indexTitle: 'Sexual Assault Charges',
    heading: 'What constitutes sexual assault in Canada?',
    paragraphs: [
      'Sexual assault is a criminal offence involving an assault of a sexual nature. Canadian law examines the circumstances of the alleged contact, including whether the complainant voluntarily agreed to the sexual activity in question.',
      'Consent is a central consideration in many sexual assault prosecutions. Under the Criminal Code, consent means the voluntary agreement of the complainant to engage in the sexual activity in question.',
      'The law also identifies circumstances in which consent is absent or cannot be legally obtained, including certain situations involving incapacity, abuse of authority, or individuals below the applicable age of consent.',
      "Sexual assault allegations may involve disputed accounts of events, electronic communications, witness testimony, medical evidence, and questions concerning the accused person's knowledge or beliefs.",
      'The Criminal Code imposes specific legal restrictions on arguments concerning consent and mistaken belief in communicated consent. These issues require careful examination of the evidence and applicable law.',
      'A criminal defence lawyer can assess the allegations, explain the relevant legal principles, and develop a defence strategy based on the particular circumstances of the case.',
    ],
  },
  {
    id: 'bail-conditions',
    indexTitle: 'Evidence and Defences',
    heading: 'How are sexual offence allegations defended in Ontario?',
    paragraphs: [
      'Defending a sexual offence charge requires a detailed assessment of the allegations, the available evidence, and the legal elements the Crown must establish.',
      'Sexual offence prosecutions frequently involve questions of credibility and reliability, particularly where the accounts of the individuals involved differ.',
      'Depending on the circumstances, relevant evidentiary and legal issues may include:',
    ],
    bullets: [
      'Inconsistencies in witness statements or testimony',
      'The reliability of identification evidence',
      'Electronic messages, photographs, and digital communications',
      'The interpretation of medical or forensic evidence',
      'Whether the Crown can establish the required elements of the offence',
      'The application of Canadian consent laws',
      'Potential violations of constitutional rights during the investigation',
    ],
    trailingParagraphs: [
      "Canadian criminal law also contains specific rules governing the admissibility of certain evidence in sexual offence proceedings. These include restrictions concerning a complainant's sexual history and procedures governing some records containing personal information.",
      'Such evidence cannot automatically be introduced at trial. Its admissibility may require a separate application and judicial determination.',
      'A criminal defence lawyer can review the disclosure, identify relevant evidentiary issues, and advance legally available arguments while ensuring that the accused receives a fair trial.',
    ],
  },
  {
    id: 'bail-refusals',
    indexTitle: 'Penalties and Consequences',
    heading: 'What are the penalties for sexual offences in Ontario?',
    paragraphs: [
      'The penalties for sexual offences in Canada depend on the specific charge, the circumstances of the offence, and the applicable sentencing provisions.',
      'Some sexual offences carry substantial maximum penalties, while certain offences or circumstances may engage statutory minimum sentences. The applicability and constitutional validity of particular sentencing provisions must be assessed in light of current law.',
      "When determining a sentence, courts consider factors such as the seriousness of the offence, the harm caused, the offender's circumstances, and relevant aggravating or mitigating factors.",
      'A conviction for a sexual offence may also result in consequences beyond imprisonment or other criminal penalties, including:',
    ],
    bullets: [
      'A criminal record',
      'Sex offender registration obligations where legally applicable',
      'Restrictions on employment or professional licensing',
      'Travel and immigration complications',
      'No-contact or other court-ordered restrictions',
      'Long-term reputational and personal consequences',
    ],
    trailingParagraphs: [
      "Not every sexual offence conviction results in the same orders or restrictions. The consequences depend on the offence, the individual's circumstances, and the applicable legislation.",
      'A criminal defence lawyer can explain the potential penalties and collateral consequences associated with a particular charge and advise on the available legal options.',
    ],
  },
  {
    id: 'bail-representation',
    indexTitle: 'Legal Representation',
    heading: 'How can a criminal defence lawyer help with sexual offence charges?',
    paragraphs: [
      'Sexual offence allegations require careful legal analysis, sensitivity to the circumstances, and a thorough understanding of the evidentiary rules governing these prosecutions.',
      'Early legal representation can help an accused person understand the allegations, preserve relevant evidence, and make informed decisions throughout the criminal process.',
      'A criminal defence lawyer may assist by:',
    ],
    bullets: [
      'Reviewing Crown disclosure and investigative materials',
      'Examining witness statements and digital communications',
      'Assessing credibility and reliability issues',
      'Identifying potential legal and constitutional defences',
      'Addressing the admissibility of evidence',
      'Preparing and conducting cross-examinations',
      'Representing the accused at bail hearings',
      'Negotiating with the Crown where appropriate',
      'Preparing for and conducting criminal trials',
      'Advising on sentencing and potential appeals',
    ],
    trailingParagraphs: [
      'Every sexual offence prosecution presents distinct legal, factual, and evidentiary considerations. An effective defence strategy requires detailed preparation and an individualized assessment of the allegations.',
      "TOP Law represents individuals facing sexual criminal charges in Toronto and Ontario, providing discreet legal guidance, focused courtroom advocacy, and dedicated attention to each client's defence.",
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
              Discreet, strategic criminal defence for serious allegations involving sexual misconduct.
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
