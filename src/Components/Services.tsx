import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Services.css';

const serviceDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const serviceTitles = [
  'Bail Hearings',
  'Criminal Appeals',
  'Criminal Trials',
  'Violent Offenses',
  'Sexual Offences',
  'Drug Offenses',
  'Violent Offenses',
  'Sexual Offences',
  'Drug Offenses',
];

function Services() {
  const servicesListRef = useRef<HTMLUListElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const list = servicesListRef.current;
    if (!list) return;

    if (!('IntersectionObserver' in window)) {
      setVisibleItems(serviceTitles.map((_, index) => index));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Number((entry.target as HTMLLIElement).dataset.serviceIndex);
        setVisibleItems((current) => current.includes(index) ? current : [...current, index]);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

    const items = list.querySelectorAll('li[data-service-index]');
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="servicesContainer" id="services">
      <div className="servicesContent">
        <h1 className="servicesTextTitle">Our Services</h1>
        <div className="servicesStatusQuoPreview">
          <h2 className="servicesComparisonHeading">Status Quo</h2>
          <ul>
            {serviceTitles.map((title, index) => (
              <li key={`status-quo-${title}-${index}`}>
                <h3>{title}</h3>
                <p>{serviceDescription}</p>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="servicesComparisonHeading servicesStaggeredHeading">Staggered / Zigzag</h2>
        <ul className="servicesList" ref={servicesListRef}>
          {serviceTitles.map((title, index) => (
            <li
              key={`${title}-${index}`}
              data-service-index={index}
              className={visibleItems.includes(index) ? 'servicesListItem--visible' : ''}
            >
              <span className="servicesNumber">{String(index + 1).padStart(2, '0')}</span>
              <h2>{title}</h2>
              <p>{serviceDescription}</p>
            </li>
          ))}
        </ul>
        <div className="servicesNumberingPreview">
          <h2 className="servicesPreviewHeading">Alternative Design: Oversized Numbering</h2>
          <ol className="servicesPreviewList">
            {serviceTitles.map((title, index) => (
              <li key={`numbered-${title}-${index}`}>
                <span className="servicesPreviewNumber">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{serviceDescription}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Services;
