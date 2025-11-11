import { BaseTableColumnProps } from "@adiba-banking-cloud/backoffice/build/typings/components/tables/simple/Simple.types";
import { PaymentMethodProps } from "@adiba-banking-cloud/backoffice/build/typings/components/widgets/payment_method/PaymentMethod.types";
import { SubscriptionPlanProps } from "@adiba-banking-cloud/backoffice/build/typings/components/widgets/subscription_plan/SubscriptionPlan.types";

interface BaseSectionProps {
  sectionTitle: string;
  isLoading: boolean;
  hasError: boolean;
}

export interface SubscriptionPlanSectionProps extends BaseSectionProps {
  subscriptionPlans: SubscriptionPlanProps[];
}

export interface SubscriptionInvoicesSectionProps extends BaseSectionProps {
  columns: BaseTableColumnProps[];
  rows: SubscriptionInvoiceItemProps[];
}

export interface PaymentMethodSectionProps extends BaseSectionProps {
  paymentMethods: PaymentMethodProps[];
}

export interface SubscriptionInvoiceItemProps {
  id: string;
  date: string;
  details: string;
  amount: string;
  status: string;
}

export interface SubscriptionAutoRenewProps {
  withAutoRenew: boolean;
  setWithAutoRenew: (check) => void;
  labels: { onLabel: string; offLabel: string; label: string };
}
