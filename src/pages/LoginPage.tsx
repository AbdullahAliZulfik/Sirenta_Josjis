import { useState, type FormEvent } from "react"; //Import React dan useState dari library react untuk mengelola state dari reach
import logosirenta from "../assets/logosirenta.png"; //Untuk import Logo Sirenta dari diambil dari assets gambar yg di import
import heroilustrasi from "../assets/heroilustrasi.png"; // Untuk Import Hero Ilustrasi dari diambil dari assets gambar yg di import
import "./LoginPage.css"; //Import file CSS khusus halaman login dari file LoginPage.css untuk styling halaman login

const API_URL = "http://localhost:3000"; //[BARU] Alamat backend NestJS (port 3000, sesuai main.ts). Ganti di sini kalau port/alamat berubah

interface LoginPageProps {
    navigateLanding: () => void;
    navigateDashboard?: () => void; //[BARU] Opsional: fungsi pindah ke dashboard setelah login berhasil (dikirim dari App.tsx)
}

export default function LoginPage({ navigateLanding, navigateDashboard }: LoginPageProps) { //Menerima prop navigateLanding untuk kembali ke landing page 
    const [islightmode, setIsLightMode] = useState<boolean>(false); //State untuk toggle tema, default false (gelap)
    const [nim, setNim] = useState<string>(""); //State untuk menyimpan input NIM, dan menambahkan state nim dengan setNim untuk mengubah nilai nim
    const [password, setPassword] = useState<string>(""); //State untuk menyimpan input Password,  dan menambahkan state password dengan setPassword untuk mengubah nilai password
    const [error, setError] = useState<string>(""); //[BARU] State untuk menyimpan pesan error dari backend (mis. "NIM atau password salah")
    const [loading, setLoading] = useState<boolean>(false); //[BARU] State penanda sedang proses login, supaya tombol tidak bisa diklik berkali-kali

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => { //Fungsi yang dijalankan saat form login di-submit
        e.preventDefault(); //Mencegah halaman reload saat submit
        console.log("Login attempt:", { nim, password }); //Untuk menampilkan NIM dan Password , dibagian menu login
        // 
        setError(""); //[BARU] Hapus pesan error dari percobaan login sebelumnya
        setLoading(true); //[BARU] Tandai proses login dimulai

        try { //[BARU] try/catch supaya error jaringan (mis. backend mati) tidak bikin halaman crash
            const res = await fetch(`${API_URL}/auth/login`, { //[BARU] Kirim NIM + password ke endpoint login backend
                method: "POST", //[BARU] Login pakai method POST
                headers: { "Content-Type": "application/json" }, //[BARU] Beritahu backend bahwa isi body berformat JSON
                body: JSON.stringify({ nim, password }), //[BARU] Ubah data NIM + password menjadi teks JSON
            });
            const data = await res.json(); //[BARU] Baca balasan backend (berisi token kalau berhasil, atau message kalau gagal)

            if (!res.ok) { //[BARU] res.ok false = status bukan 2xx (mis. 401 salah password, 400 format salah)
                setError(Array.isArray(data.message) ? data.message[0] : data.message); //[BARU] message dari validasi bisa berupa array, ambil yang pertama
                return; //[BARU] Berhenti di sini, jangan lanjut ke langkah simpan token
            }

            localStorage.setItem("token", data.token); //[BARU] Simpan token JWT di browser untuk dipakai saat memanggil endpoint yang butuh login
            if (navigateDashboard) navigateDashboard(); //[BARU] Pindah ke dashboard kalau fungsinya sudah dikirim dari App.tsx
        } catch { //[BARU] Masuk sini kalau fetch gagal total (backend mati / tidak terjangkau)
            setError("Server tidak bisa dihubungi"); //[BARU] Tampilkan pesan error umum ke user
        } finally { //[BARU] Selalu dijalankan, berhasil maupun gagal
            setLoading(false); //[BARU] Tandai proses login selesai, tombol aktif lagi
        }
    };

    return ( //Mengembalikan elemen JSX
        <div className={`login-wrapper ${islightmode ? "lightmode" : ""}`}> {/* Tempat utama halaman login */}
            
            <div className="login-top-bar"> {/* Bar atas ini  untuk toggle tema */}
                <img src={logosirenta} alt="Logo Sirenta" className="logo" /> {/* Untuk menampilkan logo Sirenta */}
                <button className="theme-toggle" onClick={() => setIsLightMode(!islightmode)}> {/* Tombol toggle tema */}
                    {islightmode ? "🌙" : "☀️"} {/* Ikon berubah sesuai tema, tergantung usernya mlh apa */}
                </button>
            </div>

            <div className="login-container"> {/* Container untuk membagi layar jadi 2 */}
                
                {/* --- KOLOM KIRI (ILUSTRASI & TEKS) --- */}
                <div className="login-left"> {/* Tempat sisi kiri */}
                    <div className="login-illustration"> {/* Tempat gambar ilustrasi */}
                        <img src={heroilustrasi} alt="Ilustrasi Login" /> {/* Untuk menampilkan gambar ilustrasi */}
                    </div>
                    <h2>Open Recruitment: Laboratory<br/>Assistants</h2> {/* Judul di bawah ilustrasi */}
                    <p>Informatics Department, University of Muhammadiyah Malang</p> {/* Sub-teks */}
                </div>

                {/* --- KOLOM KANAN (FORM LOGIN) --- */}
                <div className="login-right"> {/* Tempat sisi kanan */}
                    <div className="login-card"> {/* Kartu form login */}
                        <button className="back-btn" onClick={navigateLanding}> {/* Tombol back ke landing page */}
                            ← {/* Ikon panah kiri */}
                        </button>
                        
                        <h1>Welcome</h1> {/* Judul form */}
                        <p>Enter your NIM and password to access your dashboard.</p> {/* Instruksi form */}

                        <form onSubmit={handleLogin}> {/* Form login */}
                            <div className="form-group"> {/* Grup input NIM */}
                                <label>NIM ?</label> {/* Label NIM dengan ikon tanya */}
                                <input 
                                    type="text" //Tipe input teks
                                    inputMode="numeric" //[BARU] Di HP, tampilkan keyboard angka
                                    placeholder="e.g., 202210370311449" //Placeholder contoh NIM
                                    value={nim} //Nilai input diambil dari state
                                    onChange={(e) => setNim(e.target.value.replace(/\D/g, ""))} //Mengubah state saat user mengetik [BARU: replace(/\D/g, "") membuang semua karakter non-angka, jadi NIM hanya berisi angka]
                                />
                            </div>

                            <div className="form-group"> {/* Grup input Password */}
                                <label>Password ?</label> {/* Label Password dengan ikon tanya */}
                                <div className="password-input-wrapper"> {/* Tempat input password untuk ikon mata */}
                                    <input 
                                        type="password" //[BARU] Sembunyikan karakter password (sebelumnya terlihat jelas karena tipe input belum diatur)
                                        placeholder="********" //Placeholder password
                                        value={password} //Nilai input diambil dari state
                                        onChange={(e) => setPassword(e.target.value)} //Mengubah state saat user mengetik
                                    />
                                </div>
                            </div>

                            {error && <p style={{ color: "#e74c3c", fontSize: "14px" }}>{error}</p>} {/* [BARU] Tampilkan pesan error hanya kalau state error tidak kosong */}

                            <button type="submit" className="btn-submit" disabled={loading}> {/* Tombol submit form [BARU: disabled saat loading supaya tidak double submit] */}
                                {loading ? "Signing in..." : "Sign In"} {/* [BARU] Teks tombol berubah saat proses login berjalan */}
                            </button>
                            
                            <a href="#forgot" className="forgot-password">Forgot Password?</a> {/* Link lupa password */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
