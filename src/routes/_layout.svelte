<script context="module">
  // import { isLoading, waitLocale } from 'svelte-i18n'

  // export async function preload() {
  //   return waitLocale()
  // }
</script>

<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>

</style>

<Nav {segment} class="flex-wrap"/>

<main class='flex-1 mx-auto' >
	<slot></slot>
</main>
<Footer class="absolute inset-x-0 bottom-0" />
