document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  // Insert the HTML structure
  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-[100] transition-colors duration-500">
  <div class="relative z-[70] bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-sm backdrop-blur-md bg-white/90 dark:bg-slate-900/90">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-20 md:h-24 gap-4 lg:gap-8">

        <!-- Logo Section -->
        <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0">
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#ff8c61] flex items-center justify-center shadow-lg shadow-[#FF6B35]/30 transition-transform duration-300 group-hover:scale-105">
                <i class="fa-solid fa-campground text-white text-lg"></i>
            </div>
            <div class="flex flex-col">
                <span class="text-2xl font-black tracking-tight text-slate-800 dark:text-white transition-colors">
                    Kids<span class="text-[#FF6B35]">Camp</span>
                </span>
                <span class="text-[9px] tracking-[0.15em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-0.5">
                     Summer & Activity
                </span>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <!-- Changed from xl:flex to lg:flex to ensure it shows on standard laptops, added flex-1 to perfectly center it -->
        <div id="desktopNav" class="hidden lg:flex items-center justify-center text-[15px] font-bold flex-1 gap-2 lg:gap-4 xl:gap-6">
          
          <!-- Home Dropdown -->
          <div class="relative group/home">
            <button id="homeBtn" class="nav-link flex items-center space-x-1.5 px-2 py-2 transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35]">
              <span>Home</span>
              <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180 opacity-70"></i>
            </button>
            <div id="homeMenu" class="hidden absolute left-1/2 -translate-x-1/2 mt-4 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-2xl py-3 z-50 border border-gray-100 dark:border-slate-700">
              <a href="index.html" class="dropdown-link block px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700 hover:text-[#FF6B35] transition-colors">Home 1</a>
              <a href="home2.html" class="dropdown-link block px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700 hover:text-[#FF6B35] transition-colors">Home 2</a>
            </div>
          </div>

          <a href="programs.html" class="nav-link px-2 py-2 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors">Programs</a>
          <a href="age.html" class="nav-link px-2 py-2 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors">Age</a>
          <a href="schedule.html" class="nav-link px-2 py-2 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors">Schedule</a>
          <a href="safety.html" class="nav-link px-2 py-2 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors">Safety</a>
          <a href="fees.html" class="nav-link px-2 py-2 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors">Fees</a>
          <a href="contact.html" class="nav-link px-2 py-2 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors">Contact</a>

          <!-- Dashboard Dropdown -->
          <div class="relative group/dashboard">
            <button id="dashboardBtn" class="nav-link flex items-center space-x-1.5 px-2 py-2 transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-[#FF6B35] dark:hover:text-[#FF6B35]">
              <span>Dashboard</span>
              <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300 group-hover/dashboard:rotate-180 opacity-70"></i>
            </button>
            <div id="dashboardMenu" class="hidden absolute left-1/2 -translate-x-1/2 mt-4 w-48 bg-white dark:bg-slate-800 shadow-xl rounded-2xl py-3 z-50 border border-gray-100 dark:border-slate-700">
              <a href="user.html" class="dropdown-link block px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700 hover:text-[#FF6B35] transition-colors">Parent Portal</a>
              <a href="admin.html" class="dropdown-link block px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-slate-700 hover:text-[#FF6B35] transition-colors">Admin Access</a>
            </div>
          </div>
        </div>

        <!-- Desktop Action Buttons -->
        <!-- Changed to lg:flex to match the nav links -->
        <div class="relative z-[60] hidden lg:flex items-center justify-end gap-4 shrink-0">
          
          <!-- Utility Toggles -->
          <div class="flex items-center bg-slate-100/80 dark:bg-slate-800/80 rounded-full p-1 border border-slate-200 dark:border-slate-700">
            <button id="rtlToggle" class="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-white dark:hover:bg-slate-700 hover:text-[#2EC4B6] hover:shadow-sm transition-all" title="Toggle RTL">
              <i class="fa-solid fa-arrow-right-arrow-left text-xs"></i>
            </button>
            <button id="darkToggle" class="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-white dark:hover:bg-slate-700 hover:text-[#2EC4B6] hover:shadow-sm transition-all" title="Toggle Theme">
              <i id="darkIcon" class="fa-solid fa-moon text-xs"></i>
            </button>
          </div>
          
          <!-- Auth Buttons - Polished and Professional -->
          <div class="flex items-center justify-center gap-3">
              <a href="signup.html" class="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#FF6B35] text-white font-bold text-sm hover:bg-[#e85d04] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(255,107,53,0.5)]">
                  <span><i class="fa-regular fa-user"></i></span> Log In
              </a>
              <a href="signup.html" class="flex items-center justify-center px-6 py-2.5 rounded-full bg-[#2EC4B6] text-white font-bold text-sm hover:bg-[#25a99d] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(46,196,182,0.5)]">
                  Sign Up
              </a>
          </div>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="relative z-[60] lg:hidden flex items-center h-full">
          <button id="mobileBtn" class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none hover:text-[#FF6B35] transition-colors">
            <i id="mobileIcon" class="fa-solid fa-bars-staggered text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Sidebar -->
  <div id="mobileMenu" class="fixed inset-0 w-full h-[100dvh] bg-white/95 dark:bg-slate-950/95 backdrop-blur-md z-[50] flex-col px-6 pt-28 pb-20 lg:hidden hidden overflow-y-auto">
    <div id="mobileNavLinks" class="flex flex-col gap-2 text-base font-bold">
      
      <!-- Mobile Home Dropdown -->
      <div class="w-full border-b border-slate-100 dark:border-slate-800/50">
        <button id="mobileHomeBtn" class="flex items-center justify-between w-full py-4 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">
          <span>Home</span>
          <i id="mobileHomeIcon" class="fa-solid fa-chevron-down text-sm text-slate-400 transition-transform duration-300"></i>
        </button>
        <div id="mobileHomeMenu" class="hidden flex-col bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-4 overflow-hidden border border-slate-100 dark:border-slate-800">
          <a href="index.html" class="mobile-sublink block px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-800 hover:text-[#FF6B35] transition-colors">Home 1</a>
          <a href="home2.html" class="mobile-sublink block px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 hover:bg-orange-50 dark:hover:bg-slate-800 hover:text-[#FF6B35] transition-colors">Home 2</a>
        </div>
      </div>

      <a href="programs.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">Programs</a>
      <a href="age.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">Age </a>
      <a href="schedule.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">Schedule</a>
      <a href="safety.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">Safety</a>
      <a href="fees.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">Fees</a>
      <a href="contact.html" class="mobile-link py-4 border-b border-slate-100 dark:border-slate-800/50 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">Contact</a>

      <!-- Mobile Dashboard Dropdown -->
      <div class="w-full border-b border-slate-100 dark:border-slate-800/50">
        <button id="mobileDashboardBtn" class="flex items-center justify-between w-full py-4 text-slate-800 dark:text-slate-100 hover:text-[#FF6B35] transition-colors">
          <span>Dashboard</span>
          <i id="mobileDashboardIcon" class="fa-solid fa-chevron-down text-sm text-slate-400 transition-transform duration-300"></i>
        </button>
        <div id="mobileDashboardMenu" class="hidden flex-col bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-4 overflow-hidden border border-slate-100 dark:border-slate-800">
          <a href="user.html" class="mobile-sublink block px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-slate-800 hover:text-[#FF6B35] transition-colors">Parent Portal</a>
          <a href="admin.html" class="mobile-sublink block px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 hover:bg-orange-50 dark:hover:bg-slate-800 hover:text-[#FF6B35] transition-colors">Admin Access</a>
        </div>
      </div>
    </div>

    <!-- Mobile Action Buttons -->
    <div class="mt-auto pt-8 flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <button id="mobileRtlToggle" class="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl font-bold text-sm text-slate-600 dark:text-slate-300 hover:text-[#2EC4B6] transition-all">
          <i class="fa-solid fa-arrow-right-arrow-left"></i> Toggle RTL
        </button>
        <button id="mobileDarkToggle" class="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl font-bold text-sm text-slate-600 dark:text-slate-300 hover:text-[#2EC4B6] transition-all">
          <i id="mobileDarkIcon" class="fa-solid fa-moon"></i> Theme
        </button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <a href="login.html" class="w-full py-4 flex items-center justify-center rounded-2xl bg-orange-50 dark:bg-slate-800 text-[#FF6B35] font-bold text-sm hover:bg-[#FF6B35] hover:text-white transition-colors">Log In</a>
        <a href="signup.html" class="w-full py-4 flex items-center justify-center rounded-2xl bg-[#FF6B35] text-white font-bold text-sm shadow-[0_8px_20px_-6px_rgba(255,107,53,0.5)]">Sign Up</a>
      </div>
    </div>
  </div>
</nav>
`;

  /* CSS STYLES INJECTION */
  const style = document.createElement('style');
  style.textContent = `
    /* Elegant Desktop Link Indicators */
    .nav-link { position: relative; }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 100%;
      height: 3px;
      border-radius: 4px;
      background: #FF6B35;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .nav-link:hover::after, .nav-link.active::after { 
      transform: translateX(-50%) scaleX(1); 
    }
    
    .nav-link.active, .dropdown-link.active { color: #FF6B35 !important; }
    .dark .nav-link.active, .dark .dropdown-link.active { color: #FF6B35 !important; }

    .mobile-link.active, .mobile-sublink.active, #mobileHomeBtn.active, #mobileDashboardBtn.active { 
      color: #FF6B35 !important; 
    }
    .dark .mobile-link.active, .dark .mobile-sublink.active, .dark #mobileHomeBtn.active, .dark #mobileDashboardBtn.active {
      color: #FF6B35 !important;
    }
    
    /* Ensure no wrapping issues on medium desktops */
    @media (min-width: 1024px) and (max-width: 1280px) {
      #desktopNav {
        font-size: 14px;
        gap: 0.25rem;
      }
      .nav-link {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
    
    /* Display toggling guarantees for mobile menu */
    #mobileMenu.hidden { display: none !important; }
    #mobileMenu:not(.hidden) { display: flex !important; }
    body.menu-open { overflow: hidden !important; }
  `;
  document.head.appendChild(style);

  /* INTERACTION & HIGHLIGHT LOGIC */
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");

  const dashboardBtn = document.getElementById("dashboardBtn");
  const dashboardMenu = document.getElementById("dashboardMenu");

  const mobileBtn = document.getElementById("mobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileIcon = document.getElementById("mobileIcon");
  
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");

  const mobileDashboardBtn = document.getElementById("mobileDashboardBtn");
  const mobileDashboardMenu = document.getElementById("mobileDashboardMenu");
  const mobileDashboardIcon = document.getElementById("mobileDashboardIcon");

  // Highlight Current Page Logic
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');

  allNavLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');

      const parentDropdowns = [
        { menu: homeMenu, btn: homeBtn },
        { menu: dashboardMenu, btn: dashboardBtn }
      ];

      parentDropdowns.forEach(({ menu, btn }) => {
        if (menu && menu.contains(link)) {
          btn?.classList.add('active');
        }
      });

      const mobileDropdowns = [
        { menu: mobileHomeMenu, btn: mobileHomeBtn, icon: mobileHomeIcon },
        { menu: mobileDashboardMenu, btn: mobileDashboardBtn, icon: mobileDashboardIcon }
      ];

      mobileDropdowns.forEach(({ menu, btn, icon }) => {
        if (menu && menu.contains(link)) {
          btn?.classList.add('active');
          menu?.classList.remove('hidden');
          if (icon) {
            icon.style.transform = "rotate(180deg)";
            icon.classList.add("text-[#FF6B35]");
          }
        }
      });
    }
  });

  // Desktop Dropdown Toggles
  homeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    dashboardMenu?.classList.add("hidden");
    homeMenu?.classList.toggle("hidden");
    homeBtn.querySelector('i').style.transform = homeMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    if(dashboardBtn) dashboardBtn.querySelector('i').style.transform = 'rotate(0deg)';
  });

  dashboardBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    homeMenu?.classList.add("hidden");
    dashboardMenu?.classList.toggle("hidden");
    dashboardBtn.querySelector('i').style.transform = dashboardMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    if(homeBtn) homeBtn.querySelector('i').style.transform = 'rotate(0deg)';
  });

  // Mobile Submenu Toggles
  mobileHomeBtn?.addEventListener("click", () => {
    const isHidden = mobileHomeMenu.classList.toggle("hidden");
    mobileHomeIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
    mobileHomeIcon.classList.toggle("text-[#FF6B35]", !isHidden);
  });

  mobileDashboardBtn?.addEventListener("click", () => {
    const isHidden = mobileDashboardMenu.classList.toggle("hidden");
    mobileDashboardIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
    mobileDashboardIcon.classList.toggle("text-[#FF6B35]", !isHidden);
  });

  // Mobile Menu Toggle
  mobileBtn.onclick = () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("menu-open");
    
    if (isHidden) {
        mobileIcon.className = "fa-solid fa-bars-staggered text-lg";
        mobileBtn.classList.remove("text-[#FF6B35]");
    } else {
        mobileIcon.className = "fa-solid fa-xmark text-xl";
        mobileBtn.classList.add("text-[#FF6B35]");
    }
  };

  // Close menus on click outside
  document.addEventListener("click", () => { 
      homeMenu?.classList.add("hidden");
      dashboardMenu?.classList.add("hidden");
      if(homeBtn) homeBtn.querySelector('i').style.transform = 'rotate(0deg)';
      if(dashboardBtn) dashboardBtn.querySelector('i').style.transform = 'rotate(0deg)';
  });

  // Theme Logic
  const themeToggles = [document.getElementById("darkToggle"), document.getElementById("mobileDarkToggle")];

  const updateIcons = (isDark) => {
    const iconClass = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    if (document.getElementById("darkIcon")) document.getElementById("darkIcon").className = iconClass + " text-xs";
    if (document.getElementById("mobileDarkIcon")) document.getElementById("mobileDarkIcon").className = iconClass;
  };

  themeToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("kidscamp-theme", isDark ? "dark" : "light");
    updateIcons(isDark);
  }));

  // Check saved theme preference on load
  if (localStorage.getItem("kidscamp-theme") === "dark") {
    document.documentElement.classList.add("dark");
    updateIcons(true);
  }

  // RTL Logic
  const rtlToggles = [document.getElementById("rtlToggle"), document.getElementById("mobileRtlToggle")];

  rtlToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    document.documentElement.setAttribute("dir", isRtl ? "ltr" : "rtl");
    localStorage.setItem("kidscamp-rtl", isRtl ? "ltr" : "rtl");
  }));

  // Check saved RTL preference on load
  if (localStorage.getItem("kidscamp-rtl") === "rtl") {
    document.documentElement.setAttribute("dir", "rtl");
  }
});