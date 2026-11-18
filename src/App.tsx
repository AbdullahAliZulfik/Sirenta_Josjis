import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';

// Import semua halaman
import DashboardPage from './pages/DashboardPage';
import Phase1Page from './pages/Phase1Page';
import Phase2Page from './pages/Phase2Page';
import Phase3Page from './pages/Phase3Page';
import FinalPage from './pages/Phase4Page';

/**
 * Komponen Utama Aplikasi (Root Component)
 * Mengatur Layout dan Routing halaman.
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sireta-dark flex">
        <Sidebar />
        
        <div className="flex-1 ml-64">
          <Topbar />
          
          <main className="mt-16 bg-sireta-dark min-h-[calc(100vh-4rem)]">
            <Routes>
              {/* Daftar Rute Halaman */}
              <Route path="/" element={<DashboardPage />} />
              <Route path="/phase-1" element={<Phase1Page />} />
              <Route path="/phase-2" element={<Phase2Page />} />
              <Route path="/phase-3" element={<Phase3Page />} />
              <Route path="/phase-4" element={<FinalPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;