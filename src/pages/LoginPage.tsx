import { useState, type FormEvent } from "react"; //Import React dan useState dari library react untuk mengelola state dari reach
import logosirenta from "../assets/logosirenta.png"; //Untuk import Logo Sirenta dari diambil dari assets gambar yg di import
import heroilustrasi from "../assets/heroilustrasi.png"; // Untuk Import Hero Ilustrasi dari diambil dari assets gambar yg di import
import "./LoginPage.css"; //Import file CSS khusus halaman login dari file LoginPage.css untuk styling halaman login

interface LoginPageProps {
    navigateLanding: () => void;
}

export default function LoginPage({ navigateLanding }: LoginPageProps) { //Menerima prop navigateLanding untuk kembali ke landing page 
    const [islightmode, setIsLightMode] = useState<boolean>(false); //State untuk toggle tema, default false (gelap)
    const [nim, setNim] = useState<string>(""); //State untuk menyimpan input NIM, dan menambahkan state nim dengan setNim untuk mengubah nilai nim
    const [password, setPassword] = useState<string>(""); //State untuk menyimpan input Password,  dan menambahkan state password dengan setPassword untuk mengubah nilai password

    const handleLogin = (e: FormEvent<HTMLFormElement>) => { //Fungsi yang dijalankan saat form login di-submit
        e.preventDefault(); //Mencegah halaman reload saat submit
        console.log("Login attempt:", { nim, password }); //Untuk menampilkan NIM dan Password , dibagian menu login
        // 
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
                                    placeholder="e.g., 202210370311449" //Placeholder contoh NIM
                                    value={nim} //Nilai input diambil dari state
                                    onChange={(e) => setNim(e.target.value)} //Mengubah state saat user mengetik
                                />
                            </div>

                            <div className="form-group"> {/* Grup input Password */}
                                <label>Password ?</label> {/* Label Password dengan ikon tanya */}
                                <div className="password-input-wrapper"> {/* Tempat input password untuk ikon mata */}
                                    <input 
                                        placeholder="********" //Placeholder password
                                        value={password} //Nilai input diambil dari state
                                        onChange={(e) => setPassword(e.target.value)} //Mengubah state saat user mengetik
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-submit">Sign In</button> {/* Tombol submit form */}
                            
                            <a href="#forgot" className="forgot-password">Forgot Password?</a> {/* Link lupa password */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
