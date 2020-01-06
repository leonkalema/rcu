<script>
import Hero from '../components/Hero.svelte';
import CTA from '../components/CTA.svelte';
import Contact from '../components/Contact.svelte';
import Fact from '../components/Fact.svelte';
</script>

<style>

</style>

<svelte:head>
	<title>Relief Care Uganda</title>
</svelte:head>

<Hero />
<main class="py-4 bg-rcu-yellow">

  <div class="text-black pl-px text-center  ">

	<h2 class="heading text-4xl font-extrabold">We believe keeping children in school helps a nation thrive!</h2>

<br />

<p class="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg">
  We  work alongside vulnerable children and young people affected by social, cultural and economic disparities and their aging carers (older persons 55 years and above) to us, a child is a unique gift to humanity fully endowed with abilities; that need to be protected, provided for, and given a chance to constructively participate in the development of their society.
            </p>


						<br /><br />
	</div>


  <div class="px-4">
    <div class="block md:flex justify-between md:-mx-2">
      <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
        <div class="bg-white rounded-lg overflow-hidden shadow relative">
          <img class="h-56 w-full object-cover object-center" src="http://reliefcareuganda.ug/wp-content/uploads/2017/06/RCU9-400x300.jpg" alt="">
          <div class="p-4 h-auto md:h-40 lg:h-48">
            <a href="#" class="block text-rcu-yellow hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
            Education
            </a>
            <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
            </div>
            <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
            <a class="inline bg-gray-300 py-1 px-2 rounded-full bg-red-400 text-xs lowercase text-gray-700" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
        <div class="bg-white rounded-lg overflow-hidden shadow relative">
          <img class="h-56 w-full object-cover object-center" src="http://reliefcareuganda.ug/wp-content/uploads/2017/06/clinic.jpeg" alt="">
          <div class="p-4 h-auto md:h-40 lg:h-48">
            <a href="#" class="block text-rcu-yellow hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
            Healthcare
            </a>
            <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
            </div>
            <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
              <a class="inline bg-gray-300 py-1 px-2 rounded-full bg-red-400 text-xs lowercase text-gray-700" href="#">Read More</a>

            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
        <div class="bg-white rounded-lg overflow-hidden shadow relative">
          <img class="h-56 w-full object-cover object-center" src="http://reliefcareuganda.ug/wp-content/uploads/2017/06/AG2-400x300.jpg" alt="">
          <div class="p-4 h-auto md:h-40 lg:h-48">
            <a href="#" class="block text-rcu-yellow hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              Agricultre
            </a>
            <div class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo magni saepe cumque error quia quae sint ducimus, maiores doloremque.
            </div>
            <div class="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
            <a class="inline bg-gray-300 py-1 px-2 rounded-full bg-red-400 text-xs lowercase text-gray-700" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<CTA />
<Fact />
<Contact />
