<script context="module">
import { imageStore } from "../store/index.js";

</script>

{#each $imageStore  as image }
<div>

<img src={image.fields.file.url} alt={image.fields.title} />
<h5>{image.sys.id}</h5>
</div>
{/each}
