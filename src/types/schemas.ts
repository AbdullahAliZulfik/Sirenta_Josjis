import { z } from 'zod';

const educationSchema = z.object({
  institution: z.string().min(3, "Institusi wajib diisi"),
  degree: z.string().min(1, "Jenjang wajib dipilih"),
  startYear: z.string().min(4, "Tahun mulai wajib diisi"),
  endYear: z.string().min(4, "Tahun selesai wajib diisi"),
});

const experienceSchema = z.object({
  title: z.string().min(3, "Posisi wajib diisi"),
  company: z.string().min(3, "Perusahaan/Organisasi wajib diisi"),
  startYear: z.string().min(4, "Tahun mulai wajib diisi"),
  endYear: z.string().min(4, "Tahun selesai wajib diisi"),
  responsibilities: z.string().min(10, "Deskripsi tugas minimal 10 karakter"),
});

export const registrationSchema = z.object({
  // Section 1
  fullName: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  nim: z.string().min(10, "NIM harus 10 digit"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(10, "Nomor HP minimal 10 digit"),
  domicile: z.string().min(3, "Domisili wajib diisi"),
  hometown: z.string().min(3, "Kota asal wajib diisi"),
  
  // Section 2
  aboutMe: z.string().min(20, "Ceritakan tentang dirimu minimal 20 karakter"),
  education: z.array(educationSchema).min(1, "Minimal satu riwayat pendidikan"),
  experience: z.array(experienceSchema),
  technicalSkills: z.string().min(3, "Skill wajib diisi"),

  // Section 3
  motivation: z.string().min(20, "Motivasi minimal 20 karakter"),
  innovation: z.string().min(20, "Ide inovasi minimal 20 karakter"),

  // Section 4
  transcriptTitle: z.string().min(1, "Judul transkrip wajib dipilih"),
  gpa: z.string().refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 4.00;
  }, { message: "IPK harus berupa angka 0.00 - 4.00" }),
  
  portfolioTitle: z.string().max(40, "Maksimal 40 karakter"),
  portfolioUrl: z.string().url("Format URL tidak valid").optional().or(z.literal('')),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;