<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
body {
  background-color: #000;
  color: white;
  margin: 0;
  height: 100vh;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
}

table {
  margin: 30px auto 100px;
  border-collapse: collapse;
  width: 90%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid var(--grid-line-color);
  transition: border-color 0.3s;
}

table:hover {
  border-color: var(--accent-color);
}

th {
  border: 1px solid rgba(0, 255, 204, 0.1);
  padding: 18px;
  font-weight: normal;
  transition: background 0.3s;
}

tr:hover th {
  background: rgba(0, 255, 204, 0.08);
  color: #fff;
}

th:first-child {
  color: var(--accent-color);
  width: 30%;
  font-family: 'Courier New', monospace;
}

footer {
  text-align: center;
  padding: 60px;
  font-size: 0.8rem;
  border-top: 1px solid var(--grid-line-color);
  background: rgba(5, 5, 5, 0.95);
}

/* リンクの動き */
header a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 5px 10px;
  position: relative;
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* 滑らかな動き */
}

header a:hover {
  color: var(--accent-color);
  transform: translateY(-3px);
  /* 少し上に浮かせる */
  text-shadow: 0 0 15px var(--accent-color);
}

/* リンクの下線の装飾 */
header a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

header a:hover::after {
  width: 100%;
}

/* プロフィール画像の動き */
header a img {
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  vertical-align: middle;
}

header a:hover img {
  transform: scale(1.15) rotate(10deg);
  box-shadow: 0 0 20px var(--accent-color);
  border-color: #fff;
}

/* リスト全体のスタイル調整 */
ul {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 40px auto;
}

ul li {
  margin-bottom: 15px;
}

/* リンクの基本スタイル */
ul li a {
  display: block;
  padding: 12px 20px;
  color: #ffffff;
  text-decoration: none !important;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid #ffffff;
  /* 左側に太めのライン */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

/* ホバー時のアニメーション */
ul li a:hover {
  color: #00ffcc;
  /* アクセントカラー */
  background: rgba(0, 255, 204, 0.1);
  border-color: #00ffcc;
  padding-left: 35px;
  /* 右に少し動くUX */
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.3);
  text-shadow: 0 0 5px rgba(0, 255, 204, 0.5);
}

/* スキャンライン（光の筋）が通り抜けるエフェクト */
ul li a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg,
      transparent,
      rgba(0, 255, 204, 0.2),
      transparent);
  transition: all 0.6s;
}

ul li a:hover::before {
  left: 100%;
}

/* --- スタイリッシュなaタグクラス --- */
.nav-link-item {
  display: block;
  position: relative;
  padding: 15px 25px;
  margin-bottom: 12px;
  color: #ffffff !important;
  text-decoration: none !important;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 3px solid #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  font-family: sans-serif;
  letter-spacing: 0.05em;
}

/* ホバー時の挙動 */
.nav-link-item:hover {
  background: rgba(0, 255, 204, 0.08);
  color: #00ffcc !important;
  border-color: rgba(0, 255, 204, 0.5);
  border-left-color: #00ffcc;
  padding-left: 35px;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
}

/* スキャンライン（光の筋）アニメーション */
.nav-link-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      rgba(0, 255, 204, 0.4),
      rgba(255, 255, 255, 0.2),
      transparent);
  transition: none;
}

/* ホバーした瞬間に光が走り抜ける */
.nav-link-item:hover::before {
  left: 100%;
  transition: all 0.6s ease-in-out;
}
</style>