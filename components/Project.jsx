import Image from "next/image";
import Link from 'next/link';
export const getJsonData = async (fileName) => {
    const res = await fetch(`http://127.0.0.1:3000/api?file=${fileName}`);
    const repo = await res.json()
    return repo;
}

const Project = (props) => {
    const project = props.project
    return (
        <div className=" -z-10 group user-card flex-col-reverse my-2 w-full ">
            <div className="w-96 lg:w-40 p-2">
            <Image
                src={project?.image}
                alt="profile picture"
                width={200}
                height={48}
                className="lg:hover:scale-[3.0] -z-10 rounded border-2  border-teal-400/30 transition group-hover:border-teal-400/70 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
            </div>

            <div className=" flex flex-col text-sm text-gray-100 pl-2   w-full">
            <Link href={project?.githubLink} target="_blank" rel="noopener noreferrer">
                <div className="flex flex-row text-lg font-bold group-hover:text-teal-400 mt-2 items-center">
                    {project?.title}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4 group-hover:-translate-y-2 duration-75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </Link>

       
                <div className="mt-2 lg:max-w-xs text-slate-400">
                    {project?.description}
                </div>

                {/* <div className="text-md mt-2 font-bold">Technologies:</div> */}
                <div className=" flex flex-wrap space-x-2  my-3 max-w-md  border-slate-100">
                    {project?.technologies.map((tech, index) => (
                         <div id={index} className="text-center py-1 text-sm px-3 w-fit h-fit rounded-full bg-teal-400/10 text-teal-300" >{tech.name}</div>
                            // <img id={index} className="h-5 md:w-fit md:h-fit" src={tech.logo} />
                    ))}
                </div>
            </div>
      </div>
    );

    
}

export default Project;