<script>
import { projectStore } from "../store/index.js";

</script>


<div class="px-4">
  <div class="block md:flex justify-between md:-mx-2">
  {#each $projectStore  as project }
  <div class="mx-auto my-20 rounded max-w-sm overflow-hidden shadow-lg">
    <img class=" h-56 w-full object-cover object-center" src="{project.file.url}" alt="{project.title}">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
      {project.projectTitle}
      </div>
      <p class="text-grey-darker text-base">
      {project.projectIntro}
      </p>
    </div>

    <div class="tags px-6 py-4">
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">stars</span>
      </div>
  </div>


    {/each}

  </div>
</div>
