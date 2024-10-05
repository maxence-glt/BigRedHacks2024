<script lang="ts">
	import '../app.css';
	import { cn } from '$lib/utils';

	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';

	type HeaderItem = {
		title: string;
		url: string;
	};

	const title = 'OddJob';

	const headerItems: HeaderItem[] = [
		{
			title: 'Offers',
			url: '/offers'
		},
		{
			title: 'Requests',
			url: '/requests'
		}
	];
</script>

<ModeWatcher />
<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<a href="/" class="mr-6 flex items-center space-x-2">
			<span class="hidden font-bold xl:inline-block">{title}</span>
		</a>

		<nav class="flex items-center gap-6 text-sm">
			{#each headerItems as item}
				<a
					href={item.url}
					class={cn(
						'transition-colors hover:text-foreground/80',
						$page.url.pathname === item.url ? 'text-foreground' : 'text-foreground/60'
					)}>{item.title}</a
				>
			{/each}
		</nav>
	</div>
</header>

<div class="h-screen-no-header px-10"><slot /></div>
