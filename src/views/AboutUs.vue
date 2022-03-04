<template>
  <CContainer :title="$t('title.about')" :body="$t('content')" icon="ri-building-3-line"/>
</template>

<script>
import CContainer from "@/components/CContainer";
export default {
  name: "AboutUs",
  components:{
    CContainer
  }
}
</script>

