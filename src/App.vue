<template>
  <v-app>
    <Header />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
};

</script>

<style>
#top-text {
  font-size: 60px;
}
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item-animation {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
@media (max-width: 480px) {
#top-text {
  font-size: 28px;
}
#img-parallax {
  height: 250px;
}
iframe {
  width: 100%;
}
}
</style>