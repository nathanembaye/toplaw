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
        <ul className="servicesList" ref={servicesListRef}>
          {serviceTitles.map((title, index) => (
            <li
              key={`${title}-${index}`}
              data-service-index={index}
              className={visibleItems.includes(index) ? 'servicesListItem--visible' : ''}
            >
              <h2>{title}</h2>
              <p>{serviceDescription}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
