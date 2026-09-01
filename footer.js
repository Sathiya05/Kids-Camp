// KidsCamp - Summer & Activity Program Footer[cite: 3]
document.addEventListener("DOMContentLoaded", () => { //[cite: 3]
  const footer = document.getElementById("footer"); //[cite: 3]
  if (!footer) return; //[cite: 3]

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800"> <!--[cite: 3] -->
  
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 grid-cols-1 md:grid-cols-12"> <!--[cite: 3] -->

    <!-- Brand & Bio Section -->
    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8"> <!--[cite: 3] -->
    
               <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0"> <!--[cite: 3] -->
                    <div class="w-11 h-11 rounded-xl bg-[#FF6B35] flex items-center justify-center shadow-lg shadow-[#FF6B35]/30 transition-transform group-hover:scale-105">
                        <i class="fa-solid fa-campground text-white text-lg"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xl font-heading font-black tracking-tight text-slate-900 dark:text-white transition-colors">
                            Kids<span class="text-[#FF6B35]">Camp</span>
                        </span>
                        <span class="text-[9px] tracking-[0.15em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-1">
                            Summer & Activity
                        </span>
                    </div>
                </a>
                <br>
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed mb-6"> <!--[cite: 3] -->
        We provide a safe, fun and engaging environment where kids explore, learn new skills, make friends, and create unforgettable summer memories!
      </p>
      
      <!-- Social Media Icons -->
      <div class="mt-8 flex gap-3"> <!--[cite: 3] -->
        <a href="#" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white dark:hover:bg-[#FF6B35] dark:hover:text-white shadow-sm">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
        <a href="#" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white dark:hover:bg-[#FF6B35] dark:hover:text-white shadow-sm">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
        <a href="#" target="_blank" class="social-icon w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white dark:hover:bg-[#FF6B35] dark:hover:text-white shadow-sm">
          <i class="fa-brands fa-youtube text-lg"></i>
        </a>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="md:col-span-4 lg:col-span-2"> <!--[cite: 3] -->
      <h3 class="text-sm font-heading font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#2EC4B6]">Quick Links</h3> <!--[cite: 3] -->
      <ul class="space-y-3 text-sm font-semibold"> <!--[cite: 3] -->
        <li><a href="index.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Home</a></li>
        <li><a href="about.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">About Us</a></li>
        <li><a href="programs.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Programs</a></li>
        <li><a href="activities.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Activities</a></li>
        <li><a href="gallery.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Gallery</a></li>
      </ul>
    </div>

    <!-- Programs Links -->
    <div class="md:col-span-4 lg:col-span-2"> <!--[cite: 3] -->
      <h3 class="text-sm font-heading font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#2EC4B6]">Programs</h3> <!--[cite: 3] -->
      <ul class="space-y-3 text-sm font-semibold"> <!--[cite: 3] -->
        <li><a href="programs.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Day Camp</a></li>
        <li><a href="programs.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Sports Camp</a></li>
        <li><a href="programs.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Art Camp</a></li>
        <li><a href="programs.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">Adventure Camp</a></li>
        <li><a href="programs.html" class="footer-link block text-slate-600 dark:text-slate-400 transition-all duration-300">STEM Camp</a></li>
      </ul>
    </div>

    <!-- Contact Info Section -->
    <div class="md:col-span-4 lg:col-span-4"> <!--[cite: 3] -->
      <h3 class="text-sm font-heading font-black mb-6 uppercase tracking-widest text-slate-900 dark:text-white border-b-2 inline-block pb-2 border-[#2EC4B6]">Contact Us</h3> <!--[cite: 3] -->
      <p class="text-sm font-medium text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"> <!--[cite: 3] -->
        Have questions about our programs or registration? Get in touch with our team today!
      </p>

      <ul class="space-y-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
        <li class="flex items-start gap-3 group">
            <i class="fa-solid fa-phone text-[#FF6B35] mt-1 group-hover:scale-110 transition-transform"></i> 
            <a href="tel:+919876543210" class="hover:text-[#FF6B35] transition-colors">+91 98765 43210</a>
        </li>
        <li class="flex items-start gap-3 group">
            <i class="fa-solid fa-envelope text-[#FF6B35] mt-1 group-hover:scale-110 transition-transform"></i> 
            <a href="mailto:info@kidscamp.com" class="hover:text-[#FF6B35] transition-colors">info@kidscamp.com</a>
        </li>
        <li class="flex items-start gap-3 group">
            <i class="fa-solid fa-location-dot text-[#FF6B35] mt-1 group-hover:scale-110 transition-transform"></i> 
            <span>123 Camp Way, <br>Chennai, India 600001</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Bottom Copyright Bar -->
  <div class="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500"> <!--[cite: 3] -->
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500 dark:text-slate-500"> <!--[cite: 3] -->
      
      <p>© ${new Date().getFullYear()} KidsCamp Summer & Activity Program. All rights reserved.</p> <!--[cite: 3] -->

      <div class="flex gap-6"> <!--[cite: 3] -->
        <a href="#" class="hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors duration-300">Privacy Policy</a>
        <a href="#" class="hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES
  =============================== */
  const footerStyles = document.createElement('style'); //[cite: 3]
  footerStyles.textContent = `
    .footer-link:hover {
      color: #FF6B35 !important; /* Vibrant Coral Orange */
      transform: translateX(6px);
    }
    
    .dark .footer-link:hover {
      color: #FF6B35 !important;
    }

    [dir="rtl"] .footer-link:hover {
      transform: translateX(-6px);
    }
  `;
  document.head.appendChild(footerStyles); //[cite: 3]

});