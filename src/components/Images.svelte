<script>
import { imageStore } from "../store/index.js";

</script>

{#each $imageStore  as image }

	<img src={image.fields.file.url} alt={image.fields.title} />

{/each}
