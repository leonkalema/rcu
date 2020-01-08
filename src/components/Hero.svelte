<script context="module">
import { heroStore } from "../store/index.js";
</script>

<style>

.section--hero {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #ffca00 100%), url('https://malaikamedia.com/wp-content/uploads/2015/12/DSC_38161-600x900.jpg');
  height: 75%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

}
</style>
{#each $heroStore  as hero }
{#if hero.fields.pageName ===  "home"}
<section class="section--hero min-h-screen bg-cover bg-no-repeat bg-bottom  bg-fixed flex flex-col items-center justify-center">
          <div class="container text-center px-4">
              <h1 class="sm:text-5xl font-serif sm:mb-12 text-4xl mb-4 ">{hero.fields.mainTitle}</h1>

              <h4 class="sm:text-2xl font-serif sm:mb-12 text-4xl mb-4 "> {hero.fields.subTitle}</h4>

     {hero.fields.title}
              <a rel='prefetch' href={hero.fields.buttonLink}>
              <button  class="py-4 px-8 text-green-600 text-sm bg-white rounded-full font-bold shadow-md hover:shadow-lg">
{hero.fields.buttonText}
              </button>
              </a>
          </div>
      </section>
      {/if}
{/each}
