export function ProfileSection() {
  return (
    <div className="bg-gradient-to-b from-white to-brand-green rounded-2xl p-8 h-[395px]">
      <div className="flex items-center gap-3 mb-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f84a6552b38fe282daf9d3b4e991b18b11bd5706?width=160"
          alt="Sophia Adam"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h3 className="text-2xl font-medium text-dark-lighter">
            Sophia Adam
          </h3>
          <p className="text-dark-lighter/55 text-base">Black Rust Corp.</p>
        </div>
        <div className="ml-auto bg-white rounded-full px-3 py-2 flex items-center gap-1">
          <svg className="w-[14px] h-[14px]" viewBox="0 0 14 14" fill="none">
            <path
              d="M10.6609 9.61815C12.2262 6.62732 12.2262 3.24347 10.6609 2.06012C9.09555 0.876763 6.55767 2.34201 4.99235 5.33284C3.42703 8.32367 3.42703 11.7075 4.99235 12.8909C6.55764 14.0742 9.09555 12.609 10.6609 9.61815Z"
              fill="url(#paint0)"
            />
            <defs>
              <linearGradient
                id="paint0"
                x1="3.97624"
                y1="8.8765"
                x2="9.46523"
                y2="-0.630672"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BA5C25" />
                <stop offset="0.2216" stopColor="#FFC538" />
                <stop offset="1" stopColor="#FFA538" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xs font-semibold text-dark-lighter">8090</span>
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" fill="#F7B731" opacity="0.2" />
            <path
              d="M13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10Z"
              fill="#F7B731"
            />
          </svg>
        </div>
      </div>

      <div className="inline-flex px-3 py-2 bg-white rounded-full mb-6">
        <span className="text-[10px] font-semibold uppercase text-dark-lighter tracking-tight">
          Creator
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-medium text-dark-lighter">
              Social Accounts
            </h4>
            <button className="flex items-center gap-1 text-sm font-medium text-dark-lighter underline">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="10"
                  cy="10"
                  r="8"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path
                  d="M13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10Z"
                  fill="currentColor"
                />
              </svg>
              Connect more
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#61FD7D] to-[#2BB826] flex items-center justify-center">
                <span className="text-white text-xl font-bold">W</span>
              </div>
              <div>
                <p className="text-sm font-medium text-dark-lighter">
                  +1 23 456 7890
                </p>
                <p className="text-xs text-dark-lighter/55">
                  WhatsApp Business
                </p>
              </div>
            </div>

            <div className="h-px bg-dark-lighter/10" />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2AABEE] to-[#229ED9] flex items-center justify-center">
                <span className="text-white text-xl font-bold">T</span>
              </div>
              <div>
                <p className="text-sm font-medium text-dark-lighter">
                  +1 23 456 7890
                </p>
                <p className="text-xs text-dark-lighter/55">
                  Telegram for business
                </p>
              </div>
            </div>

            <div className="h-px bg-dark-lighter/10" />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFDB73] via-[#FB832E] to-[#4264DB] flex items-center justify-center">
                <span className="text-white text-xl font-bold">I</span>
              </div>
              <div>
                <p className="text-sm font-medium text-dark-lighter">
                  @weareblackrust
                </p>
                <p className="text-xs text-dark-lighter/55">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
