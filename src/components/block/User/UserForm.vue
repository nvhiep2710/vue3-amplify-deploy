<template lang="pug">
.form
  .fieldset
    label Username
    input.input(
      :value='username',
      type='text',
      placeholder='Your Name',
      @input='$emit("update:username", $event.target.value)'
    )
  .fieldset
    label Email
    input.input(
      :value='email',
      type='email',
      required,
      placeholder='Email',
      @input='$emit("update:email", $event.target.value)'
    )
  .fieldset
    label Password
    input.input(
      :value='password',
      type='password',
      :minLength='8',
      required,
      placeholder='Password',
      @input='$emit("update:password", $event.target.value)'
    )
  .fieldset
    label Address
    input.input(
      :value='address',
      type='address',
      required,
      placeholder='Address',
      @input='$emit("update:address", $event.target.value)'
    )
  .termAndCondition
    label Term and Condition
    input.input(
      :value='termAndCondition',
      type='checkbox',
      required,
      placeholder='Term and Condition',
      @input='$emit("update:termAndCondition", $event.target.checked)'
    )
</template>
<script>
export default {
  props: {
    username: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    address: { type: String, default: '' },
    termAndCondition: { type: Boolean, default: false },
  },
}
</script>
<style lang="scss" scoped>
.form {
  width: 500px;
  margin: 0 auto;
  padding: 10px 0;
  > .fieldset {
    display: grid;
    grid: auto-flow min-content / 130px 1fr;
    gap: 10px;
    padding-bottom: 10px;

    > label {
      justify-self: start;
      align-self: start;
      margin-top: 10px;
    }
  }
  > button {
    float: right;
    margin: 10px 0;
  }
}
</style>
