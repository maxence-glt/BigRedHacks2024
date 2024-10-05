<!-- routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="h-screen-no-header flex items-center justify-center overflow-hidden">
	<h1 class="tracking-light text-5xl font-extrabold">Hi.</h1>
</div>

<form method="post" use:enhance>
	<button>Sign out</button>
</form>
