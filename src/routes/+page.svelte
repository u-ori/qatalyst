<script>
    let recentSeas = ["C:/Sea"]
</script>

<div>
    <h1>Quanta</h1>
    {#each recentSeas as location}
        <a href="">{location}</a>
    {/each}
    <button>Make a new Sea</button>
    <button>Open a Sea</button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        background-color: #c4a1ff;
        border-color: #000;
        border-width: 2px;
        border-style: solid;
        border-radius: 1rem;
        padding: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 4px 6px;
    }
    h1 {
        font-family: 'Rubik', sans-serif;
        font-weight: 900;
        font-size: 5vw;
    }
    a {
        text-align: center;
        font-family: 'Rubik', sans-serif;
    }
    button {
        font-family: 'Rubik', sans-serif;
    }
</style>