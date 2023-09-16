/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useLocation } from "react-router-dom";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  // useEffect,
} from "react";

type ExpandedContextType = boolean;

export const SidebarContext = createContext<ExpandedContextType>(true);

interface Props {
  children?: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="hidden lg:block h-screen sticky top-0 left-0  max-w-[230px]">
      <nav className="h-full flex flex-col justify-between border border-[#0000004D] rounded-e-[3rem] py-12">
        <div>
          <button onClick={() => setExpanded(!expanded)} className="hidden my-3 outline-none mx-auto">{expanded ? 'Close':'Open'}</button>
          <Link to={"/"} className="flex items-center justify-center space-x-4">
            <img
              src="/favicon_io/android-chrome-512x512.png"
              alt="Logo"
              className="w-[50px] h-[50px]"
            />
            {expanded && <h1 className="text-2xl font-bold text-[#333333]">Movie Box</h1>}
          </Link>
        </div>
        <SidebarContext.Provider value={expanded}>
          <ul className="flex flex-col space-y-3">{children}</ul>
          {expanded && <div className="p-4 mx-5 flex flex-col items-center justify-end space-y-2 bg-[#F8E7EB66] border-2 border-[#BE123CB2] rounded-xl">
            <p className="text-[15px] font-semibold text-[#333333CC]">
              Play movie quizes and earn free tickets
            </p>
            <p className="text-xs font-medium text-[#666666]">
              50k people are playing now
            </p>
            <button className="py-1.5 px-4 bg-[#BE123C33] text-[#BE123C]">
              Start playing
            </button>
          </div>}
          <SidebarItem
            icon={<img src="/logout.png" alt="" className="w-8" />}
            text="log out"
            path="/"
          />
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export default Sidebar;

type ItemProps = {
  icon: React.ReactNode;
  text: string;
  alert?: boolean;
  path?: string;
};

export const SidebarItem = ({ icon, text, path }: ItemProps) => {
  const location = useLocation();

  const expanded = useContext(SidebarContext);
  //@ts-ignore
  const active = location.pathname.split("/").includes(path);
  // console.log(location.pathname.split("/"))

  return (
    <Link
      to={path ? path : "/"}
      className={`
        relative flex items-center py-4 px-5 my-1 cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-[#BE123C1A] to-[#BE123C1A] text-[#00000080] border-r-[5px] border-[#BE123C]"
            : "hover:bg-gray-100 text-[#00000080]"
        }
    `}
    >
      <span className={active ? "text-[#2075FF]" : ""}>{icon}</span>
      <span
        className={`overflow-hidden transition-all text-xl capitalize ${
          expanded ? "w-36 ml-3 font-semibold" : "w-0"
        } ${active ? "font-semibold text-[#BE123C]" : ""}`}
      >
        {text}
      </span>
      {/* {alert && (
        <div
          className={`absolute  w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "right-4" : "right-2 top-2"
          }`}
        />
      )} */}

      {!expanded && (
        <div
          className={`
          capitalize absolute left-full rounded-md px-2 py-1 ml-6
          bg-gray-100 text-black text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </Link>
  );
};
