import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar_Dash from '../Components/Dashboard/SideBar_Dash';
import Header_Dash from '../Components/Dashboard/Header_Dash';

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <SideBar_Dash />
      <div className="xl:col-span-5">
        <Header_Dash />
        <div className="bg-gray-300 h-[90vh] overflow-y-scroll p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
