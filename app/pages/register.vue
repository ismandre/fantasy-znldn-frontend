<template>
    <form>
  <fieldset>

    <label>
      First name
      <input
        name="first_name"
        placeholder="Your first name here"
        autocomplete="given-name"
      />
    </label>

    <label>
      Last name
      <input
        name="last_name"
        placeholder="Your last name here"
        autocomplete="family-name"
      />
    </label>

    <label>
      Email
      <input
        name="email"
        placeholder="Your email here"
        autocomplete="email"
      />
    </label>

    <label>
      Username
      <input
        type="text"
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
        autocomplete="password"
      />
    </label>
  </fieldset>

  <input
    type="submit"
    value="Create Account"
  />
</form>
</template>