const Experience = (props) => {
    const experience = props.experience
    return (
        <div className="group user-card flex-col w-full my-2 ">
            <div className="text-gray-400 text-md pl-2 pt-3 w-40 lg:text-center  ">
                {experience?.duration}
            </div>
            <div className=" flex flex-col text-sm text-gray-100 pl-2  w-full   ">
                <div className="flex flex-row text-lg font-bold  group-hover:text-teal-400 mt-2 items-center">{experience?.lastPosition}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4 group-hover:-translate-y-2 duration-75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                </div>
                {experience?.positions.map((position, index) => (
                     <div key={index} className="text-gray-400">{position} </div>

                ))}

                <div className="my-2 pb-2 max-w-sm">
                    {experience.responsibilities}
                </div>
                {/* in case there were software involved */}
                <div className=" flex flex-wrap space-x-2  my-2 max-w-md  border-slate-100">
                    {experience?.technologies.map((tech, index) => (
                                <img id={index} className="h-5 md:w-fit md:h-fit" src={tech.logo} />
                        ))}
                </div>
            </div>
      </div>
    );

    
}

export default Experience;