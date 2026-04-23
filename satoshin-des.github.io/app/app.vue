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
</style>