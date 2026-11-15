import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Motto.css';

function getStepProgress(progress: number, step: number) {
  return Math.min(Math.max(progress * 4 - step, 0), 1);
}

function Motto() {
  const [revealProgress, setRevealProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const diagramRef = useRef<SVGSVGElement | null>(null);

  const displayedProgress = isComplete ? 1 : revealProgress;
  const topCircleProgress = getStepProgress(displayedProgress, 0);
  const leftCircleProgress = getStepProgress(displayedProgress, 1);
  const rightCircleProgress = getStepProgress(displayedProgress, 2);
  const fillProgress = getStepProgress(displayedProgress, 3);

  useEffect(() => {
    const updateRevealProgress = () => {
      const diagram = diagramRef.current;
      if (!diagram) return;

      const bounds = diagram.getBoundingClientRect();
      const progress = Math.min(
        Math.max((window.innerHeight - bounds.top) / bounds.height, 0),
        1
      );

      if (progress >= 1) setIsComplete(true);
      setRevealProgress(progress);
    };

    window.addEventListener('scroll', updateRevealProgress, { passive: true });
    window.addEventListener('resize', updateRevealProgress);
    updateRevealProgress();

    return () => {
      window.removeEventListener('scroll', updateRevealProgress);
      window.removeEventListener('resize', updateRevealProgress);
    };
  }, []);

  return (
    <section className="mottoContainer" id="motto">
      <div className="mottoLeftColumn">
        <p className="mottoIntroText">
          We deliver results through proven experience, specialized expertise, and a <em>standard</em> of excellence that earns lasting client trust.
        </p>
      </div>
      <div className="mottoRightColumn">
        <div className="mottoDiagramContainer">
          <svg ref={diagramRef} className="mottoDiagram" viewBox="-4 -4 76 72.25" role="img" aria-label="Three overlapping circles with their shared center filled beige">
            <defs>
              <clipPath id="mottoTopCircle">
                <circle cx="34" cy="20" r="20" />
              </clipPath>
              <clipPath id="mottoLeftCircle">
                <circle cx="20" cy="44.25" r="20" />
              </clipPath>
              <clipPath id="mottoRightCircle">
                <circle cx="48" cy="44.25" r="20" />
              </clipPath>
            </defs>
            <g clipPath="url(#mottoTopCircle)">
              <g clipPath="url(#mottoLeftCircle)">
                <rect className="mottoTripleIntersection" width="68" height="64.25" opacity={fillProgress} clipPath="url(#mottoRightCircle)" />
              </g>
            </g>
            <g className="mottoCircle">
              <circle cx="34" cy="20" r="20" opacity={topCircleProgress} />
              <circle cx="20" cy="44.25" r="20" opacity={leftCircleProgress} />
              <circle cx="48" cy="44.25" r="20" opacity={rightCircleProgress} />
            </g>
            <g className="mottoCircleLabel">
              <text x="34" y="15" opacity={topCircleProgress}>Expertise</text>
              <text x="15" y="45.25" opacity={leftCircleProgress}>Experience</text>
              <text x="53" y="45.25" opacity={rightCircleProgress}>Excellence</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Motto;
