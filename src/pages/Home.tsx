import { useEffect } from "react";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import { logout } from "../redux/slices/authSlice";
import { fetchDashboardStats } from "../redux/slices/dashboardSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const { stats, isLoading, error } = useAppSelector((state) => state.dashboard);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  if (!user) return null;

  if (isLoading) return <div className="loading">Loading dashboard data...</div>;

  if (error) return <div className="error">Error loading dashboard: {error}</div>;

  const { patients, doctors, appointments, clinics } = stats;

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
