/**
 * このJavaScriptはほぼすべてAIによって作成されたものです
 */

window.addEventListener('load', function () {
    const canvas = document.getElementById('cyberCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let offset = 0; // アニメーションの進み具合

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    function draw() {
        // 画面をクリア（真っ黒に）
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 格子の色と太さ
        ctx.strokeStyle = 'rgba(0, 255, 204, 0.5)'; // ネオンミント（少し透けさせる）
        ctx.lineWidth = 1;

        const spacing = 60; // 格子の間隔
        offset += 2; // 移動スピード（大きくすると速くなる）
        if (offset >= spacing) offset = 0;

        // --- 縦の線を描画 ---
        for (let x = (canvas.width / 2) % spacing; x < canvas.width; x += spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // --- 横の線を描画（奥から手前へ流れる動き） ---
        for (let y = offset; y < canvas.height; y += spacing) {
            // 手前に来るほど線を少し濃くすると奥行きが出ます
            const opacity = (y / canvas.height) * 0.5;
            ctx.strokeStyle = `rgba(0, 255, 204, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // 画面上部にグラデーションをかけて、奥が暗い演出をする
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
        gradient.addColorStop(0, 'rgba(0,0,0,1)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

        requestAnimationFrame(draw);
    }

    draw();
});