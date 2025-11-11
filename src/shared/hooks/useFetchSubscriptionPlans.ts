import { SubscriptionPlanProps } from "@adiba-banking-cloud/backoffice/build/typings/components/widgets/subscription_plan/SubscriptionPlan.types";
import { SubscriptionPlanSectionProps } from "../types/SubscriptionPageProps.types";

export const useFetchSubscriptionPlans = () : SubscriptionPlanSectionProps => {
    const isLoading = false;
    const hasError = false;
    const subscriptionPlans = fakeSubscriptionPlans
    const sectionTitle = "Plans"; //TODO: Translation

    return {sectionTitle, isLoading, hasError, subscriptionPlans}
}

const fakeSubscriptionPlans : SubscriptionPlanProps[] = [
    {
      title: "Standard",
      durationDays: 4,
      planPrice: "$2,500/month",
      isActive: false,
      altColor: 'altiba',
      onClick: (e) => alert('Clicked!')
    },
    {
      title: "Premium",
      durationDays: 4,
      planPrice: "$4,000/month",
      isActive: true,
      altColor: 'altiba',
      onClick: (e) => alert('Clicked!')
    },
    {
      title: "Enterprise",
      durationDays: 4,
      planPrice: "$10,000/month",
      isActive: false,
      altColor: 'altiba',
      onClick: (e) => alert('Clicked!')
    }
  ];