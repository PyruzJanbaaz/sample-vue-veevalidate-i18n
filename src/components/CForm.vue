<script>
import '@/plugins/validation';
import {setLocale} from "@vee-validate/i18n";
import {Field, Form, ErrorMessage} from "vee-validate";

export default {
  name: "CForm",
  components: {
    Form,
    Field,
    ErrorMessage
  },
  mounted() {
    setLocale(this.$i18n.locale);
  }, methods: {
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }
  }
}

</script>

<template>
  <Form @submit="onSubmit">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 shadow p-4 mb-4">
        <div class="col-12 text-center">
          <img src="../assets/logo.png" class="logo" alt="Logo"/>
        </div>
        <div class="col-12">
          <label>{{ $t('form.name') }}</label>
          <Field class="form-control" name="name" as="input" rules="required|english|min:3"/>
          <ErrorMessage class="text-danger" name="name"/>
        </div>
        <div class="col-12">
          <label>{{ $t('form.email') }}</label>
          <Field class="form-control" name="email" as="input" rules="required|min:10|email"/>
          <ErrorMessage class="text-danger" name="email"/>
        </div>
        <div class="col-12 text-center mt-2">
          <button class="btn btn-success">{{ $t('form.button.submit') }}</button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </Form>
</template>

<style>
.logo {
  width: 4rem;
  border-radius: 5rem;
  border: 0.1rem solid #42b983;
  padding: 0.2rem;
}
</style>