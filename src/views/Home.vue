<template>
  <CContainer :title="$t('title.home')" :body="$t('content')" icon="ri-home-smile-line"/>
</template>

<script>
import CContainer from "@/components/CContainer";

export default {
  name: "HomePage",
  components: {CContainer}
}
</script>
