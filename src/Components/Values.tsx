import React, { useEffect, useState } from 'react';
import '../Styles/Values.css';

function getIdeaColor(progress: number, index: number) {
  const segmentProgress = progress * 3;
  const activeSegment = Math.min(Math.floor(segmentProgress), 2);
  const segmentFraction = segmentProgress - activeSegment;
  let intensity = 0;

  if (index === activeSegment) intensity = segmentFraction;
  else if (index === activeSegment - 1) intensity = 1 - segmentFraction;

  const base = [242, 241, 237];
  const accent = [220, 203, 179];
  const color = base.map((channel, position) =>
    Math.round(channel + (accent[position] - channel) * intensity)
  );

  return `rgb(${color.join(', ')})`;
}

function Values() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const scrollShift = (scrollProgress - 0.5) * viewportWidth * 0.24;

  useEffect(() => {
    const updateScrollShift = () => {
      const section = document.getElementById('values');
      if (!section) return;

      const sectionBounds = section.getBoundingClientRect();
      const sectionIsVisible = sectionBounds.bottom > 0 && sectionBounds.top < window.innerHeight;
      if (!sectionIsVisible) return;

      const scrollDistance = window.innerHeight + sectionBounds.height;
      const progress = Math.min(
        Math.max((window.innerHeight - sectionBounds.top) / scrollDistance, 0),
        1
      );

      setViewportWidth(window.innerWidth);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollShift, { passive: true });
    window.addEventListener('resize', updateScrollShift);
    updateScrollShift();

    return () => {
      window.removeEventListener('scroll', updateScrollShift);
      window.removeEventListener('resize', updateScrollShift);
    };
  }, []);

  return (
    <section className="valuesContainer" id="values">
      <span className="valuesLineLabel">OUR INVESTMENTS ARE DEFINED BY</span>
      <div className="valuesIdeas">
        <span className="valuesSecondaryLabel" style={{ color: getIdeaColor(scrollProgress, 0), transform: `translateX(${scrollShift}px)` }}>BOLD IDEAS</span>
        <span className="valuesSecondaryLabel" style={{ color: getIdeaColor(scrollProgress, 1), transform: `translateX(${-scrollShift}px)` }}>CONVERGING</span>
        <span className="valuesSecondaryLabel" style={{ color: getIdeaColor(scrollProgress, 2), transform: `translateX(${scrollShift}px)` }}>RELENTLESS</span>
      </div>
    </section>
  );
}

export default Values;
