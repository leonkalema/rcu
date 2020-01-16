<script context="module">
import { heroStore } from "../store/index.js";

</script>

<style>

.section--hero {

  height: 85%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

}

.bg-smoke-dark {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>

{#each $heroStore  as hero }


{#if hero.pageName ===  "home"}

<div class="section-hero flex items-center bg-cover bg-bottom p-10 md:py-32 md:px-16" style="background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #ffca00 100%), url({hero.file.url});">

<div class="container text-center px-4">
<h1 class="sm:text-5xl font-serif sm:mb-12 text-4xl mb-4 ">{hero.mainTitle}</h1>

<h4 class="sm:text-2xl font-serif sm:mb-12 text-4xl mb-4 "> {hero.subTitle}</h4>


            <a rel='prefetch' href={hero.buttonLink}>
            <button  class="py-4 px-8 text-green-600 text-sm bg-white rounded-full font-bold shadow-md hover:shadow-lg">
{hero.buttonText}
            </button>
            </a>

</div>

</div>

  {/if}
{/each}
