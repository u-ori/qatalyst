import {writable, derived} from 'svelte/store';

export const width = writable(0);
export const device = derived(width, (width) => {
    if (width > 600) {
        return 'desktop';
    // } else if (width > 420) {
    //     return 'tablet';
    } else {
        return 'mobile';
    }
});