
        // Set your target date and time here
        const targetDate = new Date("November 4, 2024 23:59:59").getTime();
      
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            // Hoodie is released
            if (distance < 0) {
                document.getElementById("days").textContent = "00";
                document.getElementById("hours").textContent = "00";
                document.getElementById("minutes").textContent = "00";
                document.getElementById("seconds").textContent = "00";
                clearInterval(countdownInterval);
                document.getElementById("akram").classList.remove("hidden");
                return;
            }

            // Calculate remaining time
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update countdown display
            document.getElementById("days").textContent = String(days).padStart(2, '0');
            document.getElementById("hours").textContent = String(hours).padStart(2, '0');
            document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
            document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
        }

        // Update the countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);