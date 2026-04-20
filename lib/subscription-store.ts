import { HOME_SUBSCRIPTIONS } from "@/constants/data";
import { create } from "zustand";

interface SubscriptionStore {
  subscriptions: Subscription[];
  addSubscription(subscription: Subscription): void;
  setSubscriptions(subscriptions: Subscription[]): void;
}

export const useSubscriptionStore = create<SubscriptionStore>((set) => ({
  subscriptions: HOME_SUBSCRIPTIONS,
  addSubscription: (subcription) =>
    set((state) => ({ subscriptions: [subcription, ...state.subscriptions] })),
  setSubscriptions: (subscriptions) => set({ subscriptions }),
}));
