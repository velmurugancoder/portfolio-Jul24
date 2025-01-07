import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$NavigationScroll = NavigationScroll;

function NavigationScroll(cardRef) {
  // Use the ref name to scroll to the corresponding card
  const cardComponent = this.$refs[cardRef];
  if (cardComponent) {
    // Access the DOM element of the component instance
    const cardElement = cardComponent.$el;
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align to the top of the viewport
      });
    }
  }
}
