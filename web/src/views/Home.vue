<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">Pila$</span>
    </md-app-toolbar>

    <md-app-drawer md-permanent="clipped">
      <md-list>

        <router-link to='/dashboard'>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>
        </router-link>

        <router-link to='/launches'>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Launches</span>
          </md-list-item>
        </router-link>

        <router-link to='/categories'>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Categories</span>
          </md-list-item>
        </router-link>

      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.md-app {
  min-height: 100vh;
  border: 1px solid rgba(#000, .12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
