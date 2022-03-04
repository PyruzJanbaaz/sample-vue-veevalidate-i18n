<template>
  <div class="container mt-3">
    <div class="card">
      <div class="card-header">
        <em class="float-start mt-1" :class="icon" />
        <h4 class="float-start ms-2">{{ title }}</h4>
      </div>
      <div class="card-body">
        <p class="alert alert-info">{{ body }}</p>
        <div id="form-container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CContainer",
  props: ['title', 'body', 'icon']
}
</script>
