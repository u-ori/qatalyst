<script>
    import {width} from '$lib/utils/device.js';
</script>
<svelte:window bind:innerWidth={$width} />
<slot></slot>