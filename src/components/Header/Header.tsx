const Header = () => {
  return (
    <div className="bg-black flex items-center justify-between w-full max-w-7xl mx-auto py-4">
      <div className="flex items-center space-x-6">
        <img src="/favicon_io/android-chrome-512x512.png" alt="Logo" className="w-[50px]" />
        <h1 className="text-2xl font-bold text-white">MovieBox</h1>
      </div>
      <div className="basis-1/3 px-3 py-2 border border-white rounded-md">
        <form className="flex items-center justify-between space-x-4">
            <input type="text" placeholder="What do you want to watch?" className="w-full bg-transparent outline-none" />
            <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Search"><path id="Icon" d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
            </button>
        </form>
      </div>
      <div className="flex items-center justify-center space-x-[27px]">
        <p className="text-white font-bold">Sign in</p>
        <div className="p-[6px] bg-[#BE123C] rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu alt 4">
              <g id="Icon">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
                  fill="white"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
