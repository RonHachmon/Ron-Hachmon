const Links = (props) => {
    const links = props.links
    return (
        <div className=" mt-auto flex flex-row space-x-5 w-fit mx-2       ">
          {links.map((link, index) => (
            <div key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <svg className="svg-link" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d={link.d}/></svg>
              </a>
            </div>
          ))}
        </div>
    );
  };
  
  export default Links;
  