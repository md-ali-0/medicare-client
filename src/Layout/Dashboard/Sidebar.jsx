import { HiOutlineLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "./lib/Links";

const Sidebar = ({sidebarCollapse}) => {
    return (
        <div className={`bg-slate-900 px-3 flex flex-col absolute md:static ${sidebarCollapse?'':'hidden md:flex'} w-60`}>
            <div className="py-5 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-slate-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div className="cursor-pointer text-red-500 pb-2 px-1.5">
                    <span className="text-xl mr-2">
                        <HiOutlineLogout className="inline" size={20}/>
                    </span>
                    Logout
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

function SidebarLink({ link }) {
    return (
        <NavLink
            to={link.path}
            className={({ isActive }) =>
                isActive ? "flex items-center gap-2 bg-[#1E293B] rounded-sm text-white py-2 px-1.5" : "flex items-center gap-2 text-neutral-400 py-2 px-1.5 "
            }
        >
            {link.icon}
            {link.label}
        </NavLink>
    );
}
