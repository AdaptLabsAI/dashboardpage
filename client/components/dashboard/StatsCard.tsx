import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  value: string;
  label: string;
  change: string;
  trend: "up" | "down";
}

export function StatsCard({ value, label, change, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col justify-between h-[120px]">
      <div className="flex items-start justify-between">
        <h3 className="text-[40px] font-bold text-dark-lighter leading-none tracking-tight">
          {value}
        </h3>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          trend === "up" ? "bg-brand-green/10" : "bg-brand-red/10"
        }`}>
          {trend === "up" ? (
            <TrendingUp className="w-5 h-5 text-brand-green" />
          ) : (
            <TrendingDown className="w-5 h-5 text-brand-red" />
          )}
        </div>
      </div>
      <div className="space-y-1">
        <h4 className="text-lg font-medium text-dark-lighter">{label}</h4>
        <p className={`text-xs font-medium ${
          trend === "up" ? "text-brand-green" : "text-brand-red"
        }`}>
          {change}
        </p>
      </div>
    </div>
  );
}
