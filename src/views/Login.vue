<template>
  <div class="login">
    <h1>This is a login page</h1>

    <form class="form">
      <div class="form-section">
        <label>Login</label>
        <input type="text" name="email" />
      </div>
      <div class="form-section">
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div class="form-submit--container">
        <input class="submit-btn" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.form {
  width: 450px;
  margin: 0 auto;
  box-shadow: 1px 1px 5px #333;
  padding: 20px 40px;
}

.form-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    width: 20%;
    text-align: left;
    font-weight: 600;
  }

  input {
    flex-grow: 1;
    display: block;
    padding: 4px;
    border-radius: 3px;
    border: 1px solid #333;
  }
}

.form-submit--container {
  display: flex;
  justify-content: flex-end;
}
</style>
