import { forwardRef, InputHTMLAttributes } from 'react';
import { CheckCircle2 } from 'lucide-react';

// Extend interface agar menerima props standar input HTML
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isValid?: boolean; // Untuk memunculkan centang hijau
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, isValid, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-sm text-slate-300">
          {label} <span className="text-red-500">*</span>
        </label>
        
        <div className="relative">
          <input
            ref={ref}
            {...props}
            className={`w-full bg-[#0F172A] border ${
              error ? 'border-red-500' : 'border-slate-700'
            } rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sireta-orange focus:ring-1 focus:ring-sireta-orange transition-all placeholder:text-slate-600`}
          />
          
          {/* Ikon Centang Hijau jika valid */}
          {isValid && !error && (
            <CheckCircle2 
              size={18} 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" 
            />
          )}
        </div>
        
        {/* Pesan Error */}
        {error && <span className="text-xs text-red-400">{error}</span>}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
export default FormInput;