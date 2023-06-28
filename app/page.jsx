import ProfileCard from "@components/ProfileCard";
import Navigation from "@components/Navigation";
import Project from "@components/Project";
import Experience from "@components/Experience";
import Credits from "@components/Credits";
import About from "@components/About";
import Links from "@components/Links";

import projectJSON from "./projects.json"
import profileJSON from "./profile.json"
import experienceJSON from "./experience.json"


export default async function Home()
  {
    const projects=projectJSON
    const profile=profileJSON
    const experiences = experienceJSON

    return(
      <div id="main-page" className="grid grid-rows-2 px-4 overflow-auto h-full w-full lg:grid-cols-2 lg:gap-4">

        <div className="min-h-fit z-50 flex flex-col h-fit pt-10  lg:max-h-screen lg:pl-20  lg:pt-20  lg:h-screen lg:sticky lg:top-0  ">
          
          <span className="2xl:w-2/3 2xl:self-end">
          < ProfileCard user={profile} ></ProfileCard>
          </span>
          <span className="2xl:w-2/3 2xl:self-end lg:mt-10 sr-only lg:not-sr-only">
          <Navigation/>
          </span>

          <span className=" flex 2xl:w-2/3 2xl:self-end mt-10 lg:h-full ">
          <Links links={profile.links}/>
          </span>
        </div>
        
        <div className="z-10 mb-20 flex flex-col scroll-smooth min-h-fit scroll-ml-6 snap-start">
          <span id="about-ID" className="lg:pt-20"></span>
          <content >
            <div class="mobile-nav z-40 ">about</div> 
            <About></About>
          </content>

          <span className="mt-5"/>
          <content className="mt-10 space-y-8"  id="experience-ID">
            <div class="mobile-nav z-40 ">experience</div>
            {experiences?.map((experience, index) => (
                        <Experience id={index} experience={experience}/>

            ))}
          </content>
        
          <content className="mt-10 space-y-8" id="project-ID">
              <div class="mobile-nav z-40">projects</div>
              {projects?.map((project, index) => (
                          <Project id={index} project={project}/>

              ))}
            <span className="mt-5"/>
            <Credits/>
            <span className="p-16"/>
          </content>
      </div>
    </div>

  );
}