import "../styles/DashboardCard.css";

interface DashboardCardProps {
  title: string;
  value: number;
  type?: 'patients' | 'doctors' | 'appointments' | 'clinics';
}

const DashboardCard = ({
  title,
  value,
  type,
}: DashboardCardProps) => {
  return (
    <div className={`dashboard-card ${type || ''}`}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-value">{value.toLocaleString()}</p>
      </div>
      </div>
    
  );
};

export default DashboardCard;
