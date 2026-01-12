import { Search, Bell } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { SmartSuggestions } from "@/components/dashboard/SmartSuggestions";
import { GetSupport } from "@/components/dashboard/GetSupport";
import { UpcomingPosts } from "@/components/dashboard/UpcomingPosts";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-[284px] min-h-screen">
        {/* Header */}
        <div className="bg-white h-[88px] rounded-tl-3xl flex items-center justify-between px-4">
          <div className="flex items-center gap-1">
            <span className="text-2xl text-dark-lighter/55 font-normal tracking-tight">
              Welcome back,
            </span>
            <span className="text-2xl text-dark-lighter font-medium tracking-tight">
              Sophia Adam
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#F5F5F7] rounded-2xl px-4 py-4 w-[300px]">
              <Search className="w-6 h-6 text-dark-lighter flex-shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-sm text-dark-lighter/55 placeholder:text-dark-lighter/55 w-full"
              />
            </div>
            
            <button className="w-14 h-14 bg-[#F5F5F7] rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Bell className="w-6 h-6 text-dark-lighter" />
            </button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 px-4 mt-4">
          <StatsCard value="05" label="Total Posts" change="01% from last month" trend="down" />
          <StatsCard value="16%" label="Engagement" change="07% from last month" trend="up" />
          <StatsCard value="27%" label="Reach" change="02% from last month" trend="up" />
          <StatsCard value="10%" label="Growth" change="05% from last month" trend="up" />
        </div>
        
        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-4 px-4 mt-4 pb-4">
          {/* Profile Section - spans 3 columns */}
          <div className="col-span-3">
            <ProfileSection />
          </div>
          
          {/* Recent Activity - spans 6 columns */}
          <div className="col-span-6">
            <RecentActivity />
          </div>
          
          {/* Upcoming Posts - spans 3 columns */}
          <div className="col-span-3 row-span-2">
            <UpcomingPosts />
          </div>
          
          {/* Quick Actions - spans 3 columns */}
          <div className="col-span-3">
            <QuickActions />
          </div>
          
          {/* Smart Suggestions - spans 3 columns */}
          <div className="col-span-3">
            <SmartSuggestions />
          </div>
          
          {/* Get Support - spans 3 columns */}
          <div className="col-span-3">
            <GetSupport />
          </div>
        </div>
      </div>
    </div>
  );
}
