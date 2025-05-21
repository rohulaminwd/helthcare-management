import React from 'react';
import Patient from '../components/Patient';

const DashboardHome = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <>
      {user && user.role === 'doctor' ? (
        <Patient user={user} />
      ) : (
        <Patient user={user} />
      )}
    </>
  );
};

export default DashboardHome;
