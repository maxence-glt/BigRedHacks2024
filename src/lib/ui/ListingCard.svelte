<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import ExpandingArrow from './ExpandingArrow.svelte';

	export let itemImage: string;
	export let itemName: string;
</script>

<div class="flex w-[50%] flex-col gap-3 rounded-lg border py-3">
	<div class="flex flex-row items-center justify-between px-5">
		<slot name="leftAvatar">
			<Avatar.Root class="h-20 w-20">
				<Avatar.Fallback>?</Avatar.Fallback>
			</Avatar.Root>
		</slot>

		<div class="flex-1 px-3">
			<ExpandingArrow />
		</div>

		<div class="flex max-h-[50%] max-w-[40%] flex-col place-items-center justify-center gap-2">
			<img src={itemImage} alt="Item being offered" class="rounded-lg object-cover" />
			<h3 class="text-lg font-bold">{itemName}</h3>
		</div>

		<div class="flex-1 px-3">
			<ExpandingArrow />
		</div>

		<slot name="rightAvatar">
			<Avatar.Root class="h-20 w-20">
				<Avatar.Fallback class="text-xl">?</Avatar.Fallback>
			</Avatar.Root>
		</slot>
	</div>
</div>
