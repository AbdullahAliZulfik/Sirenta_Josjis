import { useState } from "react"; //Import React useState untuk mengatur state dan menyimpan data sementara di dalam komponen
import logosirenta from "../assets/logosirenta.png"; //Import Logo Sirenta, yang di gunakan sebagai landing pages, logonya saya ambil dari web sirenta sendiri
import heroilustrasi from "../assets/heroilustrasi.png"; //Import Hero Ilustrasi (Gambar orang duduk liat laptop), gambarnya saya ambil dari web sirenta sendiri kemudian saya import ke dalam asset
import "./Landingpages.css"; //Untuk mengatur tampilan warna websitenya

interface LandingpageProps {
    navigatelogin: () => void;
}

interface TrackItem {
    label: string;
    badge: string;
    courses: string[];
}

interface FaqItem {
    question: string;
    answer: string;
}

export default function Landingpage({ navigatelogin }: LandingpageProps) { //Menerima prop navigatelogin dari parent, untuk mengarahkan website ke halaman login
    const [islightmode, setIsLightMode] = useState<boolean>(false); //Untuk meng set ke mode terang, karena nilainya false jadi otomatis set ke mode gelap
    const [activenav, setActiveNav] = useState<string>("home"); //Untuk mengatur user ke bagian halaman home
    const [activeguideline, setActiveGuideline] = useState<"general" | "roles">("general"); //Untuk mengatur dan mengarahkan ke bagian tab guideline
    const [activefindyourtrack, setActiveFindYourTrack] = useState<number>(0); //Jika user pencet find your track, maka user diarahkan ke bagian tahun akademik
    const [activefaq, setActiveFaq] = useState<number | null>(0); //Untuk membuka jawaban dari pertanyaan pertama

    const track: TrackItem[] = [ //const track seperti array yang menyimpan data label, badge, dan courses di dalam indexnya masing-masing, yang nantinya akan di tampilkan di bagian find your track
        {
            label: "1st year students", //saya ambil seperti ci serinta, untuk menambahkan tulisan di dalam website, label ini akan menampilkan tulisan 1st year students
            badge: "Currently Semester 2 → Applying for Semester 3 Duty", 
            courses: ["Basic Programming", "Databases"], 
        },
        {
            label: "2nd year students", 
            badge: "Currently Semester 4 → Applying for Semester 5 Duty", 
            courses: ["Programming Algorithms", "Data Structures", "Computer Networks"], 
        },
        {
            label: "3rd year students", 
            badge: "Currently Semester 6 → Applying for Semester 7 Duty", 
            courses: ["Data Mining", "Machine Learning", "System Security"], 
        },
    ];

    const faq: FaqItem[] = [  //const faq seperti array yang menyimpan data pertanyaan dan jawaban di dalam indexnya masing-masing, yang nantinya akan di tampilkan di bagian FAQ
        {
            question: "Who can apply to be a Lab Assistant?",  //pertanyaan pertama , seperti di website, tulisan ini akan muncul di bagian FAQ
            answer: "Open to all active Informatics students who meet the Open Recruitment requirements.",  //jawaban dari pertanyaan pertama yang ada di faq
        },
        {
            question: "Do I need to be a coding expert?", 
            answer: "Not necessarily! You don't have to be a master programmer. The most important things are having a grasp of the basics and a strong willingness to learn.", 
        },
        {
            question: "Is being a Lab Assistant difficult?", 
            answer: "It's not hard as long as you are disciplined and eager to learn. It's all about growth and commitment.", 
        },
        {
            question: "What does a Lab Assistant actually do?", 
            answer: "Your main responsibility is assisting with practicum sessions. Beyond that, additional tasks depend on your division: Information Systems Division (Handles lab systems); Events Division (Manages lab activities); Social Media Division (Manages content).", 
        },
        {
            question: "What's in it for me? (The Benefits)", 
            answer: "Expand your professional network (lots of connections!); Earn a professional honorarium; Exclusive perk: You get to park inside the campus area!", 
        },
        {
            question: "What is the selection process like?", 
            answer: "You will go through 4 stages: 1. Administrative Selection (Document screening); 2. CBT (Computer Based Test); 3. Interview & Microteaching; 4. Interview & Microteaching.", 
        },
        {
            question: "What documents do I need to prepare?", 
            answer: "Make sure you have these ready: Academic Transcript (from InfoKHS); Practicum Transcript; Curriculum Vitae (CV)", 
        },
        {
            question: "What if I don't pass the selection? Can I apply again next year?", 
            answer: "Of course! If you don't make it this time, you can try again in the next year's recruitment.", 
        },
    ];

    return ( // Return ini mengembalikan elemen JSX untuk ditampilkan
        <div className={`landing-wrapper ${islightmode ? "lightmode" : ""}`}> {/* Untuk mengatur tampilan landing pages, jika user pencet mode terang maka otomatis tampilan akan berubah */}
            
            {/* --- NAVBAR SECTION --- */}
            <header className="navbar"> {/* Header navigasi di paling atas */}
                <div className="navbar-logo"> {/* tempat untuk logo */}
                    <a href="#home" className="nav-brand" onClick={() => setActiveNav("home")}> {/* Link ini buat logo  kalau dipencet menuju home */}
                        <img src={logosirenta} alt="Logo Sirenta" /> {/* Menampilkan logo sirenta */}
                    </a>
                </div> {/* tempat untuk logo */}

                <nav className="nav-menu"> {/* tempat ntuk menu navigasi */}
                    <a href="#home" className={activenav === "home" ? "active" : ""} onClick={() => setActiveNav("home")}>Home</a> {/* Link ini kalau di pencet akan menuju menu Home, kalau active maka diberi class active */}
                    <a href="#guideline" className={activenav === "guideline" ? "active" : ""} onClick={() => setActiveNav("guideline")}>Guideline</a> {/* Link untuk menu Guideline */}
                    <a href="#findyourtrack" className={activenav === "findyourtrack" ? "active" : ""} onClick={() => setActiveNav("findyourtrack")}>Find Your Track</a> {/* Link untuk menu Find Your Track */}
                    <a href="#faq" className={activenav === "faq" ? "active" : ""} onClick={() => setActiveNav("faq")}>FAQ</a> {/* Link  untuk menu FAQ */}
                </nav> {/* tempat untuk menu navigas*/}

                <div className="nav-action"> {/* tempat untuk tombol aksi di kanan */}
                    <button className="theme-toggle" onClick={() => setIsLightMode(!islightmode)}> {/* Tombol tema, onClick membalikkan state islightmode */}
                        {islightmode ? "🌙" : "☀️"} {/* Ikon bisa berubah sesuai tema */}
                    </button> {/* tempat untuk tombol aksi di kanan */}
                    <button className="btn-signin" onClick={navigatelogin}>Sign In</button> {/* Tombol Sign In, onClick memanggil fungsi navigatelogin*/}
                </div> {/* tempat untuk tombol aksi di kanan */}
            </header> {/* tempat untuk menu navigas*/}

            {/* --- HERO SECTION --- */}
            <section className="hero-section" id="home"> {/* Section  utama (hero) */}
                <div className="hero-content"> {/* tempat teks di kiri */}
                    <h1>Open Recruitment:<br />Laboratory Assistants</h1> {/* Judul besar */}
                    <p>The Informatics Department at university of Muhammadiyah Malang invites active students to contribute to the academic environment as Laboratory Assistants for the upcoming period.</p> {/* Deskripsi nya  singkat */}
                    <button className="btn-primary" onClick={navigatelogin}>Apply Now</button> {/* Tombol Apply Now, diarahkan ke login */}
                </div>
                <div className="hero-image"> {/* tempat gambar di kanan */}
                    <img src={heroilustrasi} alt="Hero Ilustrasi" /> {/* buat menampilkan gambar ilustrasi hero */}
                </div>
            </section> {/* tempat untuk section hero */}

            {/* --- GUIDELINES SECTION --- */}
            <section className="guidelines-section" id="guideline"> {/* Section Recruitment Guidelines */}
                <div className="section-title"> {/* tempat judul section */}
                    <h2>Recruitment Guidelines</h2> {/* Judul section */}
                    <p>Prepare yourself by understanding our requirements</p> {/* Sub-judul */}
                </div> {/* tempat judul section */}
                
                <div className="guideline-tabs"> {/* tempat untuk tab */}
                    <button className={activeguideline === "general" ? "active" : ""} onClick={() => setActiveGuideline("general")}>General Requirements</button> {/* Tab General, onClick mengubah state */}
                    <button className={activeguideline === "roles" ? "active" : ""} onClick={() => setActiveGuideline("roles")}>Roles & Divisions</button> {/* Tab Roles */}
                </div>

                {activeguideline === "general" && ( //Kondisional, jika tab general aktif maka tampilkan konten ini
                    <div className="guideline-content"> {/* tempat konten guideline */}
                        <h3>Who We Are Looking For</h3> {/* Sub-judul konten */}
                        <p>To ensure the best quality for our team, applicants must meet the following criteria:</p> {/* Deskripsi konten */}
                        
                        <div className="criteria-grid"> {/* Grid untuk kartu-kartu kriteria */}
                            <div className="criteria-card"> {/* Kartu kriteria 1 */}
                                <h4>Academic Excellence</h4> {/* Judul buat kartu */}
                                <p>Academic Excellence Minimum GPA of 3.00 and a minimum grade of B in all completed laboratory courses.</p> {/* Deskripsi untuk kartu */}
                            </div>
                            <div className="criteria-card"> {/* Kartu kriteria 2 */}
                                <h4>Commitment</h4> {/* Judul buat kartu */}
                                <p>Must read the registration guidelines thoroughly and be ready to follow the entire selection process.</p> {/* Deskripsi buat kartu */}
                            </div>
                            <div className="criteria-card"> {/* Kartu kriteria 3 */}
                                <h4>Character</h4> {/* Judul buat kartu */}
                                <p>Honest, responsible, disciplined, and capable of working effectively in a team.</p> {/* Deskripsi buat kartu */}
                            </div>
                            <div className="criteria-card"> {/* Kartu kriteria 4 */}
                                <h4>Organization Status</h4> {/* Judul buat kartu */}
                                <p>Preferably not currently affiliated with other organizations (to ensure focus).</p> {/* Deskripsi buat kartu */}
                            </div>
                        </div>
                        <p className="note">Note for Final Year Students: A specific timeline and adjustment will be arranged by the committee.</p> {/* Catatan tambahan */}
                    </div>
                )}
            </section>

            {/* --- FIND YOUR TRACK SECTION --- */}
            <section className="track-section" id="findyourtrack"> {/* Section Find Your Track */}
                <div className="section-title"> {/* tempat judul section */}
                    <h2>Fworddd</h2> {/* Judul section */}
                    <p>Select your current academic year to see your path.</p> {/* Sub-judul */}
                </div>

                <div className="track-tabs"> {/* tempat tab tahun akademik */}
                    {track.map((item, index) => ( //Melakukan perulangan pada array track
                        <button 
                            key={index} //Key unik untuk React
                            className={activefindyourtrack === index ? "active" : ""} //Jika index sama dengan state aktif, beri class active
                            onClick={() => setActiveFindYourTrack(index)} //OnClick mengubah state sesuai index
                        >
                            {item.label} {/* Menampilkan label tahun */}
                        </button>
                    ))}
                </div>

                <div className="track-content"> {/* tempat konten track */}
                    <div className="track-badge"> {/* Badge semester */}
                        {track[activefindyourtrack].badge} {/* Menampilkan badge sesuai tab yang aktif */}
                    </div>
                    <p>You will assist in the following practical classes:</p> {/* Teks instruksi */}
                    <div className="courses-grid"> {/* Grid untuk kartu mata kuliah */}
                        {track[activefindyourtrack].courses.map((course, idx) => ( //Perulangan untuk menampilkan mata kuliah
                            <div key={idx} className="course-card"> {/* Kartu mata kuliah */}
                                {course} {/* Nama mata kuliah */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="faq-section" id="faq"> {/* Section FAQ */}
                <div className="section-title"> {/* tempat judul section */}
                    <h2>Frequently Asked Questions (FAQ)</h2> {/* Judul section */}
                    <p>Frequently asked questions about the registration and selection process.</p> {/* Sub-judul */}
                </div>

                <div className="faq-list"> {/* tempat daftar FAQ */}
                    {faq.map((item, index) => ( //Perulangan untuk setiap FAQ
                        <div key={index} className="faq-item"> {/* Item FAQ */}
                            <button 
                                className="faq-question" //Class untuk tombol pertanyaan
                                onClick={() => setActiveFaq(activefaq === index ? null : index)} //Toggle buka/tutup jawaban
                            >
                                <span>{item.question}</span> {/* Teks pertanyaan */}
                                <span>{activefaq === index ? "▲" : "▼"}</span> {/* Ikon panah atas/bawah */}
                            </button>
                            {activefaq === index && ( //Jika state activefaq sama dengan index, tampilkan jawaban
                                <div className="faq-answer"> {/* tempat jawaban */}
                                    <p>{item.answer}</p> {/* Teks jawaban */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* --- FOOTER SECTION --- */}
            <footer className="footer"> {/* Footer halaman */}
                <div className="footer-logo"> {/* tempat logo footer */}
                    <img src={logosirenta} alt="Logo Sirenta" /> {/* Menampilkan logo */}
                    <p>Informatics Laboratory UMM</p> {/* Teks di bawah logo */}
                </div>
                <div className="footer-nav"> {/* tempat navigasi footer */}
                    <h4>Navigation</h4> {/* Judul kolom */}
                    <a href="#home">Home</a> {/* Link navigasi */}
                    <a href="#guideline">Recruitment Guidelines</a> {/* Link navigasi */}
                    <a href="#findyourtrack">Find Your Track</a> {/* Link navigasi */}
                    <a href="#faq">FAQ</a> {/* Link navigasi */}
                </div>
                <div className="footer-social"> {/* tempat sosial media footer */}
                    <h4>Social Media</h4> {/* Judul kolom */}
                </div>
                <div className="footer-contact"> {/* tempat kontak footer */}
                    <h4>Contact Information</h4> {/* Judul kolom */}
                    <p>Gedung Kuliah Bersama 3 (GKB 3),</p> {/* Alamat */}
                    <p>6th Floor, Jl. Raya Tlogomas No. 246, Malang, East Java.</p> {/* Alamat */}
                    <p>lab.informatika@umm.ac.id</p> {/* Email */}
                    <p>lab.informatika.umm@gmail.com</p> {/* Email */}
                    <p>Mon-Fri, 08:00 AM - 04:00 PM</p> {/* Jam operasional */}
                </div>
            </footer>
        </div>
    );
}
