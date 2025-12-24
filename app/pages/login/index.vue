<template>
<form>
  <fieldset>
    <label>
      Username
      <input
        name="username"
        placeholder="Your username here"
        autocomplete="username"
      />
    </label>
    <label>
      Password
      <input
        type="password"
        name="password"
        placeholder="Your password here"
        autocomplete="current-password"
      />
      <small id="password-helper">
        Forgot your password?
      </small>
    </label>
  </fieldset>

  <input
    type="submit"
    value="Login"
  />

  <small id="registration-helper">
    Don't have an account? <a href="/register">Register</a>
  </small>
</form>
</template>

<style>
#registration-helper {
  text-align: center;
  display: block;
}
</style>