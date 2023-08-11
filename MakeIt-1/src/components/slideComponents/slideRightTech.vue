<template>
    <transition name="slide-in">
      <div class="slide-in-component" v-if="isVisible" ref="slideInComponentRef">
        <!-- Your component content here -->
        <h2>Slide In Content</h2>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const isVisible = ref(false);
  const slideInComponentRef = ref(null); // Create a ref for the DOM element
  
  const onIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  };
  
  const observer = new IntersectionObserver(onIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust this threshold as needed
  });
  
  onMounted(() => {
    if (slideInComponentRef.value) {
      observer.observe(slideInComponentRef.value);
    }
  });
  </script>
  
  <style>
  .slide-in-enter-active, .slide-in-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-in-enter, .slide-in-leave-to {
    transform: translateY(100%);
  }
  </style>
  