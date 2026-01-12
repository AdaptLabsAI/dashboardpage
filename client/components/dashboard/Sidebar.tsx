import { Lock, LayoutGrid, BarChart3, MessageSquare, Wand2, Users, Server, Settings, ChevronUp, LogOut, User, Briefcase } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const navItems = [
  { icon: LayoutGrid, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: MessageSquare, label: "Inbox", active: false },
  { icon: Wand2, label: "AI Toolkit", active: false },
  { icon: Users, label: "User Management", active: false, locked: true },
  { icon: Server, label: "System Health", active: false, locked: true },
  { icon: Settings, label: "Settings", active: false },
];

const profileMenuItems = [
  { icon: User, label: "View Profile" },
  { icon: Briefcase, label: "Switch Workspace" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Logout", danger: true },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="w-[284px] h-screen bg-dark flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/bdaba2e316eecc637d3e75d0333fb8658ec98604?width=210" 
          alt="IriSync" 
          className="w-[105px] h-10"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 space-y-2">
        {navItems.map((item) => (
          <div key={item.label} className="relative">
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? "bg-gradient-to-r from-white/8 to-white/5"
                  : "hover:bg-white/5"
              }`}
            >
              <item.icon 
                className={`w-6 h-6 ${
                  item.active 
                    ? "text-white" 
                    : item.locked 
                    ? "text-white/25" 
                    : "text-white/55"
                }`} 
              />
              <span
                className={`text-sm font-medium ${
                  item.active
                    ? "text-white"
                    : item.locked
                    ? "text-white/25"
                    : "text-white/55"
                }`}
              >
                {item.label}
              </span>
              {item.locked && (
                <Lock className="w-4 h-4 text-white ml-auto" />
              )}
            </button>
            {item.active && (
              <>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[5px] h-[26px] bg-brand-green rounded-r-[3px]" />
                <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[2px] h-[22px] bg-[#00FF6A] rounded-r-[3px] blur-[4px] mix-blend-plus-lighter" />
                <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-brand-green/40 to-transparent rounded-r-xl blur-[0.5px]" />
              </>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bc4e461f96a6683dea3671e9696cc1c692ceb88a?width=128"
            alt="Sophia Adam"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-white text-lg font-medium">Sophia Adam</h3>
              <ChevronUp className="w-5 h-5 text-white" />
            </div>
            <p className="text-white/55 text-sm">Black Rust Corp.</p>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <svg className="absolute top-0 left-0 w-full h-[234px] -z-10" viewBox="0 0 1926 234" fill="none">
        <path
          d="M140 126L0 73.5V0H1926V73.5L1687 146L1246 117.5L989.5 234L451.5 14.5L140 126Z"
          fill="#00C853"
        />
      </svg>
    </div>
  );
}
