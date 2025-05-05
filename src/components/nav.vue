<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Details</router-link> |
        <router-link to="/maps">The Lawn Club</router-link> |
        <router-link to="/guide">Guide</router-link> |
        <router-link to="/gifts">Wedding Gifts</router-link> |
    </nav>
    
</template>

<script>
</script>

<style scoped>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>