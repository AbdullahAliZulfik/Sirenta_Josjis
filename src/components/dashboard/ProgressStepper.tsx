import { CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 1, title: 'Phase 1 - Registration', status: 'completed' },
  { id: 2, title: 'Phase 2 - CBT', status: 'completed' },
  { id: 3, title: 'Phase 3 - Microteaching & Interview', status: 'completed' },
  { id: 4, title: 'Phase 4 - Internship, Project, Final Assessment & Final Presentation', status: 'active' },
];

export default function ProgressStepper() {
  return (
    <div className="bg-sireta-card border border-sireta-border rounded-xl p-8 mb-6">
      <div className="flex items-center justify-between relative">
        
        {/* Garis penghubung background */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-700 -z-10 transform -translate-y-1/2"></div>

        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1 text-center z-10">
            <div className="bg-sireta-card p-1 rounded-full mb-3">
              <CheckCircle2 
                size={24} 
                className={step.status === 'completed' ? 'text-emerald-500' : 'text-slate-500'} 
              />
            </div>
            <p className="text-[10px] text-slate-300 font-medium leading-tight max-w-[120px]">
              {step.title}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}