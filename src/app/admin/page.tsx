"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWeb3 } from "@/context/web3context/useWeb3";
import AdminPanel from "./panel/AdminPanel";

export default function AdminPanelPage() {
  const { ethAccount } = useWeb3();
  const router = useRouter();

  useEffect(() => {
    if (!ethAccount) {
      router.push("/login");
    }
  }, [ethAccount, router]);

  if (!ethAccount) {
    return null;
  }

  return <AdminPanel />;
}
