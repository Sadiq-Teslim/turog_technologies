import { useState } from "react";

export const useSetSubscriptionAutoRenew = () => {
  const [withAutoRenew, setWithAutoRenew] = useState<boolean>(false);
  const onLabel = "ON";
  const offLabel = "OFF";
  const label = "Enable auto renew?";
  const labels = { onLabel, offLabel, label }
  
  //TODO: Confirm Modal Before Setting
  /**
   * Use useEffect to manage renew state
   * 1. Call confirm modal 
   * 2. if confirmed, update subscription API, 
   * 3. pop up toast on success
   * 4. pop up error modal on failure
   */
  return {
    withAutoRenew,
    setWithAutoRenew,
    labels
  };
};
