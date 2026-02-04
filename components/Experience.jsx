import Link from 'next/link';
import Technologies from './Technologies';
const Experience = (props) => {
    const experience = props.experience
    return (
        <div className="group user-card flex-col w-full my-2 ">
            <div className="text-gray-400 text-md pl-2 pt-3 w-44 lg:text-center  ">
                {experience?.duration}
            </div>
            <div className=" flex flex-col text-sm text-gray-100 pl-2  w-full ">
            <Link href={experience?.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${experience?.lastPosition} details`}>
                <h3 className="flex flex-row text-lg font-bold font-display group-hover:text-teal-300 mt-2 items-center transition-colors duration-200">{experience?.lastPosition}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                </h3>

                {experience?.positions.map((position, index) => (
                     <div key={index} className="text-gray-400">{position} </div>

                ))}
                </Link>
                <div className="my-2 pb-2 max-w-sm">
                    {experience.responsibilities}
                </div>


                <Technologies technologies={experience.technologies} />
            </div>
      </div>
    );

    
}

export default Experience;