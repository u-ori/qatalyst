<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<ul>
    <li>Qatalyst 1</li>
    <li>Qatalyst 2</li>
    <li>Qatalyst</li>
    <li>Qatalyst</li>
    <li>Qatalyst</li>
    <li>Qatalyst</li>
    <li>Qatalyst</li>
    <li>Qatalyst</li>
    <li>Qatalyst</li>
    <li>Qatalyst</li>
</ul>

<style>
    ul {
        border-width: .2rem;
        border-color: #000;
        border-style: solid;
        width: 15rem;
        height: calc(100vh - .4rem);
        resize: horizontal;
        overflow: auto;
        min-width: 7rem;
    }
    li {
        border: none;
        padding: .2rem;
        cursor: pointer;
    }
    li:hover {
        background-color: #c4a1ff;
        border: none;
        border-bottom-width: .1rem;
        border-bottom-style: solid;
    }
</style>