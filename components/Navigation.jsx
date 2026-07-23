"use client"

import { useEffect, useRef, useState } from 'react';

const SECTIONS = ['about-ID', 'experience-ID', 'project-ID'];
const LABELS = {
  'about-ID': 'ABOUT',
  'experience-ID': 'EXPERIENCE',
  'project-ID': 'PROJECT',
};

const Navigation = () => {
  const lineDisabled = "w-6 mr-5"
  const lineEnabled = "w-20 mr-0 bg-teal-300"
  const textDisabled = ""
  const textEnabled = "text-teal-300 pl-2"
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  // Raised while a click-driven smooth scroll is running, so the scroll spy
  // cannot overwrite the section the user just picked.
  const scrollLock = useRef(false);
  const unlockTimeout = useRef(null);

  useEffect(() => {
    const mainPage = document.getElementById('main-page');
    if (!mainPage) {
      return;
    }

    let frame = null;

    const syncActiveSection = () => {
      frame = null;
      if (scrollLock.current) {
        return;
      }
      // Bottom of the scroll container: the last section can never reach the
      // threshold line, so pin it explicitly.
      if (mainPage.scrollTop + mainPage.clientHeight >= mainPage.scrollHeight - 2) {
        setActiveSection(SECTIONS[SECTIONS.length - 1]);
        return;
      }
      const line = mainPage.getBoundingClientRect().top + window.innerHeight * 0.30;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const handleScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(syncActiveSection);
      }
    };

    const releaseLock = () => {
      scrollLock.current = false;
    };

    syncActiveSection();
    mainPage.addEventListener('scroll', handleScroll, { passive: true });
    mainPage.addEventListener('scrollend', releaseLock);

    return () => {
      mainPage.removeEventListener('scroll', handleScroll);
      mainPage.removeEventListener('scrollend', releaseLock);
      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
      if (unlockTimeout.current) {
        clearTimeout(unlockTimeout.current);
      }
    };
  }, []);

  const scrollToLink = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }
    scrollLock.current = true;
    if (unlockTimeout.current) {
      clearTimeout(unlockTimeout.current);
    }
    // Fallback for browsers without 'scrollend'.
    unlockTimeout.current = setTimeout(() => {
      scrollLock.current = false;
    }, 800);

    setActiveSection(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', '#' + targetId);
  };

  return (
    <nav className='lg:self-end  w-fit'>
      <div className="flex flex-col space-y-5 pl-3 text-xs font-bold tracking-wide text-slate-400">

        {SECTIONS.map((id) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              className="group w-fit scroll-smooth"
              href={'#' + id}
              onClick={(event) => scrollToLink(event, id)}
            >
              <div className="flex flex-row items-center h-6 w-fit pr-7 text-center">
                <div className={(isActive ? lineEnabled : lineDisabled) + " nav-line bg-slate-400  group-hover:w-20 group-hover:bg-teal-300 group-hover:mr-0"}></div>
                <div className={(isActive ? textEnabled : textDisabled) + " group-hover:text-teal-300 group-hover:pl-2"}>{LABELS[id]}</div>
              </div>
            </a>
          );
        })}

      </div>
    </nav>
  );
};

export default Navigation;
