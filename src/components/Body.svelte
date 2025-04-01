<script lang="ts">
    import TimelineSection from './TimelineSection.svelte';
    import ExperienceCards from './ExperienceCards.svelte';
  </script>
  
  <section class="body-container">
    <TimelineSection />
    <ExperienceCards />
  </section>
  
  <style>
    .body-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
  </style>