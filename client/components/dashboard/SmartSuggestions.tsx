import { useState } from "react";
import { RefreshCw } from "lucide-react";

const suggestions = [
  {
    id: 1,
    title: "Reply to Esther",
    description: "Messaged received on May 15 at 09:00 PM",
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/e85d6501670faf2f3b006560d7cd19cb0826774e?width=112",
  },
  {
    id: 2,
    title: "Run campaign on WhatsApp",
    description: "WhatsApp campaign can be run today for better reach",
    icon: "whatsapp",
  },
];

export function SmartSuggestions() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSuggestionClick = (id: number) => {
    setSelectedId(id);
    // You can add additional action handling here
    console.log(`Selected suggestion: ${id}`);
  };

  return (
    <div className="bg-white rounded-2xl p-4 h-[289px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-medium text-dark-lighter">
          Smart Suggestions
        </h3>
        <button className="flex items-center gap-1 text-sm font-medium text-dark-lighter underline hover:text-brand-green transition-colors">
          <RefreshCw className="w-5 h-5" />
          Refresh
        </button>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={suggestion.id}>
            <button
              onClick={() => handleSuggestionClick(suggestion.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                selectedId === suggestion.id
                  ? "bg-brand-green/10 border border-brand-green"
                  : "hover:bg-[#F5F5F7] border border-transparent"
              }`}
            >
              {suggestion.avatar ? (
                <img
                  src={suggestion.avatar}
                  alt={suggestion.title}
                  className="w-14 h-14 rounded-full flex-shrink-0 object-cover"
                />
              ) : (
                <div className="w-14 h-14 bg-[#F5F5F7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17.2772 1.1001H6.72281C3.61181 1.1001 1.08984 3.62206 1.08984 6.73307V17.2874C1.08984 20.3984 3.61181 22.9204 6.72281 22.9204H17.2772C20.3882 22.9204 22.9102 20.3984 22.9102 17.2874V6.73307C22.9102 3.62206 20.3882 1.1001 17.2772 1.1001Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M11.9991 4.08423C10.6362 4.08446 9.29751 4.4436 8.11757 5.12554C6.93762 5.80747 5.95809 6.78813 5.27752 7.96886C4.59695 9.14958 4.23934 10.4887 4.24068 11.8516C4.24202 13.2144 4.60226 14.5528 5.28516 15.7322L4.23047 19.7695L8.33438 18.6825C9.37421 19.2394 10.5274 19.5519 11.7061 19.5963C12.8849 19.6406 14.0582 19.4155 15.1369 18.9382C16.2156 18.4609 17.1713 17.744 17.9313 16.8419C18.6913 15.9397 19.2356 14.8762 19.5228 13.7321C19.81 12.588 19.8326 11.3935 19.5888 10.2394C19.345 9.08524 18.8412 8.0019 18.1158 7.07172C17.3905 6.14153 16.4625 5.38899 15.4026 4.87132C14.3427 4.35364 13.1787 4.08446 11.9991 4.08423Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="12"
                        y1="22.9204"
                        x2="12"
                        y2="1.1001"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00D02D" />
                        <stop offset="1" stopColor="#51FE71" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
              <div className="flex-1 min-w-0 text-left">
                <h4 className="text-base font-medium text-dark-lighter mb-1">
                  {suggestion.title}
                </h4>
                <p className="text-xs text-dark-lighter/55">
                  {suggestion.description}
                </p>
              </div>
            </button>
            {index < suggestions.length - 1 && (
              <div className="h-px bg-dark-lighter/10 my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
