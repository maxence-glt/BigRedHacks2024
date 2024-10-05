<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { circOut } from 'svelte/easing';
	import IntersectionObserver from 'svelte-intersection-observer';

	export const duration = 1000;

	let arrowPercentage = tweened(0, {
		duration: duration,
		easing: circOut
	});

	let element: HTMLElement;
	let intersecting: boolean;

	$: if (intersecting) {
		arrowPercentage.set(290);
	}
</script>

<IntersectionObserver once {element} bind:intersecting>
	<div class="w-[100%]" bind:this={element}>
		<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<marker
					id="arrow"
					viewBox="0 0 10 10"
					refX="5"
					refY="5"
					markerWidth="6"
					markerHeight="3"
					orient="auto-start-reverse"
					class="fill-primary"
				>
					<path d="M 0 0 L 10 5 L 0 10 z" />
				</marker>
			</defs>

			<line
				x1="10"
				y1="50"
				x2={$arrowPercentage}
				y2="50"
				stroke-width="5"
				marker-end="url(#arrow)"
				class="stroke-primary"
			/>
		</svg>
	</div>
</IntersectionObserver>
