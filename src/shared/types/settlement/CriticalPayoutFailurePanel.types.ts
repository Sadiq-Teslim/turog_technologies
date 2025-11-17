export interface CriticalPayoutFailurePanelProps {
  icon: {
    name: "InfoCircle";
    color?: string;
  };
  title: string;
  subtitle: string;
  errorCount: number;
  blockedValue: string;
  reason: string;
  reasonPercent: string;
  actions: {
    errorLog: () => void;
    dataQualityReport: () => void;
  };
}
