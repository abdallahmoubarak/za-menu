import Head from "next/head";
import UserPage from "@/components/pages/User";
import { useEffect, useState } from "react";
import Sign from "@/components/pages/Sign";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import { client } from "./_app";
import { useCurrentUser } from "@/hooks/useAuth";

export default function User() {
  const [enabled, setEnabled] = useState<boolean>(true);
  const { data: currentUser, isLoading } = useCurrentUser({ enabled });

  useEffect(() => setEnabled(Boolean(localStorage.getItem("JWT"))), []);
  useEffect(() => {
    client.setQueryData(
      ["User"],
      JSON.parse(localStorage.getItem("User") || "{}"),
    );
  }, []);

  return (
    <div>
      <Head>
        <title>User</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <div className="w-full">
        <Logo />
        {currentUser?.id ? <UserPage /> : <Sign />}
        <NavBar page="user" />
      </div>
    </div>
  );
}
