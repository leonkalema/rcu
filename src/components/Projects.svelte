<script>
import { projectStore } from "../store/index.js";

</script>


<div class="px-4">
  <div class="block md:flex justify-between md:-mx-2">
  {#each $projectStore  as project }
    <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
      <div class="bg-white rounded-lg overflow-hidden shadow relative">
        <img class="h-56 w-full object-cover object-center" src="{project.file.url}" alt="{project.title}">
        <div class="p-4 h-auto md:h-40 lg:h-48">
          <a href="#" class="block text-rcu-yellow hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
          {project.projectTitle}
          </a>
          <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
          {project.projectIntro}
          </div>
          <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
          <a class="inline bg-gray-300 py-1 px-2 rounded-full bg-red-400 text-xs lowercase text-gray-700" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/each}

  </div>
</div>
