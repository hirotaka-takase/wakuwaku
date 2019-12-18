<template>
    <h3 align="center" class="display-1 text--primary mb-10">{{ title }}</h3>
</template>

<script>
export default {
  name: "Title",
  props: {
      title: {
          type: String
      }
  }
};
</script>
