// Show popup on load
window.addEventListener("load", () => {
  document.getElementById("popup").style.display = "flex";
});

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.querySelector(".menu-toggle");
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});

// Explore button scroll
document.querySelectorAll('.explore-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' });
  });
});

// Close popup with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("popup").style.display = "none";
    document.getElementById("sidebar").classList.remove("active");
  }
});



  // 🔢 Animate stats counter
  const counters = document.querySelectorAll('.stat h3');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;

      const inc = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });


// Form Submission write 

