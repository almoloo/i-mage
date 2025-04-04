import { createClientUPProvider } from "@lukso/up-provider";
import { useEffect, useState } from "react";

const provider = createClientUPProvider();

export default function useContextAccount() {
  const [contextAccounts, setContextAccounts] = useState<Array<`0x${string}`>>(
    []
  );

  useEffect(() => {
    const contextAccountsChanged = (_accounts: Array<`0x${string}`>) => {
      setContextAccounts(_accounts);
    };

    provider.on("contextAccountsChanged", contextAccountsChanged);

    return () => {
      provider.removeListener("contextAccountsChanged", contextAccountsChanged);
    };
  }, [contextAccounts]);

  return contextAccounts[0];
}
