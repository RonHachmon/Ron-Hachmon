// export const getJsonData = async (fileName) => {
//   const res = await fetch(`http://127.0.0.1:3000/api?file=${fileName}`);
//   const repo = await res.json()
//   return repo;
// }

const ProfileCard = async (props) => {
  const user = props.user

  return (
    <div className=" lg:self-end flex flex-row lg:w-2/3 h-fit mx-2 items-center"> 
      <div className="flex flex-col text-sm tracking-tight text-gray-100  my-2  w-fit">
        <div className="text-5xl text-slate-200  mb-4 font-bold  w-fit">{user?.name}</div>
        <div className="text-xl text-slate-200  mb-5 w-fit ">{user?.occupation}</div>
        <div className="max-w-lg text-slate-400 text-base leading-normal  ">{user?.description}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
