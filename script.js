document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.digestingBtn').addEventListener('click', function() {
        var audio = document.getElementById('hoverSound');
        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = 'stage1.html'; // Replace 'newPage.html' with your target URL
        }, 500); // Delay matches animation duration
        audio.play().catch(error => {
            console.error("Audio play failed:", error);
            // Optionally, handle the error, e.g., by showing a message to the user
        });
    });
});
