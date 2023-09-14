"use client";

import { useSession, signOut } from "next-auth/react";
const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>DASHBOARD</h1>
      <p>Hi {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};
export default Dashboard;
