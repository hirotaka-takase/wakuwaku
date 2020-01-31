<template>
    <div id="top-title" align="center" >
        <h3 class="wf-roundedmplus1c d-inline-block mb-7">{{ title }}</h3>
    </div>
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

<style>
#top-title h3 {
    border-bottom: #ffa72d 3px solid;
    font-size: 1.8rem !important;
    padding-bottom: 3px;
    color: #696969;
    line-height: 30px;
}
</style>