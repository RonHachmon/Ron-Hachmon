"use client"

import { useEffect, useState } from 'react';

const Navigation = () => {
  const RANGE_FROM_MIDDLE=200
  const lineDisabled="w-6 mr-5"
  const lineEnabled="w-20 mr-0 bg-white"
  const textDisabled=""
  const textEnabled="text-white pl-2"
  const [aboutEnabled, setAboutEnabled] = useState(true);
  const [projectEnabled, setProjectEnabled] = useState(false);
  const [experienceEnabled, setExperienceEnabled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if(elementVisibile('about-ID'))
      {
        setAboutActive()
        return;
      }
      if(elementCloseToTop('experience-ID'))
      {
        setExperienceActive()
        return;
      }
      if(elementCloseToTop('project-ID'))
      {
        setProjectActive()
        return;
      }
    };
    const mainPage = document.getElementById('main-page');    
    if(mainPage)
    {
      mainPage.addEventListener('scroll', handleScroll);
    }
  

    return () => {
      if(mainPage)
      {
        mainPage.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  const setAboutActive = () => {
    setAboutEnabled(true)
    setProjectEnabled(false)
    setExperienceEnabled(false)
  }
  const setExperienceActive = () => {
    setAboutEnabled(false)
    setExperienceEnabled(true)
    setProjectEnabled(false)

  }
  const setProjectActive = () => {
    setAboutEnabled(false)
    setExperienceEnabled(false)
    setProjectEnabled(true)
  }
  const elementVisibile = (element) => {
    const foundElement = document.getElementById(element);
    if(foundElement)
    {
      const elementRect = foundElement.getBoundingClientRect();
      if(elementRect.top>0)
      {
        return true;
      }
    }
    return false;
  }
  const elementCloseToTop= (element) => {
    const windowHeight = window.innerHeight;
    const foundElement = document.getElementById(element);
    if(foundElement)
    {
      const elementRect = foundElement.getBoundingClientRect();
      const topThreshold = windowHeight*0.30; // Adjust this threshold as needed

    
      const elementTopPosition = elementRect.top;
    
      const isCloseToTop = elementTopPosition <= topThreshold;
    
      return isCloseToTop && elementRect.top>0;
    }
    return false
  }
  const elementCloseToMiddle = (element) => {
    const windowHeight = window.innerHeight/2;
    const foundElement = document.getElementById(element);
    if(foundElement)
    {
      const elementRect = foundElement.getBoundingClientRect();
      console.log(element +" "+elementRect.top +" windown middle "+ windowHeight )
      if(elementRect.top>0 && (windowHeight-elementRect.top)<RANGE_FROM_MIDDLE)
      {
        return true;
      }
    }

    return false;
  }

    const scrollToLink = (targetId) => {
      const targetElement = document.getElementById(targetId);
      if(targetElement)
      {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        if(targetId==='about-ID')
        {
          setAboutActive()
        }
        if(targetId==='experience-ID')
        {
          setExperienceActive()
        }
        if(targetId==='project-ID')
        {
          setProjectActive()
        }
      }
    };
  

    return (
      <nav className='lg:self-end  w-fit'>
      <div className="flex flex-col space-y-5 pl-3 text-xs font-bold tracking-wide text-slate-400" >

      <a className="group w-fit scroll-smooth" href="#about" >

        <div className=" flex flex-row items-center h-6 w-fit pr-7 text-center ">
            <div  className={(aboutEnabled? lineEnabled:lineDisabled) + " nav-line bg-slate-400  group-hover:w-20 group-hover:bg-white group-hover:mr-0" }  onClick={()=>scrollToLink('about-ID')} ></div>
            <div className={ (aboutEnabled? textEnabled:textDisabled)+ " group-hover:text-white group-hover:pl-2"} onClick={()=>scrollToLink('about-ID')}>ABOUT</div>
        </div>

      </a>

      <a className="group w-fit " href="#experience">

          <div className="flex flex-row items-center h-6 w-fit pr-7 text-center">
          <div  className={(experienceEnabled? lineEnabled:lineDisabled) + " nav-line bg-slate-400  group-hover:w-20 group-hover:bg-white group-hover:mr-0" } onClick={()=>scrollToLink('experience-ID')} ></div>
              <div className={ (experienceEnabled? textEnabled:textDisabled)+ " group-hover:text-white group-hover:pl-2"} onClick={()=>scrollToLink('experience-ID')}>EXPERIENCE</div>
          </div>

      </a>

      <a className="group w-fit"  href="#project">

        <div className="group flex flex-row items-center h-6 w-fit pr-7 text-center">
        <div  className={(projectEnabled? lineEnabled:lineDisabled) + " nav-line bg-slate-400  group-hover:w-20 group-hover:bg-white group-hover:mr-0" } onClick={()=>scrollToLink('project-ID')} ></div>
            <div className={ (projectEnabled? textEnabled:textDisabled)+ " group-hover:text-white group-hover:pl-2"}  onClick={()=>scrollToLink('project-ID')}>PROJECT</div>
        </div>

      </a>

      </div>
      </nav>
    );
  };
  
  export default Navigation;
  