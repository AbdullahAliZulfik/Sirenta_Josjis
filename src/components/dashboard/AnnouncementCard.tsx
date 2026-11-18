import { ExternalLink } from 'lucide-react';

export default function AnnouncementCard() {
  return (
    <div className="bg-sirenta-card border border-sirenta-border rounded-xl p-8 mb-6">
      
      {/* Header dengan Tombol */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Announcement</h3>
        <a 
          href="#" 
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
        >
          Join Group Chat
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Isi Pengumuman */}
      <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
        <p className="font-medium text-white text-base">
          🎉 Congratulation!
        </p>
        <p>
          You have successfully passed the Informatics Laboratory Assistant Recruitment 2026 at 
          Universitas Muhammadiyah Malang.
        </p>
        <p>
          Welcome to the Informatics Laboratory Assistant Family. We are excited to have you on 
          board and look forward to the journey ahead.
        </p>
        <p>
          Further information will be shared through the group below.
        </p>
        
        {/* Link WA */}
        <p>
          <a 
            href="#" 
            className="text-blue-400 hover:text-blue-300 font-semibold uppercase tracking-wide border-b border-blue-400 pb-0.5 transition-colors"
          >
            Link Grup Orientasi Laboratorium Informatika 2026
          </a>
        </p>

        <p>
          Please make sure to join the group and stay updated on the upcoming instructions.
        </p>
        <p>
          See you at the Lab!
        </p>
      </div>

    </div>
  );
}