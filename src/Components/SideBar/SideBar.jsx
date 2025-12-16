import {
  Coffee,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  Package,
} from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setActive, setOpen } from "../../store/features/toggleSlice";

const SideBar = () => {
  const menu = [
    {
      id: "dash",
      label: "Dashboard",
      to: "/",
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: "pro",
      label: "Products",
      to: "/products",
      icon: <Package size={18} />,
    },
    {
      id: "cat",
      label: "Categories",
      to: "/categories",
      icon: <FolderOpen size={18} />,
    },
  ];

  const active = useSelector((state) => state.toggle.active);
  const open = useSelector((state) => state.toggle.open);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentPath = window.location.pathname;
  const activeId = menu.find((item) => item.to === currentPath)?.id || active;

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token");

    dispatch(setOpen(false));
    navigate("/signin", { replace: true });
  };

  return (
    <>
      {open && (
        <div
          onClick={() => dispatch(setOpen(false))}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div
        className={`
          bg-[#fafafa] flex flex-col justify-between w-72
          border-r border-[#e0d7cf] py-8 h-screen
          sticky top-0 overflow-y-auto

          md:relative md:translate-x-0
          fixed z-50 inset-y-0 left-0
          transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          <div className="flex items-center gap-2 border-b border-[#e0d7cf] pl-6 pr-6 pb-8">
            <div className="bg-[#336947] p-2 rounded-2xl flex items-center justify-center w-14">
              <Coffee size={34} color="white" />
            </div>
            <div>
              <h1 className="text-[#3e2723] text-[17px] font-bold">Coffee CRM</h1>
              <p className="text-[#9b6e63] text-[12px]">Admin Panel</p>
            </div>
          </div>

          <div className="pl-6 pr-6">
            <h1 className="mb-2 uppercase text-[#9b6e63] font-bold mt-4 text-[12px]">
              Management
            </h1>
            <ul className="text-[14px]">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    onClick={() => {
                      dispatch(setActive(item.id));
                      dispatch(setOpen(false));
                    }}
                    className={`
                      mb-2 flex gap-4 items-center rounded-xl w-full font-medium p-2
                      transition-all duration-200
                      ${
                        activeId === item.id
                          ? "text-white bg-[#2d5f3f] shadow-lg"
                          : "text-[#3e2723] hover:bg-[#f5f5f5] hover:text-[#2d5f3f]"
                      }
                    `}
                  >
                    {item.icon} {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 border-t border-[#e0d7cf] pl-6 pr-6 pt-8 text-[#3e2723] font-medium hover:text-red-600 transition-colors cursor-pointer"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default SideBar;
