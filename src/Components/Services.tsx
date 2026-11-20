import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Services.css';

const services = [
  {
    title: 'Bail Hearings',
    description: 'Strong representation to help secure your release while you await trial.',
  },
  {
    title: 'Criminal Appeals',
    description: 'Challenging convictions and sentences with careful, thorough legal argument.',
  },
  {
    title: 'Criminal Trials',
    description: 'Skilled courtroom advocacy to defend your rights from start to verdict.',
  },
  {
    title: 'Violent Offences',
    description: 'Defending assault and related charges with a strategic, careful approach.',
  },
  {
    title: 'Sexual Offences',
    description: 'Discreet, respectful defence that protects your rights and reputation.',
  },
  {
    title: 'Drug Offences',
    description: 'Defending possession, trafficking, and related charges with clear guidance.',
  },
];

function Services() {
  const servicesListRef = useRef<HTMLUListElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const list = servicesListRef.current;
    if (!list) return;

    if (!('IntersectionObserver' in window)) {
      setVisibleItems(services.map((_, index) => index));
      return;
    }

    const items = Array.from(list.querySelectorAll<HTMLLIElement>('li[data-service-index]'));
    const isMobile = window.matchMedia('(max-width: 632px)').matches;
    const timeoutIds: number[] = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        observer.unobserve(entry.target);
        const triggeredItems = isMobile ? [entry.target as HTMLLIElement] : items;

        triggeredItems.forEach((item) => {
          const index = Number(item.dataset.serviceIndex);
          const timeoutId = window.setTimeout(() => {
            setVisibleItems((current) => current.includes(index) ? current : [...current, index]);
          }, isMobile ? 0 : index * 90);
          timeoutIds.push(timeoutId);
        });
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

    if (isMobile) {
      items.forEach((item) => observer.observe(item));
    } else {
      observer.observe(list);
    }

    return () => {
      observer.disconnect();
      timeoutIds.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <section className="servicesContainer" id="services">
      <div className="servicesContent">
        <h1 className="servicesTextTitle">Our Services</h1>
        <ul className="servicesList" ref={servicesListRef}>
          {services.map((service, index) => (
            <li
              key={service.title}
              data-service-index={index}
              className={visibleItems.includes(index) ? 'servicesListItem--visible' : ''}
            >
              <span className="servicesNumber">{String(index + 1).padStart(2, '0')}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
