import React from 'react';
import '../Styles/Cases.css';

export const cases = [
  {
    name: 'R. v. Morgan',
    citation: '2023 ONSC 6855',
    pdfUrl: 'https://www.canlii.org/en/on/onsc/doc/2023/2023onsc6855/2023onsc6855.pdf',
    description: 'Successfully challenged a police search involving racial profiling, resulting in the exclusion of a firearm discovered on the client. The ruling reinforced the importance of protecting Charter rights against discriminatory policing practices.',
  },
  {
    name: 'R. v. Ellis',
    citation: '2021 ONSC 8155',
    pdfUrl: 'https://www.canlii.org/en/on/onsc/doc/2021/2021onsc8155/2021onsc8155.pdf',
    description: "Successfully challenged an unlawful vehicle search that led to the discovery of fentanyl in the client's trunk. The court excluded the evidence after finding that the search violated the client's constitutional rights.",
  },
  {
    name: 'R. v. Johnson and Bancroft',
    citation: '2021 ONSC 6441',
    pdfUrl: 'https://www.canlii.org/en/on/onsc/doc/2021/2021onsc6441/2021onsc6441.pdf',
    description: "Secured a full acquittal in a home invasion robbery case by challenging the reliability and credibility of a key Crown witness. The weaknesses in the witness's testimony undermined the prosecution's case.",
  },
  {
    name: 'R. v. McIntyre',
    citation: '2022 ONSC 6966',
    pdfUrl: 'https://www.canlii.org/en/on/onsc/doc/2022/2022onsc6966/2022onsc6966.pdf',
    description: 'Secured a full acquittal on appeal after challenging the unlawful collection of a blood sample. The successful appeal demonstrated the importance of constitutional protections surrounding the collection and use of evidence.',
  },
  {
    name: 'R. v. Ahmed',
    citation: '2019 ONSC 4822',
    pdfUrl: 'https://www.canlii.org/en/on/onsc/doc/2019/2019onsc4822/2019onsc4822.pdf',
    description: 'Successfully challenged the constitutionality of a mandatory minimum sentence for human trafficking. The court struck down the sentencing provision, reinforcing the protection against cruel and unusual punishment under the Canadian Charter.',
  },
  {
    name: 'R. v. Madeley',
    citation: '2016 ONCJ 108',
    pdfUrl: 'https://www.canlii.org/en/on/oncj/doc/2016/2016oncj108/2016oncj108.pdf',
    description: 'Successfully challenged the constitutionality of the mandatory victim surcharge imposed on convicted individuals. The court struck down the requirement, recognizing the disproportionate financial burden it could place on vulnerable offenders.',
  },
  {
    name: 'R. v. DaSilva Smith',
    citation: '2021 ONSC 5521',
    pdfUrl: 'https://www.canlii.org/en/on/onsc/doc/2021/2021onsc5521/2021onsc5521.pdf',
    description: 'Secured a full acquittal for a client facing serious charges of attempted murder and aggravated assault. The successful defence resulted in the client being cleared of both charges, avoiding the severe consequences associated with convictions for violent offences.',
  },
];
 
function Cases() {

  return (
    <div className="casesContainer" id="cases">
      <div className="casesTopSpacer">
        <div className="casesSpacerBlock" aria-hidden="true" />
        <div className="casesHeading">
          <h2 className="casesHeader">Our Firm's Performance</h2>
          <h2 className="casesSubheader">
            Criminal Defence with Proven Results
          </h2>
        </div>
      </div>
      <div className="casesLeft" />
      <div className="casesRight">
        {cases.map((caseItem) => (
          <article className="casesPeriod" key={caseItem.name}>
            <h3 className="casesPeriodHeader">{caseItem.name}</h3>
            <p className="casesPeriodText">{caseItem.description}</p>
            <a className="casesPeriodCitation" href={caseItem.pdfUrl}>{caseItem.citation}</a>
            {/* <a className="casesReadMore" href="#contact">
              READ MORE
            </a> */}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Cases;
