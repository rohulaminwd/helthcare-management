import React from 'react';
import Patient from '../components/Patient';
import Doctor from '../components/Doctor';

const DashboardHome = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <>
      {user && user.role === 'doctor' ? (
        <Doctor user={user} />
      ) : (
        <Patient user={user} />
      )}
    </>
  );
};

export default DashboardHome;
