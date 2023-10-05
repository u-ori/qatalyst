<script>
    let openSea = async () => {
        try {
            // @ts-ignore
            let directory = await window.showDirectoryPicker({
                startIn: 'desktop'
            });

            for await (const entry of directory.values()) {
                let newEl = document.createElement('div');
                newEl.innerHTML = `<strong>${entry.name}</strong> - ${entry.kind}`;
                document.body.append(newEl);
            }
        } catch(e) {
            console.log(e);
        }
    }
</script>

<div id="main">
    <img src="../canvas.png" alt="">
    <h1>Quanta</h1>
    <p id="version">Version 0.0.1</p>
    <div class="option">
        <div>
            <h2>Open a folder as a sea</h2>
            <p>You can use a existing folder to convert into a Quanta sea</p>
        </div>
        <button on:click={openSea}>Open</button>
    </div>
    <div class="divider"></div>
    <div class="option">
        <div>
            <h2>Create a new sea</h2>
            <p>Create a new Quanta sea under a folder</p>
        </div>
        <button>Create</button>
    </div>
</div>

<style>
    img {
        width: 10vw;
        margin-left: auto;
        margin-right: auto;
        filter: brightness(0) saturate(2000%) contrast(2000%);
    }
    #main {
        height: 75vh;
        width: 33vw;
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
        margin-top: 2rem;
        display: inline-block;
        font-family: 'Rubik', sans-serif;
        font-weight: 900;
        font-size: 4rem;
        text-align: center;
        line-height: 4rem;
    }
    #version {
        text-align: center;
        margin-bottom: 3rem;
    }
    .divider {
        height: 1px;
        background-color: #000;
        margin: 1rem;
    }
    button {
        height: 2rem;
        background: #e3dff2;
        border-color: #000;
        border-width: 2px;
        border-style: solid;
        border-radius: .5rem;
        box-shadow: 2px 3px;
        cursor: pointer;
    }
    .option {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .option > div {
        max-width: 20rem;
    }
    .option > div > p {
        text-align: left;
    }
    .option > button {
        margin: auto;
        margin-right: 0;
        width: 6rem;
    }
</style>