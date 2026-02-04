const Technologies = (props) => {
    const technologies = props.technologies
    return (
        <div className="flex flex-wrap gap-2 my-3 max-w-md">
        {technologies.map((tech, index) => (
             <div key={index} className="text-center py-1 text-sm px-3 w-fit h-fit rounded-full bg-teal-400/10 text-teal-300">{tech.name}</div>
        ))}
    </div>
    );
  };
  
  export default Technologies;
  