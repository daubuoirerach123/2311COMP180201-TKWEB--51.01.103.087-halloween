// Chờ toàn bộ trang web tải xong rồi mới chạy code
document.addEventListener('DOMContentLoaded', () => {

    // --- Chức năng 1: Điều khiển Âm nhạc ---
    const musicBtn = document.getElementById('music-toggle-btn');
    const backgroundMusic = document.getElementById('background-music');
    const musicIcon = musicBtn.querySelector('i');

    musicBtn.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicIcon.className = 'bi bi-pause-fill';
        } else {
            backgroundMusic.pause();
            musicIcon.className = 'bi bi-play-fill';
        }
    });

    // --- Chức năng 2: Hiệu ứng xuất hiện khi cuộn trang ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2 // Xuất hiện khi 20% của mục được nhìn thấy
    });

    // Theo dõi tất cả các mục có class 'hidden'
    document.querySelectorAll('.hidden').forEach((el) => {
        observer.observe(el);
    });

});