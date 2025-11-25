"use client";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-2xl font-extrabold">
            Registrarinabox
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            // command="show-modal"
            // commandfor="mobile-menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer dark:text-gray-200"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              data-slot="icon"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12"></div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
      {/* <el-dialog>
          <dialog id="mobile-menu" className="m-0 p-0 backdrop:bg-transparent lg:hidden" style="right: var(--el-top-layer-scrollbar-offset, 0px);">
            <div tabindex="0" className="fixed inset-0 focus:outline focus:outline-0">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">DotMonk</span>
                    <svg className="h-12 w-auto" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <!-- Dot icon -->
                      <circle cx="15" cy="25" r="8" className="fill-indigo-600 dark:fill-indigo-500"></circle>
                      <circle cx="15" cy="25" r="3" className="fill-white dark:fill-gray-900"></circle>
                      <!-- Text -->
                      <text x="32" y="35" className="fill-gray-900 dark:fill-white" style="
                          font-family:
                            system-ui,
                            -apple-system,
                            sans-serif;
                          font-size: 24px;
                          font-weight: 600;
                        ">
                        DotMonk
                      </text>
                    </svg>
                  </a>
                  <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer dark:text-gray-200" aria-expanded="false">
                    <span className="sr-only">Close menu</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                      <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                    <div className="space-y-2 py-6"></div>
                    <div className="py-6"><a href="#contact">Contact</a></div>
                  </div>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog> */}
    </header>
  );
}
