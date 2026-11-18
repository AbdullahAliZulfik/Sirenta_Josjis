import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema, type RegistrationFormValues } from '../types/schemas';
import FormInput from '../components/ui/FormInput';
import FormSelect from '../components/ui/FormSelect';
import { Plus, Trash2, UploadCloud, FileText } from 'lucide-react';

export default function Phase1Page() {
  const [transcriptFile, setTranscriptFile] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    mode: 'onChange',
    defaultValues: {
      education: [{ institution: '', degree: '', startYear: '', endYear: '' }],
      experience: [{ title: '', company: '', startYear: '', endYear: '', responsibilities: '' }],
      transcriptTitle: '',
    }
  });

  // Menggunakan useFieldArray untuk form dinamis
  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({
    control,
    name: "education",
  });

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({
    control,
    name: "experience",
  });

  const watchedValues = watch();
  const portfolioTitleLength = watchedValues.portfolioTitle?.length || 0;

  const onSubmit = (data: RegistrationFormValues) => {
    const finalData = { ...data, transcriptFile };
    console.log("DATA FULL FORM:", finalData);
    alert("Pendaftaran Berhasil di-submit! Cek console untuk melihat datanya.");
  };

  const degreeOptions = [
    { value: 'S1', label: 'S1 (Sarjana)' },
    { value: 'D3', label: 'D3 (Diploma)' },
    { value: 'D4', label: 'D4 (Sarjana Terapan)' },
  ];

  const transcriptOptions = [
    { value: 'Semester 1', label: 'Semester 1' },
    { value: 'Semester 2', label: 'Semester 2' },
    { value: 'Semester 3', label: 'Semester 3' },
    { value: 'Semester 4', label: 'Semester 4' },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto pb-20">
      <h1 className="text-2xl font-bold text-white mb-1">Pendaftaran Asisten</h1>
      <p className="text-slate-400 text-sm mb-8">Silakan lengkapi formulir di bawah ini dengan data yang valid.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* SECTION 1: PERSONAL INFORMATION */}
        <div className="bg-sireta-card border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="bg-slate-800 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs border border-slate-600">1</span>
            Section 1: Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput label="Full Name" placeholder="Abdullah..." {...register('fullName')} error={errors.fullName?.message} isValid={!!watchedValues.fullName && !errors.fullName} />
            <FormInput label="Student ID (NIM)" placeholder="2024..." {...register('nim')} error={errors.nim?.message} isValid={!!watchedValues.nim && !errors.nim} />
            <FormInput label="Email" type="email" placeholder="email@..." {...register('email')} error={errors.email?.message} isValid={!!watchedValues.email && !errors.email} />
            <FormInput label="WhatsApp" placeholder="0821..." {...register('phone')} error={errors.phone?.message} isValid={!!watchedValues.phone && !errors.phone} />
            <FormInput label="Domicile" placeholder="Jakarta..." {...register('domicile')} error={errors.domicile?.message} isValid={!!watchedValues.domicile && !errors.domicile} />
            <FormInput label="Hometown" placeholder="Bekasi..." {...register('hometown')} error={errors.hometown?.message} isValid={!!watchedValues.hometown && !errors.hometown} />
          </div>
        </div>

        {/* SECTION 2: PROFILE & COMPETENCE */}
        <div className="bg-sireta-card border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="bg-slate-800 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs border border-slate-600">2</span>
            Section 2: Profile & Competence
          </h2>

          <div className="mb-8">
            <label className="text-sm text-slate-300 mb-1.5 block">About Me <span className="text-red-500">*</span></label>
            <textarea
              {...register('aboutMe')}
              rows={4}
              placeholder="Ceritakan tentang dirimu..."
              className="w-full bg-[#0F172A] border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sireta-orange resize-none"
            />
            {errors.aboutMe && <span className="text-xs text-red-400">{errors.aboutMe.message}</span>}
          </div>

          {/* EDUCATIONAL BACKGROUND (Dynamic) */}
          <div className="mb-8 border-t border-slate-700 pt-6">
            <h3 className="text-md font-medium text-white mb-4">Educational Background</h3>
            
            {eduFields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-end bg-slate-800/30 p-4 rounded-lg">
                <div className="md:col-span-2">
                  <FormInput label="Institution Name" placeholder="Universitas..." {...register(`education.${index}.institution`)} error={errors.education?.[index]?.institution?.message} />
                </div>
                <div>
                  <FormSelect label="Degree" options={degreeOptions} {...register(`education.${index}.degree`)} error={errors.education?.[index]?.degree?.message} />
                </div>
                <div className="flex gap-2 items-center">
                  <FormInput label="Start Year" type="number" placeholder="2021" {...register(`education.${index}.startYear`)} error={errors.education?.[index]?.startYear?.message} />
                  <FormInput label="End Year" type="number" placeholder="2025" {...register(`education.${index}.endYear`)} error={errors.education?.[index]?.endYear?.message} />
                  {index > 0 && (
                    <button type="button" onClick={() => removeEdu(index)} className="text-red-400 hover:text-red-300 mb-2 p-2 bg-slate-800 rounded">
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button type="button" onClick={() => appendEdu({ institution: '', degree: '', startYear: '', endYear: '' })} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md transition-colors">
              <Plus size={16} /> Add another education
            </button>
          </div>

          {/* EXPERIENCE (Dynamic) */}
          <div className="mb-8 border-t border-slate-700 pt-6">
            <h3 className="text-md font-medium text-white mb-4">Experience (Work / Organization)</h3>
            
            {expFields.map((field, index) => (
              <div key={field.id} className="mb-6 bg-slate-800/30 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <FormInput label="Job Title / Role" placeholder="Staff..." {...register(`experience.${index}.title`)} error={errors.experience?.[index]?.title?.message} />
                  <FormInput label="Company / Organization" placeholder="HIMIF..." {...register(`experience.${index}.company`)} error={errors.experience?.[index]?.company?.message} />
                  <FormInput label="Start Year" type="number" placeholder="2023" {...register(`experience.${index}.startYear`)} error={errors.experience?.[index]?.startYear?.message} />
                  <FormInput label="End Year" type="number" placeholder="2024" {...register(`experience.${index}.endYear`)} error={errors.experience?.[index]?.endYear?.message} />
                </div>
                <label className="text-sm text-slate-300 mb-1.5 block">Key Responsibilities</label>
                <textarea
                  {...register(`experience.${index}.responsibilities`)}
                  rows={3}
                  placeholder="Deskripsi tugas..."
                  className="w-full bg-[#0F172A] border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sireta-orange resize-none"
                />
                {errors.experience?.[index]?.responsibilities && <span className="text-xs text-red-400">{errors.experience?.[index]?.responsibilities?.message}</span>}
                
                <div className="flex justify-end mt-2">
                  <button type="button" onClick={() => removeExp(index)} className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1">
                    <Trash2 size={16} /> Hapus
                  </button>
                </div>
              </div>
            ))}
            <button type="button" onClick={() => appendExp({ title: '', company: '', startYear: '', endYear: '', responsibilities: '' })} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md transition-colors">
              <Plus size={16} /> Add another experience
            </button>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <FormInput label="Technical Skills / Expertise" placeholder="React, Node.js, Figma..." {...register('technicalSkills')} error={errors.technicalSkills?.message} />
          </div>
        </div>

        {/* SECTION 3: MOTIVATION & IDEAS */}
        <div className="bg-sireta-card border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="bg-slate-800 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs border border-slate-600">3</span>
            Section 3: Motivation & Ideas
          </h2>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">Motivation Statement <span className="text-red-500">*</span></label>
              <textarea
                {...register('motivation')}
                rows={3}
                placeholder="I want to learn and develop my skills..."
                className="w-full bg-[#0F172A] border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sireta-orange resize-none"
              />
              {errors.motivation && <span className="text-xs text-red-400">{errors.motivation.message}</span>}
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">Innovation & Idea <span className="text-red-500">*</span></label>
              <textarea
                {...register('innovation')}
                rows={3}
                placeholder="Practical learning materials..."
                className="w-full bg-[#0F172A] border border-slate-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-sireta-orange resize-none"
              />
              {errors.innovation && <span className="text-xs text-red-400">{errors.innovation.message}</span>}
            </div>
          </div>
        </div>

        {/* SECTION 4: DOCUMENTS & PORTFOLIO */}
        <div className="bg-sireta-card border border-slate-700 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="bg-slate-800 text-slate-300 w-6 h-6 rounded flex items-center justify-center text-xs border border-slate-600">4</span>
            Section 4: Documents & Portfolio
          </h2>

          <div className="mb-8 border-b border-slate-700 pb-6">
            <h3 className="text-md font-medium text-white mb-4">Academic Transcript</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="md:col-span-2">
                <FormSelect 
                  label="Transcript Title" 
                  options={transcriptOptions} 
                  {...register('transcriptTitle')} 
                  error={errors.transcriptTitle?.message} 
                />
              </div>
              <div>
                <FormInput 
                  label="GPA" 
                  type="number" 
                  step="0.01" 
                  placeholder="3.50" 
                  {...register('gpa')} 
                  error={errors.gpa?.message} 
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">Transcript PDF Upload</label>
              {!transcriptFile ? (
                <div 
                  onClick={() => setTranscriptFile('transkrip_nilai_abdullah.pdf')}
                  className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-sireta-orange transition-colors cursor-pointer bg-slate-800/50 flex flex-col items-center justify-center"
                >
                  <UploadCloud className="text-slate-400 mb-2" size={24} />
                  <p className="text-sm text-slate-300 font-medium">Click or drag PDF to this area to upload</p>
                  <p className="text-xs text-slate-500 mt-1">Upload your academic transcript in PDF format. Maximum file size: 2 MB.</p>
                </div>
              ) : (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="text-emerald-400" size={20} />
                    <div>
                      <p className="text-sm text-emerald-300 font-medium">Uploaded document: {transcriptFile}</p>
                      <p className="text-xs text-emerald-500/70">Berhasil diunggah</p>
                    </div>
                  </div>
                  <button type="button" onClick={() => setTranscriptFile(null)} className="text-red-400 hover:text-red-300 text-xs">
                    Hapus
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium text-white mb-4">Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <FormInput 
                  label="Title" 
                  placeholder="Github" 
                  {...register('portfolioTitle')} 
                  error={errors.portfolioTitle?.message} 
                />
                <span className={`absolute right-3 top-[38px] text-xs ${portfolioTitleLength > 40 ? 'text-red-500' : 'text-slate-500'}`}>
                  ({portfolioTitleLength}/40)
                </span>
              </div>
              <FormInput 
                label="URL" 
                placeholder="https://github.com/..." 
                {...register('portfolioUrl')} 
                error={errors.portfolioUrl?.message} 
              />
            </div>
          </div>

        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end mt-8">
          <button type="submit" className="px-8 py-3 rounded-md bg-sireta-orange text-white text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
            Submit Pendaftaran
          </button>
        </div>

      </form>
    </div>
  );
}