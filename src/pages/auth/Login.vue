<template>
  <div class="login__background">
    <q-card class="login__card fixed-center q-pa-sm">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="email" type="email" label="Email" standout class="q-mb-md" />
        <q-input v-model="password" type="password" label="Password" standout />
      </q-card-section>
      <q-card-actions vertical align="center">
        <q-btn label="Login" unelevated color="primary" class="login__button" @click="login" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      localStorage.setItem('token', JSON.stringify({ email, password }));
      this.$router.push({ name: 'Main' });
    },
  },
};
</script>

<style lang="sass" scoped>
.login__background
  width: 100%
  height: 100%
  position: absolute
  background-color: #555555

.login__card
  width: 400px

.login__button
  width: 150px
</style>
