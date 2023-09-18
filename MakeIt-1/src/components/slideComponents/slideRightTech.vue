<template>
  <div class="slide-in-section" :class="{ 'active': isVisible }">

    This content should be slid in

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'SlideInSection',
  props: {
    threshold: {
      type: Number,
      default: 0.3, // Adjust this threshold as needed
    },
  },
  setup(props) {
    const isVisible = ref(false);

    const checkVisibility = () => {
      const rect = document
        .querySelector('.slide-in-section')
        ?.getBoundingClientRect();

      if (rect) {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        isVisible.value = rect.top <= windowHeight * (1 - props.threshold);
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', checkVisibility);
      checkVisibility();
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkVisibility);
    });

    return {
      isVisible,
    };
  },
});
</script>

<style scoped>
.slide-in-section {

  height: 10rem;
  background-color: red;

  transition: transform 0.5s ease;
  transform: translateX(-100%);
}

.slide-in-section.active {
  transform: translateX(0);
}
</style>
