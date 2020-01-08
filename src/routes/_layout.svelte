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
