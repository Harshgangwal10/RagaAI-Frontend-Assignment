import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import { logout } from "../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { DUMMY_DASHBOARD_DATA } from "../data/dummyData";
import "../styles/Dashboard.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!user) return null;

  const { patients, doctors, appointments, clinics } = DUMMY_DASHBOARD_DATA;

  return (
    <div className="home-container">
      <Header user={user} onLogout={handleLogout} />

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back, {user.name}! Here's your healthcare statistics.</p>
        </div>

        <div className="dashboard-grid">
          <DashboardCard title="Total Patients" value={patients} type="patients" />
          <DashboardCard title="Total Doctors" value={doctors} type="doctors" />
          <DashboardCard title="Total Appointments" value={appointments} type="appointments" />
          <DashboardCard title="Active Clinics" value={clinics} type="clinics" />
        </div>
      </main>
    </div>
  );
};

export default Home;
