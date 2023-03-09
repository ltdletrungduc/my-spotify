import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <header>HEADER HERE</header>
      <main>
        <Outlet />
      </main>
      <div>MUSIC PLAYER</div>
    </>
  );
}
export default MainLayout;