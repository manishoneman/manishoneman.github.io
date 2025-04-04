// script.js

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  
    if (sidebar.classList.contains('active')) {
      document.addEventListener('click', closeSidebarOnClickOutside);
    } else {
      document.removeEventListener('click', closeSidebarOnClickOutside);
    }
  }
  
  function closeSidebarOnClickOutside(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.menu-toggle');
  
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('active');
      document.removeEventListener('click', closeSidebarOnClickOutside);
    }
  }
  