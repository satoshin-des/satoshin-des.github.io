/**
 * このJavaScriptはほぼすべてAIによって作成されたものです
 */

// --- 1. ロード画面のHTMLを定義 ---
const loaderHTML = `
  <div id="loader-wrapper">
    <div class="loader-inner">
      <div class="sigma-spinner">Σ</div>
      <div class="loading-label">
        ロード中... <span id="load-percent">0</span>%
      </div>
      <div class="progress-track">
        <div id="progress-fill"></div>
      </div>
    </div>
  </div>
`;

// --- 2. 画面が読み込み開始されたら即座に実行 ---
(function () {
    // HTMLをbodyの先頭に挿入
    document.addEventListener("DOMContentLoaded", () => {
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
        startLoadingAnimation();
    });

    function startLoadingAnimation() {
        const loader = document.getElementById('loader-wrapper');
        const percentDisp = document.getElementById('load-percent');
        const barFill = document.getElementById('progress-fill');

        let currentProgress = 0;

        const timer = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 8) + 2;

            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(timer);

                setTimeout(() => {
                    loader.classList.add('fade-out');
                    // 完全に消えたら要素自体を削除してメモリを節約
                    setTimeout(() => loader.remove(), 800);
                }, 500);
            }

            if (percentDisp) percentDisp.textContent = currentProgress;
            if (barFill) barFill.style.width = currentProgress + '%';
        }, 60);
    }
})();