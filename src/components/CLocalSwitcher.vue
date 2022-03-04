<template>
  <label>
    <select class="form-select">
      <option @click="switchLocal(local)" v-for="local in this.$i18n.availableLocales"
              :key="local"
              :value="local"
              :selected="local === currentLocal">
        {{ local.toUpperCase() }}
      </option>
    </select>
  </label>
</template>

<script>

import {setLocale} from "@vee-validate/i18n";

export default {
  name: "CLocalSwitcher",
  data() {
    return {
      currentLocal: this.$i18n.locale.split('-')[0]
    }
  },
  methods: {
    switchLocal(_locale) {
      this.$i18n.locale = _locale;
      this.currentLocal = _locale;
      localStorage.setItem('locale', _locale);
      setLocale(_locale);
    }
  }
}
</script>

