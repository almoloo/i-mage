"use client";

import useContextAccount from "@/hooks/useContextAccount";

export default function Home() {
  const contextAccount = useContextAccount();

  return <div>homepage - {contextAccount}</div>;
}
