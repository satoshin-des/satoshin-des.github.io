/**
 * このJavaScriptはほぼすべてAIによって作成されたものです
 */

window.addEventListener('load', function () {
    const loader = document.getElementById('loader-wrapper');
    const percentDisp = document.getElementById('load-percent');
    const barFill = document.getElementById('progress-fill');

    let currentProgress = 0;

    // 擬似プログレス（実際のリソース読み込みに合わせて100%まで動かす）
    const timer = setInterval(() => {
        // 進行状況をランダムに加算
        currentProgress += Math.floor(Math.random() * 8) + 2;

        if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(timer);

            // 完了したら0.5秒待ってからフェードアウト
            setTimeout(() => {
                loader.classList.add('fade-out');
            }, 500);
        }

        // UIを更新
        percentDisp.textContent = currentProgress;
        barFill.style.width = currentProgress + '%';
    }, 60);
});