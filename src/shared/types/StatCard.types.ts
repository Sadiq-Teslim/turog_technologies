export interface StatCardIcon {
  name: "TrendUp" | "MoneySend" | "Warning2" | "Clock";
  color?: string;
}

export interface StatCardProps {
  title: string;
  icon?: StatCardIcon;
  value: string | number;
  subValue?: string | number;
}
