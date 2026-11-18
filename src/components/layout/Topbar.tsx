import { Bell, Globe, UserCircle } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-16 bg-sireta-dark border-b border-sireta-border flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10">
      {/* Breadcrumb / Title */}
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span className="hover:text-white cursor-pointer">Pages</span>
        <span>/</span>
        <span className="text-white font-medium">Dashboard</span>
      </div>

      {/* Right Side Icons & Profile */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer hover:text-white">
          <Globe size={16} />
          <span>ID</span>
        </div>
        
        <button className="text-slate-400 hover:text-white relative">
          <Bell size={20} />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-sireta-dark"></span>
        </button>

        <div className="flex items-center gap-3 border-l border-sireta-border pl-6 cursor-pointer hover:opacity-80">
          <UserCircle size={32} className="text-slate-400" />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-white">Abdullah Ali Zulfik</p>
            <p className="text-xs text-slate-400">Peserta</p>
          </div>
        </div>
      </div>
    </header>
  );
}