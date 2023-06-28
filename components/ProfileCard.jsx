import Image from "next/image";




const ProfileCard = (props) => {
  const user = props.user

  return (
    <div className=" lg:self-end flex flex-row lg:w-2/3 h-fit mx-2 items-center"> 
      {/* <Image
        src='/assets/images/profile.jpg'
        alt='profile picture'
        width={100}
        height={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className='rounded-full w-1/2 h-fit mx-2 my-2 border-gray-200 border-2 '

      /> */}
      <div className="flex flex-col text-sm tracking-tight text-gray-100  my-2  w-fit">
        <div className="text-5xl text-slate-200  mb-4 font-bold  w-fit">{user?.name}</div>
        <div className="text-xl text-slate-200  mb-5 w-fit ">{user?.occupation}</div>
        <div className="max-w-lg text-slate-400 text-base leading-normal  ">{user?.description}</div>

      </div>
    </div>
  );
};

export default ProfileCard;
