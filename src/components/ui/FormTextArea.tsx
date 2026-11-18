interface FormTextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export default function FormTextArea({ label, name, placeholder, value, onChange, rows = 4 }: FormTextAreaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-slate-300">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full bg-[#0F172A] border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sireta-orange focus:ring-1 focus:ring-sireta-orange transition-all resize-none"
      />
    </div>
  );
}