const Technologies = (props) => {
    const technologies = props.technologies
    return (
        <div className=" flex flex-wrap space-x-2  my-3 max-w-md  border-slate-100">
        {technologies.map((tech, index) => (
             <div id={index} className="text-center mb-2 py-1 text-sm px-3 w-fit h-fit rounded-full bg-teal-400/10 text-teal-300" >{tech.name}</div>
        ))}
    </div>
    );
  };
  
  export default Technologies;
  