import { forwardRef, type SelectHTMLAttributes } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <label className="text-sm text-slate-300">
          {label} <span className="text-red-500">*</span>
        </label>
        <select
          ref={ref}
          {...props}
          className={`w-full bg-[#0F172A] border ${
            error ? 'border-red-500' : 'border-slate-700'
          } rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sireta-orange focus:ring-1 focus:ring-sireta-orange transition-all appearance-none`}
        >
          <option value="" disabled hidden>Pilih {label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <span className="text-xs text-red-400">{error}</span>}
      </div>
    );
  }
);

FormSelect.displayName = 'FormSelect';
export default FormSelect;