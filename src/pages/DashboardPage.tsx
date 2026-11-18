import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import ProgressStepper from '../components/dashboard/ProgressStepper';
import AnnouncementCard from '../components/dashboard/AnnouncementCard';

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <WelcomeBanner />
      <ProgressStepper />
      <AnnouncementCard />
    </div>
  );
}