import React, { useRef, useState } from 'react';
import cbcImage from '../Assets/cbc.jpg';
import lawTimesImage from '../Assets/law_times.svg';
import ottawaCitizenImage from '../Assets/ottawa_citizen.webp';
import '../Styles/Media.css';

const mediaItems = [
  {
    title: 'Human Trafficking',
    description: "RCMP-CBSA investigation began in 2018, trial cancelled after plea deal reached.",
    url: 'https://ici.radio-canada.ca/rci/en/news/2177828/human-trafficking-case-ends-on-significant-disclosure-issue-hamilton-crown-drops-charges',
    image: cbcImage,
  },
  {
    title: 'Pimps Spared Prison',
    description: 'Judge strikes down mandatory minimum sentence for trafficking minors',
    url: 'https://ottawacitizen.com/news/local-news/pimps-spared-prison-judge-strikes-down-mandatory-minimum-sentence-for-trafficking-minors',
    image: ottawaCitizenImage,
  },
  {
    title: 'Judicial Training',
    description: 'Judges to receive human trafficking training.',
    url: 'https://www.lawtimesnews.com/news/general/judges-to-receive-training-on-human-trafficking/324008',
    image: lawTimesImage,
  },
];

function Media() {
  const [orderedItems, setOrderedItems] = useState(mediaItems);
  const [trackOffset, setTrackOffset] = useState(0);
  const [touchDragX, setTouchDragX] = useState(0);
  const [isTouchDragging, setIsTouchDragging] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [pendingDirection, setPendingDirection] = useState<'next' | 'previous' | null>(null);
  const wheelGestureActive = useRef(false);
  const wheelGestureTimeout = useRef<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goNext = () => {
    if (pendingDirection) return;
    setPendingDirection('next');
    setTrackOffset(1);
  };

  const goPrevious = () => {
    if (pendingDirection) return;

    setPendingDirection('previous');
    setTransitionEnabled(false);
    setOrderedItems((items) => [items[items.length - 1], ...items.slice(0, -1)]);
    setTrackOffset(1);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true);
        setTrackOffset(0);
      });
    });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    // Trackpads report horizontal swipes through deltaX. Only capture a
    // predominantly horizontal gesture so ordinary page scrolling still works.
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

    event.preventDefault();
    if (wheelGestureTimeout.current !== null) {
      window.clearTimeout(wheelGestureTimeout.current);
    }

    if (wheelGestureActive.current) {
      wheelGestureTimeout.current = window.setTimeout(() => {
        wheelGestureActive.current = false;
        wheelGestureTimeout.current = null;
      }, 280);
      return;
    }

    wheelGestureActive.current = true;
    wheelGestureTimeout.current = window.setTimeout(() => {
      wheelGestureActive.current = false;
      wheelGestureTimeout.current = null;
    }, 280);

    if (event.deltaX > 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (touch) {
      touchStart.current = { x: touch.clientX, y: touch.clientY };
      setIsTouchDragging(true);
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;
    const touch = event.touches[0];
    if (!touch) return;

    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY)) setTouchDragX(deltaX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    setIsTouchDragging(false);
    setTouchDragX(0);

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    if (deltaX < 0) goNext();
    else goPrevious();
  };

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== 'transform' || !pendingDirection) return;

    if (pendingDirection === 'next') {
      setTransitionEnabled(false);
      setOrderedItems((items) => [...items.slice(1), items[0]]);
      setTrackOffset(0);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setPendingDirection(null);
        });
      });
    } else {
      setPendingDirection(null);
    }
  };

  return (
    <section className="mediaContainer" id="media">
      <div className="mediaTop">
        <div className="mediaLatest">
          <div className="mediaCirclePair" aria-label="Navigate media items">
            <button
              className="mediaCircle"
              type="button"
              aria-label="Previous media item"
              onClick={goPrevious}
              disabled={pendingDirection !== null}
            >
              <svg className="mediaArrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
              </svg>
            </button>
            <button
              className="mediaCircle"
              type="button"
              aria-label="Next media item"
              onClick={goNext}
              disabled={pendingDirection !== null}
            >
              <svg className="mediaArrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" />
              </svg>
            </button>
          </div>
          <span className="mediaLatestTitle">IN THE NEWS</span>
        </div>
      </div>

      <div
        className="mediaCarousel"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="mediaTrack"
          data-offset={trackOffset}
          style={{
            transition: transitionEnabled && !isTouchDragging ? undefined : 'none',
            '--media-drag-offset': `${touchDragX}px`,
          } as React.CSSProperties}
          onTransitionEnd={handleTransitionEnd}
        >
          {orderedItems.map((item, index) => (
            <article className="mediaSlide" key={`${item.title}-${item.description}-${index}`}>
              <div className="mediaCard">
                <a
                  className="mediaSquare"
                  href={item.url ?? 'https://www.google.com'}
                  aria-label={`Read ${item.title}`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundColor: item.image === lawTimesImage ? 'white' : undefined,
                    backgroundSize: item.image === lawTimesImage ? '90% auto' : 'contain',
                  }}
                />
                <div className="mediaCardCopy">
                  <div className="mediaCaseHeading">
                    <span className="mediaCaseKicker">
                      <span className="mediaCaseKickerWhite">INSIGHT</span>
                      <span className="mediaCaseKickerWhite"> | </span>
                      {item.sourceLabel ?? 'ARTICLE'}
                    </span>
                    <span className="mediaCaseTitle">{item.title}</span>
                  </div>
                  <span className="mediaCaseDescription">{item.description}</span>
                  <a className="mediaReadMore" href={item.url ?? 'https://www.google.com'}>READ MORE</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Media;
