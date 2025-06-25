// ハンバーガー全画面メニュー
const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navOverlay.classList.toggle('active');
});

// スライドショー
const slides = document.querySelectorAll('#slideshow img');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// 自動再生（3秒）
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);