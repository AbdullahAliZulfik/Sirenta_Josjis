import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Files, 
  Users, 
  LogOut 
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Phase 1', icon: FileText, path: '/phase-1' },
  { name: 'Phase 2', icon: Files, path: '/phase-2' },
  { name: 'Phase 3', icon: Users, path: '/phase-3' },
  { name: 'Phase 4', icon: FileText, path: '/phase-4' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sirenta-dark border-r border-sireta-border flex flex-col fixed left-0 top-0">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-sirenta-orange rounded-full flex items-center justify-center font-bold text-white">
          S
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">Sirenta</h1>
          <p className="text-xs text-slate-400">Laboratorium Informatika</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 mt-6 flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-sireta-orange text-white font-medium'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`
            }
          >
            <item.icon size={20} />
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Area / Logout */}
      <div className="p-4 border-t border-sireta-border">
        <button className="flex items-center gap-3 text-slate-400 hover:text-red-400 transition-colors px-4 py-3 w-full text-left">
          <LogOut size={20} />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}