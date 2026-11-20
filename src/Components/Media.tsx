import React, { useRef, useState } from 'react';
import carouselImage from '../Assets/carousel_1.jpg';
import carouselImage2 from '../Assets/carousel_2.jpg';
import carouselImage3 from '../Assets/carousel_3.jpg';
import carouselImage4 from '../Assets/carousel_4.jpg';
import '../Styles/Media.css';

const mediaItems = [
  {
    title: 'Human trafficking case ends on ‘significant disclosure issue,’ Hamilton Crown drops charges',
    sourceLabel: 'CBC News',
    description: "RCMP-CBSA investigation began in 2018, trial cancelled after plea deal reached.",
    url: 'https://ici.radio-canada.ca/rci/en/news/2177828/human-trafficking-case-ends-on-significant-disclosure-issue-hamilton-crown-drops-charges',
    image: carouselImage,
  },
  {
    title: 'Pimps spared prison, judge strikes down mandatory minimum sentence for trafficking minors',
    sourceLabel: 'Ottawa Citizen',
    description: 'Judge strikes down mandatory minimum sentence for trafficking minors',
    url: 'https://ottawacitizen.com/news/local-news/pimps-spared-prison-judge-strikes-down-mandatory-minimum-sentence-for-trafficking-minors',
    image: carouselImage2,
  },
  {
    title: 'Judges to receive training on human trafficking',
    sourceLabel: 'Law Times',
    description: 'Judges to receive human trafficking training.',
    url: 'https://www.lawtimesnews.com/news/general/judges-to-receive-training-on-human-trafficking/324008',
    image: carouselImage3,
  },
  {
    title: 'Panel speaker at the 12th Annual Recent Call Conference',
    sourceLabel: 'Criminal Lawyers’ Association',
    description: '12th Annual Criminal Lawyers Association Conference',
    url: 'https://criminallawyers.ca/events/12th-annual-recent-call-conference/',
    image: carouselImage4,
  },
];

function Media() {
  const [orderedItems, setOrderedItems] = useState(mediaItems);
  const [trackOffset, setTrackOffset] = useState(0);
  const [touchDragX, setTouchDragX] = useState(0);
  const [isTouchDragging, setIsTouchDragging] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [pendingDirection, setPendingDirection] = useState<'next' | 'previous' | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const wheelGestureActive = useRef(false);
  const wheelGestureTimeout = useRef<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const scrollNativeCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const firstSlide = carousel?.querySelector<HTMLElement>('.mediaSlide');
    const track = carousel?.querySelector<HTMLElement>('.mediaTrack');
    if (!carousel || !firstSlide || !track) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = firstSlide.getBoundingClientRect().width + gap;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    let nextScroll = carousel.scrollLeft + direction * step;

    if (direction > 0 && carousel.scrollLeft >= maxScroll - 2) nextScroll = 0;
    if (direction < 0 && carousel.scrollLeft <= 2) nextScroll = maxScroll;

    carousel.scrollTo({ left: nextScroll, behavior: 'smooth' });
  };

  const goNext = () => {
    if (window.matchMedia('(max-width: 990px)').matches) {
      scrollNativeCarousel(1);
      return;
    }
    if (pendingDirection) return;
    setPendingDirection('next');
    setTrackOffset(1);
  };

  const goPrevious = () => {
    if (window.matchMedia('(max-width: 990px)').matches) {
      scrollNativeCarousel(-1);
      return;
    }
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
    if (window.matchMedia('(max-width: 990px)').matches) return;
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
    if (window.matchMedia('(max-width: 990px)').matches) return;
    const touch = event.touches[0];
    if (touch) {
      touchStart.current = { x: touch.clientX, y: touch.clientY };
      setIsTouchDragging(true);
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (window.matchMedia('(max-width: 990px)').matches) return;
    if (!touchStart.current) return;
    const touch = event.touches[0];
    if (!touch) return;

    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    if (Math.abs(deltaX) > Math.abs(deltaY)) setTouchDragX(deltaX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (window.matchMedia('(max-width: 990px)').matches) return;
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
          <span className="mediaLatestTitle">In the press</span>
        </div>
      </div>

      <div
        ref={carouselRef}
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
              <a className="mediaCardLink" href={item.url ?? 'https://www.google.com'} aria-label={`Read ${item.title}`}>
                <div className="mediaCard">
                  <div className="mediaSquare">
                    <img
                      className="mediaSquareImage"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="mediaCardCopy">
                    <div className="mediaCaseHeading">
                      <span className="mediaCaseKicker">
                        {item.sourceLabel}
                      </span>
                      <span className="mediaCaseTitle">{item.title}</span>
                    </div>
                    <span className="mediaReadMore">
                      Read article
                      <svg className="mediaExternalArrow" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 12 12 4M5 4h7v7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Media;
