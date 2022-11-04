<script>
	import { Button } from '$lib';
</script>

<article class="prose lg:prose-xl">
	<div class="p-2">
		<h2>Colors</h2>
		<Button>Button</Button>
		<Button color="primary">Primary</Button>
		<Button color="secondary">Secondary</Button>
		<Button color="accent">Accent</Button>
		<Button color="info">Info</Button>
		<Button color="success">Success</Button>
		<Button color="error">Error</Button>
		<Button color="ghost">Ghost</Button>
	</div>
	<div class="p-2">
		<h2>Types</h2>
		<Button>Default</Button>
		<Button style="outline">Outline</Button>
		<Button style="square" icon="alarm" />
		<Button style="circle" icon="alarm" />
		<Button icon="alarm">Start</Button>
		<Button icon="alarm" iconEnd>End</Button>
		<Button style="link">Link</Button>
	</div>
	<div class="p-2">
		<h2>Sizes</h2>
		<Button size="xsmall">XSmall</Button>
		<Button size="small">Small</Button>
		<Button size="medium">Medium</Button>
		<Button size="large">Large</Button>
		<Button size="xsmall" style="outline">Outline</Button>
		<Button size="small" style="outline">Outline</Button>
		<Button size="medium" style="outline">Outline</Button>
		<Button size="large" style="outline">Outline</Button>
	</div>
	<div class="p-2">
		<Button size="xsmall" style="square" icon="alarm" />
		<Button size="small" style="square" icon="alarm" />
		<Button size="medium" style="square" icon="alarm" />
		<Button size="large" style="square" icon="alarm" />
		<Button size="xsmall" style="circle" icon="alarm" />
		<Button size="small" style="circle" icon="alarm" />
		<Button size="medium" style="circle" icon="alarm" />
		<Button size="large" style="circle" icon="alarm" />
	</div>
	<div class="p-2">
		<h2>States</h2>
		<Button>Default</Button>
		<Button loading>Button</Button>
		<Button active>Active</Button>
		<Button noAnimation>No Animation</Button>
	</div>
</article>
