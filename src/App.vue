<template>
  <div id="app" class="container">
    <header>
      <a href="#" @click="$router.back()" class="btn btn--main">Go Back</a>
      <nav>
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/quotes">Random Quotes</RouterLink>
        <RouterLink to="/contact">contact</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}
nav {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 45px;
}
nav a {
  font-size: 1.5rem;
  text-decoration-color: transparent;
  text-transform: uppercase;
  letter-spacing: -1%;
  font-weight: 700;
  color: black;
  transition: all 0.3s ease-in-out;
}
nav a:hover {
  color: purple;
  text-decoration-color: purple;
}
.btn--main {
  background-color: blueviolet;
  padding: 1rem 2rem;
  color: white;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  height: auto;
  border-radius: 16px;
}
.btn--main:hover {
  background-color: #b7e8f9;
  color: black;
}
.author {
  font-style: italic;
  color: #555;
  margin-top: 5px;
}
</style>

