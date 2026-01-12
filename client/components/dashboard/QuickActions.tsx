import { Edit, Clock, TrendingUp, Link } from "lucide-react";

const actions = [
  { icon: Edit, label: "Create Post", color: "#FA8231" },
  { icon: Clock, label: "Schedule Post", color: "#0FB9B1" },
  { icon: TrendingUp, label: "View Analytics", color: "#20BF6B" },
  { icon: Link, label: "Connect Account", color: "#3867D6" },
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-2xl p-4 h-[289px]">
      <h3 className="text-2xl font-medium text-dark-lighter mb-4">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <button
            key={action.label}
            className="bg-[#F5F5F7] rounded-2xl p-4 flex flex-col items-start gap-2 hover:bg-gray-100 transition-colors"
          >
            <action.icon className="w-8 h-8" style={{ color: action.color }} />
            <span className="text-lg font-medium text-dark-lighter text-left">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
