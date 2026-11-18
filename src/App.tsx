import { useState } from "react";
import Landingpage from "./pages/Landingpage";
import LoginPage from "./pages/LoginPage"; //Panggil halaman login 

function App() {
  const [halamanSekarang, sethalamanSekarang] = useState("landing"); //Menyimpan sedang di halaman mana

  return ( 
    <>
      {halamanSekarang === "landing" ? ( //Kalau sedang di landing page
        <Landingpage navigatelogin={() => sethalamanSekarang("login")} /> //Tampilkan landing page, dan arahkan tombol ke halaman login
      ) : ( //Kalau sedang di halaman login
        <LoginPage onNavigateBack={() => sethalamanSekarang("landing")} /> //Tampilkan login page, dan arahkan tombol panah kembali ke landing
      )}
    </>
  );
}

export default App;