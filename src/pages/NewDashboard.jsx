import NewDoctorDashboard from './NewDoctorDashboard';
import NewpatientDashboard from './NewpatientDashboard';

const NewDashboard = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div>
      {user && user.role === 'doctor' ? (
        <NewDoctorDashboard user={user} />
      ) : (
        <NewpatientDashboard user={user} />
      )}
    </div>
  );
};

export default NewDashboard;
