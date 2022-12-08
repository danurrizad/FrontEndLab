import React from 'react';
import Sidenav from './Sidenav';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Sidenav >
        <Outlet />
      </Sidenav>
    </>
  );
};