import Alpine from "@alpinejs/csp";

Alpine.data("timebasedTrigger", () => ({
  init() {
    var delay = Number(this.$root.querySelector(".delay").innerText);
    var linkElement = this.$root.querySelector("a");
    if (delay && linkElement) {
      setTimeout(() => {
        linkElement.click();
      }, delay);
    }
  },
}));
