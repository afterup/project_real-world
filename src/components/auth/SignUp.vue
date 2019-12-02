<template>
  <div class="sign-up">
    <v-app>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title class="pb-0">
          <h1>Sign Up</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="username" label="UserName" prepend-icon="mdi-account-circle" />
            <v-text-field v-model="email" label="Email" prepend-icon="mdi-account-circle" />
            <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" />
            <v-text-field
              v-model="confirmPassword"
              label="Confirm password"
              prepend-icon="mdi-lock"
            />
            <v-divider></v-divider>
            <v-btn @click="onSubmit" color="info">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("REGISTER", {
          username: this.username,
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

<style>
</style>