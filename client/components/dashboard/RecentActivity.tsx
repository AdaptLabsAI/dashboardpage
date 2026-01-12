const activities = [
  {
    name: "Robert Fox",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/f3c4c947fac77f05d1d38eac3298b4e83302d304?width=112",
    message:
      "Track performance metrics across all channels with customizable, real-time dashboards.",
    time: "5:30 PM",
  },
  {
    name: "Ronald Richards",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/1c96b3019e956683093692b612989a6eef7f173d?width=112",
    message:
      "Evaluate quarterly outcomes and adjust strategies with performance benchmarks and goal assessments.",
    time: "4:41 PM",
  },
  {
    name: "Esther Howard",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/e85d6501670faf2f3b006560d7cd19cb0826774e?width=112",
    message:
      "Conduct a thorough annual review to set objectives for the upcoming year based on comprehensive data analysis.",
    time: "Yesterday",
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl p-4 h-[395px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-medium text-dark-lighter">
          Recent Activity
        </h3>
        <button className="px-6 py-4 border border-dark-lighter/15 rounded-xl text-base text-dark-lighter hover:bg-gray-50 transition-colors">
          Go to Inbox
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index}>
            <div className="flex items-start gap-3">
              <img
                src={activity.avatar}
                alt={activity.name}
                className="w-14 h-14 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-medium text-dark-lighter">
                    {activity.name}
                  </h4>
                  <span className="text-xs text-dark-lighter/55">
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm text-dark-lighter/55 line-clamp-2">
                  {activity.message}
                </p>
              </div>
            </div>
            {index < activities.length - 1 && (
              <div className="h-px bg-dark-lighter/10 my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
