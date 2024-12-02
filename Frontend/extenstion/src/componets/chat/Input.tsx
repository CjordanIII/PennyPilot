

const Input = () => {
  const iconSize: number = 15;
  return (
    <div className="flex justify-center relative">
      <input
        name="humaninput"
        className="w-3/4 p-2 rounded-full border-[#DFEFFF] border-solid border-2 
        outline-[#DFEFFF]
        focus:border-blue-500"
      />
      <button className="bg-[#2A7EC9] rounded-full px-3 relative right-10 scale-75">
        {" "}
        <img src="arrow.svg" width={iconSize} height={iconSize} alt="arrow" />
      </button>
    </div>
  );
};

export default Input;
