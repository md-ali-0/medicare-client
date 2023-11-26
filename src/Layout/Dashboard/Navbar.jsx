import { FiAlignLeft } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
// import { Fragment } from "react";
// import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
// import { Link } from "react-router-dom";
import BrandLogo from '../../assets/logo.png';

const Navbar = ({sidebarCollapse, setSidebarCollapse}) => {
    const handleSidebarCollapse = ()=>{
        setSidebarCollapse(!sidebarCollapse)
    }
    return (
        <div className="flex">
            <div className="flex md:justify-center items-center gap-2 bg-white md:bg-slate-900 h-16 w-60 px-3 md:px-0">
                <button onClick={handleSidebarCollapse} className="md:hidden">
                    <FiAlignLeft fill="#0F172A" size={25} />
                </button>
                <img className="w-32" src={BrandLogo} alt="" />
            </div>
            <div className="bg-white h-16 px-4 flex items-center border-b flex-1 border-gray-200 justify-end md:justify-between">
                <div className="relative hidden md:block">
                    <HiOutlineSearch
                        fontSize={20}
                        className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="text-sm focus:outline-none active:outline-none border border-gray-300 h-10 pl-11 pr-4 rounded-sm"
                    />
                </div>
                <div className="flex items-center gap-2 mr-2">
                    {/* <Popover className="relative">
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    // className={classNames(
                                    //     open && "bg-gray-100",
                                    //     "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                                    // )}
                                    className="group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                                >
                                    <HiOutlineBell fontSize={24} />
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                        <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                            <strong className="text-gray-700 font-medium">
                                                Notifications
                                            </strong>
                                            <div className="mt-2 py-1 text-sm">
                                                This is notification panel.
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400">
                                <span className="sr-only">Open user menu</span>
                                <div
                                    className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                    style={{
                                        backgroundImage:
                                            'url("https://source.unsplash.com/80x80?face")',
                                    }}
                                >
                                    <span className="sr-only">Marc Backes</span>
                                </div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md bg-white flex flex-col gap-2 ring-opacity-5 focus:outline-none p-2">
                                <Menu.Item>
                                    <Link
                                        to="/profile"
                                        className="rounded hover:bg-gray-100 hover:text-slate-800 text-gray-700 text-lg px-2 py-0.5"
                                    >
                                        Your Profile
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link
                                        to="/settings"
                                        className="rounded hover:bg-slate-100 hover:text-slate-800 text-gray-700 text-lg px-2 py-0.5"
                                    >
                                        Settings
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link
                                        to="/sign-out"
                                        className="rounded hover:bg-slate-100 hover:text-slate-800 text-gray-700 text-lg px-2 py-0.5"
                                    >
                                        Sign out
                                    </Link>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
