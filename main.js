// ハンバーガー全画面メニュー
const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navOverlay.classList.toggle('active');
});

// スライドショー
// まずは画像を全部選択できるよう、#slideshiwの中にあるimg要素を選択
const slides = document.querySelectorAll('#slideshow img');
let current = 0; // 今表示している画像の番号を覚えておく
// 画像は配列になっていて番号は0,1,2..と続いています。

// スライドを切り替える関数
function showSlide(index) {
  slides.forEach((slide, i) => { // 全部の画像に対して順番処理
    slide.classList.toggle('active', i === index); 
    // i === index のときだけactiveというクラス名をつける
  });
}

// ボタン処理
document.getElementById('prev').addEventListener('click', () => {
  // 前の画像にする、つまりcurrentを1つ減らす
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

document.getElementById('next').addEventListener('click', () => {
  // 次の画像にする、つまりcurrentを1つ増やす
  current = (current + 1) % slides.length;
  showSlide(current);
});
// ここで出てくる% slides.length は、最後まで行ったら最初に戻るようにさせること（ボタンでのループ）

// 自動再生（3秒）
// 先週やりましたね、setInterval()は同じ処理を永遠に繰り返す関数
setInterval(() => {
  current = (current + 1) % slides.length; // 永遠にループさせる
  showSlide(current);
}, 3000); // 3000は3秒
