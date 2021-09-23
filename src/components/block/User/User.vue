<template lang="pug">
.authPage
  h1 Form multiple v-model
  UserForm(
    v-model:username='form.username',
    v-model:email='form.email',
    v-model:password='form.password',
    v-model:address='form.address',
    v-model:termAndCondition='form.termAndCondition'
  )
  hr
  pre(:style='{ "text-align": "left" }') {{ JSON.stringify(form, null, 2) }}
</template>
<script>
import { reactive, watchEffect } from 'vue'
import UserForm from './UserForm.vue'

export default {
  components: { UserForm },
  setup(props, context) {
    console.log('props', props)
    console.log('context', context)

    const form = reactive({
      username: '',
      email: '',
      password: '',
      address: '',
      termAndCondition: false,
    })

    watchEffect(() => console.log(form))

    const submit = () => console.log('submit')

    return { form, submit }
  },
}
</script>
