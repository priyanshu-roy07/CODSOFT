document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Simulate job seeker login
    window.location.href = "seeker-dashboard.html";
});

document.getElementById("providerBtn").addEventListener("click", function() {
    // Simulate job provider login
    window.location.href = "provider-dashboard.html";
});

// Functionality to remove saved jobs for job seekers
const removeBtns = document.querySelectorAll(".remove-btn");
removeBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const jobCard = btn.closest(".job-card");
        jobCard.remove();
    });
});
