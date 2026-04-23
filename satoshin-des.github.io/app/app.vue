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
header NuxtLink {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.9rem;
    padding: 5px 10px;
    position: relative;
    display: inline-block;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    /* 滑らかな動き */
}

header NuxtLink:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
    /* 少し上に浮かせる */
    text-shadow: 0 0 15px var(--accent-color);
}

/* リンクの下線の装飾 */
header NuxtLink::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
}

header NuxtLink:hover::after {
    width: 100%;
}

/* プロフィール画像の動き */
header NuxtLink img {
    border-radius: 50%;
    border: 2px solid var(--accent-color);
    transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
    vertical-align: middle;
}

header NuxtLink:hover img {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 0 0 20px var(--accent-color);
    border-color: #fff;
}
</style>