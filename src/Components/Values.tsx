import React, { useEffect, useState } from 'react';
import '../Styles/Values.css';

function Values() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [rowProgress, setRowProgress] = useState([0, 0, 0]);
  const [rowTextWidths, setRowTextWidths] = useState([0, 0, 0]);
  const rowTextShifts = [
    -rowTextWidths[0] + rowProgress[0] * (rowTextWidths[0] - viewportWidth * 0.06),
    rowTextWidths[1] - rowProgress[1] * (rowTextWidths[1] - viewportWidth * 0.06),
    -rowTextWidths[2] + rowProgress[2] * (rowTextWidths[2] - viewportWidth * 0.06),
  ];

  useEffect(() => {
    const updateScrollShift = () => {
      const section = document.getElementById('values');
      if (!section) return;

      setViewportWidth(window.innerWidth);
      const rows = Array.from(section.querySelectorAll('.valuesSecondaryLabel'));
      const rowProgressValues = rows.map((row) => {
        const rowBounds = row.getBoundingClientRect();
        const revealDistance = (window.innerHeight + rowBounds.height) / 2;
        return Math.min(
          Math.max((window.innerHeight - rowBounds.top) / revealDistance, 0),
          1
        );
      });
      const rowTextWidthValues = rows.map((row) => {
        const text = row.querySelector('.valuesItemTextContent');
        return text ? text.scrollWidth : 0;
      });
      setRowProgress(rowProgressValues);
      setRowTextWidths(rowTextWidthValues);
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
      <div className="valuesIdeas">
        <div className="valuesSecondaryLabel" style={{ transform: `translateX(${rowProgress[0] * viewportWidth * 0.06}px)` }}>
          <span className="valuesItemText" style={{ transform: `translateX(${rowTextShifts[0]}px)` }}><span className="valuesItemTextContent">BOLD IDEAS</span></span>
          <span className="valuesItemBlock" style={{ left: `calc(${rowTextWidths[0]}px + ${rowTextShifts[0]}px)` }} aria-hidden="true" />
        </div>
        <div className="valuesSecondaryLabel" style={{ transform: `translateX(${-rowProgress[1] * viewportWidth * 0.06}px)` }}>
          <span className="valuesItemText valuesItemText--right" style={{ transform: `translateX(${rowTextShifts[1]}px)` }}><span className="valuesItemTextContent">CONVERGING</span></span>
          <span className="valuesItemBlock valuesItemBlock--left" style={{ right: `calc(${rowTextWidths[1]}px - ${rowTextShifts[1]}px)` }} aria-hidden="true" />
        </div>
        <div className="valuesSecondaryLabel" style={{ transform: `translateX(${rowProgress[2] * viewportWidth * 0.06}px)` }}>
          <span className="valuesItemText" style={{ transform: `translateX(${rowTextShifts[2]}px)` }}><span className="valuesItemTextContent">RELENTLESS</span></span>
          <span className="valuesItemBlock" style={{ left: `calc(${rowTextWidths[2]}px + ${rowTextShifts[2]}px)` }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Values;
