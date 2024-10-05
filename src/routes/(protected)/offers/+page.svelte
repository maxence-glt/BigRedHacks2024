<script lang="ts">
	import Offer from './Offer.svelte';

	let placeholderAvatarImage = 'https://i.pravatar.cc/300';
	let placeholderAvatarFallback = 'A';

	type OfferInput = {
		name: string;
		itemName: string;
		itemImage: string;
	};

	let offers: OfferInput[] = [
		{
			name: 'Ben K.',
			itemName: 'Off-White Air Force 1s',
			itemImage:
				'https://images.stockx.com/images/Nike-Air-Force-1-Low-Off-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1608516462'
		},
		{
			name: 'Jenny L.',
			itemName: 'Yeezy 350 V2s',
			itemImage:
				'https://i.ytimg.com/vi/72oWvFUXZFM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDB2em8dcubwXHDMpymgrMRWckOTQ'
		},
		{
			name: 'Alex M.',
			itemName: 'Suit Jacket',
			itemImage:
				'https://media.istockphoto.com/id/643071026/photo/blue-male-jacket.jpg?s=612x612&w=0&k=20&c=wuoox294ly4_kpKWSwNNlMhLKGKPbJIeWypV9P09JNE='
		},
		{
			name: 'John L.',
			itemName: 'My old torn khakis',
			itemImage: 'https://i.redd.it/xpmorj05j8w51.jpg'
		},
		{
			name: 'Nancy N.',
			itemName: 'iPhone 13 Pro Max',
			itemImage: 'https://i.ebayimg.com/images/g/6U0AAOSwkw5iMjJg/s-l1200.jpg'
		},
		{
			name: 'Big Brother',
			itemName: 'A shiny new car',
			itemImage:
				'https://carwow-uk-wp-3.imgix.net/New-Lotus-Emeya-front.png?auto=format&cs=tinysrgb&fit=crop&h=&ixlib=rb-1.1.0&q=60&w=1600'
		}
	];
</script>

<div class="flex flex-col items-center justify-center gap-5 pb-10">
	{#each offers as offer}
		<Offer
			name={offer.name}
			avatarImage={placeholderAvatarImage}
			avatarFallback={placeholderAvatarFallback}
			itemName={offer.itemName}
			itemImage={offer.itemImage}
		/>
	{/each}
</div>
