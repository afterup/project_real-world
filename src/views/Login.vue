<template>
  <v-card width="400" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <ul v-if="error">
        <li v-for="(v,i) in error" :key="i">{{ v }}</li>
      </ul>
      <v-form>
        <v-text-field v-model="email" label="Email" prepend-icon="mdi-account-circle" />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <v-divider></v-divider>
        <v-btn @click="onSubmit" color="info">Login</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },
  computed: {
    ...mapGetters(["error"])
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("LOGIN", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "home" });
        });
    }
  }
};
</script>

<style></style>
