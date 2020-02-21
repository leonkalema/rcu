<script>
import Hero from '../components/Hero.svelte';
import CTA from '../components/CTA.svelte';
import Contact from '../components/Contact.svelte';
import Fact from '../components/Fact.svelte';
import Byline from '../components/Byline.svelte';
import Projects from '../components/Projects.svelte';

// import { _ } from 'svelte-i18n'
</script>

<style>

</style>

<svelte:head>
	<title>Relief Care Uganda</title>
</svelte:head>

<Hero />
<main class="py-4 bg-rcu-yellow">


<Byline />
<Projects />
</main>

<CTA />
<Fact />
<Contact />
