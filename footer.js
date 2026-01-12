/**
 * このJavaScriptはほぼすべてAIによって作成されたものです
 */

// --- フッターの共通文言をここで定義 ---
const footerContent = `<p>Copyright © 2024 - 2026 さとしん All Rights Reserved.</p>`;

// 画面が読み込まれたら、footerタグを探して中身を流し込む
window.addEventListener('DOMContentLoaded', () => {
    const footers = document.querySelectorAll('footer');
    footers.forEach(f => {
        f.innerHTML = footerContent;
    });
});