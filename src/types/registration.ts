// src/types/registration.ts

export interface EducationItem {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  startYear: string;
  endYear: string;
  responsibilities: string;
}

export interface RegistrationFormData {
  // Section 1
  fullName: string;
  nim: string;
  email: string;
  phone: string;
  domicile: string;
  hometown: string;
  
  // Section 2
  aboutMe: string;
  education: EducationItem[]; // Array of objects
  experience: ExperienceItem[];
  technicalSkills: string;

  // Section 3
  motivation: string;
  innovation: string;
  
  // Section 4
  transcriptTitle: string;
  gpa: string;
  portfolioTitle: string;
  portfolioUrl: string;
}