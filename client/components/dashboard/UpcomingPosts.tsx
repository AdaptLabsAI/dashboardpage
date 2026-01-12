import { useState } from "react";
import { LayoutGrid, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "Tech Conference",
    description: "We are excited to be attending the tech conference next month.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e2b1c74ce946d15d18c5b7ace4f0982b43694786?width=160",
    platform: "Instagram",
    date: "05 May, 2025",
    time: "04:00 PM",
    tags: ["#conference", "#tech", "#networking"],
  },
  {
    title: "Webinar Series",
    description: "Don't miss our upcoming webinar series focusing on emerging trends in technology.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e2b1c74ce946d15d18c5b7ace4f0982b43694786?width=160",
    platform: "LinkedIn",
    date: "20 July, 2025",
    time: "01:00 PM",
    tags: ["#webinar", "#trends", "#education"],
  },
];

// Calendar posts data with platform indicators
const calendarData = {
  month: "May",
  year: "2025",
  days: [
    // Week 1
    { date: 27, isCurrentMonth: false },
    { date: 28, isCurrentMonth: false },
    { date: 29, isCurrentMonth: false },
    { date: 30, isCurrentMonth: false },
    { date: 1, platforms: ["WhatsApp", "Telegram", "Instagram", "Messenger", "LinkedIn", "Email", "SMS"] },
    { date: 2, platforms: [] },
    { date: 3, platforms: [] },
    // Week 2
    { date: 4, platforms: [] },
    { date: 5, platforms: [] },
    { date: 6, platforms: [] },
    { date: 7, platforms: [] },
    { date: 8, platforms: [] },
    { date: 9, platforms: [] },
    { date: 10, platforms: ["WhatsApp", "Telegram"] },
    // Week 3
    { date: 11, platforms: [] },
    { date: 12, platforms: [] },
    { date: 13, platforms: [] },
    { date: 14, platforms: ["Email", "SMS"] },
    { date: 15, platforms: [] },
    { date: 16, platforms: [] },
    { date: 17, platforms: [] },
    // Week 4
    { date: 18, platforms: [] },
    { date: 19, platforms: [] },
    { date: 20, platforms: [] },
    { date: 21, platforms: [] },
    { date: 22, platforms: [] },
    { date: 23, platforms: [] },
    { date: 24, platforms: [] },
    // Week 5
    { date: 25, platforms: ["WhatsApp", "Instagram", "Messenger"] },
    { date: 26, platforms: [] },
    { date: 27, platforms: [] },
    { date: 28, platforms: [] },
    { date: 29, platforms: [] },
    { date: 30, platforms: [] },
    { date: 31, platforms: [] },
  ],
};

const platformColors: Record<string, string> = {
  WhatsApp: "#20BF6B",
  Telegram: "#45AAF2",
  Instagram: "#FC427B",
  Messenger: "#4B7BEC",
  LinkedIn: "#0FB9B1",
  Email: "#8854D0",
  SMS: "#FA8231",
};

export function UpcomingPosts() {
  const [view, setView] = useState<"list" | "calendar">("list");

  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green/90 to-brand-dark-green rounded-2xl" />
      
      {/* Content card */}
      <div className="relative mt-14 bg-white rounded-2xl p-4 h-[636px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-medium text-dark-lighter">Upcoming Posts</h3>
          <div className="flex items-center gap-3 px-4 py-3 border border-dark-lighter/15 rounded-full bg-white">
            <button
              onClick={() => setView("list")}
              className="transition-colors"
              aria-label="List view"
            >
              <LayoutGrid
                className={`w-6 h-6 ${
                  view === "list" ? "text-brand-green" : "text-dark-lighter/40"
                }`}
              />
            </button>
            <div className="w-px h-6 bg-[#D9D9D9]" />
            <button
              onClick={() => setView("calendar")}
              className="transition-colors"
              aria-label="Calendar view"
            >
              <Calendar
                className={`w-6 h-6 ${
                  view === "calendar" ? "text-brand-green" : "text-dark-lighter/40"
                }`}
              />
            </button>
          </div>
        </div>
        
        {view === "list" ? (
          <div className="space-y-4 overflow-y-auto max-h-[520px]">
            {posts.map((post, index) => (
              <div key={index} className="bg-[#F5F5F7] rounded-xl p-3">
                <div className="flex gap-2 mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-medium text-dark-lighter mb-1">{post.title}</h4>
                    <p className="text-sm text-dark-lighter/55 line-clamp-2 leading-[18px]">
                      {post.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-dark-lighter mb-3">
                  <div className="flex items-center gap-1">
                    {post.platform === "Instagram" ? (
                      <div className="w-4 h-4 rounded bg-gradient-to-br from-[#FFDB73] via-[#FB832E] to-[#4264DB]" />
                    ) : (
                      <div className="w-4 h-4 rounded bg-[#0077B7]" />
                    )}
                    <span>{post.platform}</span>
                  </div>
                  <div className="w-px h-4 bg-black/10" />
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="w-px h-4 bg-black/10" />
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>{post.time}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white rounded-full text-xs text-dark-lighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[520px]">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button className="p-0 hover:opacity-70 transition-opacity">
                <ChevronLeft className="w-6 h-6 text-dark-lighter" />
              </button>
              <h4 className="text-sm font-medium text-dark-lighter uppercase tracking-tight">
                {calendarData.month} {calendarData.year}
              </h4>
              <button className="p-0 hover:opacity-70 transition-opacity">
                <ChevronRight className="w-6 h-6 text-dark-lighter" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="mb-6">
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div
                    key={day}
                    className="text-xs font-medium text-dark-lighter/55 text-center py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Date cells */}
              <div className="grid grid-cols-7 gap-1">
                {calendarData.days.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-[44/55] rounded bg-[#F5F5F7] p-2 flex flex-col items-center justify-between ${
                      day.isCurrentMonth === false ? "opacity-40" : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-dark-lighter text-right w-full">
                      {String(day.date).padStart(2, "0")}
                    </span>
                    {day.platforms && day.platforms.length > 0 && (
                      <div className="flex flex-wrap gap-0.5 justify-center max-w-full">
                        {day.platforms.slice(0, 7).map((platform, idx) => (
                          <div
                            key={idx}
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: platformColors[platform] }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 items-center">
              {Object.entries(platformColors).map(([platform, color]) => (
                <div key={platform} className="flex items-center gap-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-medium text-dark-lighter">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Floating Create Post Button */}
      <div className="absolute bottom-6 right-6">
        <button className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-green to-brand-dark-green shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center group hover:scale-105 transition-transform">
          <div className="absolute inset-0 rounded-full bg-brand-green/40 blur-[20px]" />
          <div className="relative">
            <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
              <path d="M32.5 2.5V22.5C32.5 23.163 32.2366 23.7989 31.7678 24.2678C31.2989 24.7366 30.663 25 30 25H20.5578L18.4203 28.7406C18.2016 29.1231 17.8857 29.4411 17.5046 29.6622C17.1234 29.8833 16.6906 29.9998 16.25 29.9998C15.8094 29.9998 15.3766 29.8833 14.9954 29.6622C14.6143 29.4411 14.2984 29.1231 14.0797 28.7406L11.9422 25H2.5C1.83696 25 1.20107 24.7366 0.732233 24.2678C0.263392 23.7989 0 23.163 0 22.5V2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H30C30.663 0 31.2989 0.263392 31.7678 0.732233C32.2366 1.20107 32.5 1.83696 32.5 2.5Z" fill="white" fillOpacity="0.9"/>
            </svg>
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
              <path d="M6.19222 10.3808L6.70415 9.20819C7.1598 8.16472 7.97985 7.33406 9.00278 6.87999L10.4119 6.25448C10.8599 6.05562 10.8599 5.40385 10.4119 5.20499L9.04676 4.59901C7.99752 4.13326 7.16277 3.27185 6.71495 2.19276L6.19636 0.943134C6.00392 0.479404 5.36318 0.479405 5.17075 0.943134L4.65215 2.19274C4.20432 3.27185 3.36955 4.13326 2.32032 4.59901L0.95516 5.20499C0.507135 5.40385 0.507134 6.05562 0.95516 6.25448L2.36433 6.87999C3.38726 7.33406 4.20732 8.16472 4.66293 9.20819L5.17489 10.3808C5.37168 10.8315 5.9954 10.8315 6.19222 10.3808Z" fill="url(#paint0_linear)"/>
              <defs>
                <linearGradient id="paint0_linear" x1="7" y1="-1" x2="7" y2="15" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00C853"/>
                  <stop offset="1" stopColor="#00C853"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </button>
      </div>
      
      {/* Create Post Text */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="white" opacity="0.2"/>
          <path d="M12 8v8m-4-4h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span className="text-base font-medium">Create Post</span>
      </div>
    </div>
  );
}
