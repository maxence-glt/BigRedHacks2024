<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import ListingCard from '$lib/ui/ListingCard.svelte';

	export let name: string;
	export let avatarImage: string;
	export let avatarFallback: string;

	export let itemName: string;
	export let itemImage: string;
</script>

<ListingCard {itemImage} {itemName}>
	<div slot="leftAvatar" class="flex flex-col items-center gap-1">
		<Avatar.Root class="h-20 w-20">
			<Avatar.Image src={avatarImage} alt={name} />
			<Avatar.Fallback>{avatarFallback}</Avatar.Fallback>
		</Avatar.Root>

		<p class="font-extrabold">{name}</p>
	</div>
</ListingCard>
