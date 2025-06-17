import pageScroll from "scrollNav";

export default defineNuxtPlugin((nuxtApp) => {
  const pageScroll = function pageScroll(hash) {
    const scrollTarget = document.getElementById(`id-${hash}`);
    const topOffset = document.querySelector(".header").offsetHeight;

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return {
    provide: {
      pageScroll: pageScroll,
    },
  };
});
