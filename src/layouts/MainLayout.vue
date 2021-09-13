<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="bar q-pa-sm row space-between">
        <q-toolbar-title> Chuvinha </q-toolbar-title>
        <q-btn flat label="Sair" @click="signout" />
      </div>
    </q-header>

    <q-page-container class="page">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  methods: {
    signout() {
      localStorage.clear();
      window.location.reload();
    },
  },
};
</script>

<style lang="sass" scoped>
.bar
  background-color: #111
.page
  background-color: #FFF
</style>
