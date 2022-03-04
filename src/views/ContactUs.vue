<template>
  <CContainer :title="$t('title.contact')" :body="$t('content')" icon="ri-contacts-line"/>
  <teleport to="#form-container">
    <CForm/>
  </teleport>
</template>

<script>
import CContainer from "@/components/CContainer";
import CForm from "@/components/CForm";

export default {
  name: "ContactUs",
  components: {CForm, CContainer}
}
</script>

