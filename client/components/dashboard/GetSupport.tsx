import { FileText, MessageCircle, Ticket, ChevronRight } from "lucide-react";

const supportOptions = [
  { icon: FileText, label: "Document" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Ticket, label: "Ticket" },
];

export function GetSupport() {
  return (
    <div className="bg-white rounded-2xl p-4 h-[289px]">
      <h3 className="text-2xl font-medium text-dark-lighter mb-4">Get Support</h3>
      
      <div className="space-y-4">
        {supportOptions.map((option, index) => (
          <div key={option.label}>
            <button className="w-full flex items-center justify-between group hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#F5F5F7] rounded-full flex items-center justify-center">
                  <option.icon className="w-5 h-5 text-dark-lighter" />
                </div>
                <span className="text-base font-medium text-dark-lighter">{option.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-dark-lighter group-hover:translate-x-1 transition-transform" />
            </button>
            {index < supportOptions.length - 1 && (
              <div className="h-px bg-dark-lighter/10 my-4 mx-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
