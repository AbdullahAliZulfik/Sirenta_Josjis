export default function WelcomeBanner() {
  return (
    <div className="bg-sireta-card border border-sireta-border rounded-xl p-8 mb-6">
      <h2 className="text-3xl font-bold text-white mb-2">
        Hello, Abdullah Ali Zulfik
      </h2>
      <p className="text-slate-400 mb-6 text-sm">
        Welcome to the Informatics Lab Assistant Recruitment.
      </p>
      
      <div className="flex items-center gap-4 text-xs">
        <div className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-md border border-emerald-500/20">
          Phase 1 - Registration
        </div>
        <div className="bg-red-500/10 text-red-400 px-3 py-1.5 rounded-md border border-red-500/20">
          Start: 20 Jan 2024, 00:00
        </div>
        <div className="bg-red-500/10 text-red-400 px-3 py-1.5 rounded-md border border-red-500/20">
          End: 25 Jan 2024, 00:00
        </div>
      </div>
    </div>
  );
}