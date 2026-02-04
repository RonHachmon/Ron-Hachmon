import Image from "next/image";
import Link from 'next/link';
import Technologies from './Technologies';
export const getJsonData = async (fileName) => {
    const res = await fetch(`http://127.0.0.1:3000/api?file=${fileName}`);
    const repo = await res.json()
    return repo;
}

const Project = (props) => {
    const project = props.project
    return (
        <div className="group user-card flex-col-reverse my-2 w-full">
            <div className="w-96 lg:w-40 p-2">
            <Image
                src={project?.image}
                alt={`${project?.title} project screenshot`}
                width={384}
                height={216}
                sizes="(max-width: 1024px) 384px, 160px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAQFEQYhEiIxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AmeLZ7JWTTSwXlxE0niyRyMpO9Adnt9CaKKIP/9k="
                className="rounded border-2 border-slate-700/50 transition-all duration-300 ease-out group-hover:border-teal-400/50 group-hover:shadow-lg group-hover:shadow-teal-400/10 lg:hover:scale-[3.0] sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
            </div>

            <div className=" flex flex-col text-sm text-gray-100 pl-2   w-full">
                <Link href={project?.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project?.title} on GitHub`}>
                    <h3 className="flex flex-row text-lg font-bold font-display group-hover:text-teal-300 mt-2 items-center transition-colors duration-200">
                        {project?.title}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </h3>
                </Link>

       
                <div className="mt-2 max-w-md text-slate-400">
                    {project?.description}
                </div>

                <Technologies technologies={project?.technologies} />

            </div>
      </div>
    );

    
}

export default Project;