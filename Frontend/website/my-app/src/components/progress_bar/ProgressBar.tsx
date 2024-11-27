const ProgressBar:React.FC<{ progress?: number , progressBarColor?:string}> = ({progress=50,progressBarColor="#FF8C00"}) => {
  return (
    // progress container
    <div className="w-80 flex items-center gap-5">
        {/* background progress bar */}
      <div className="bg-[#F5F5F5] w-full h-3 shadow-inner rounded-full">
        {/* progress  */}
        <span
          className={`h-full block rounded-full`}
          style={{background:progressBarColor,width: `${progress}%` }}
        //   dynanic based on props
        
        ></span>
        
      </div>
      <p className="text-[#414651] text-lg font-semibold">{progress}%</p>
    </div>
  );
};

export default ProgressBar;
