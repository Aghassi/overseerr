import { NextPage } from 'next';
import React from 'react';
import SettingsLayout from '../../components/Settings/SettingsLayout';
import SettingsUsers from '../../components/Settings/SettingsUsers';
import useRouteGuard from '../../hooks/useRouteGuard';
import { Permission } from '../../hooks/useUser';

const SettingsUsersPage: NextPage = () => {
  useRouteGuard(Permission.ADMIN);
  return (
    <SettingsLayout>
      <SettingsUsers />
    </SettingsLayout>
  );
};

export default SettingsUsersPage;
