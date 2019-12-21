<template>
    <h3 align="center" class="headline font-weight-bold text--primary mb-7">{{ title }}</h3>
</template>

<script>
export default {
  name: "Title",
  props: {
      title: {
          type: String,
          required: false,
      }
  }
};
</script>
