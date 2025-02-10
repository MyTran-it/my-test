<script lang="ts">
    import Possibility  from "$lib/possibility.svelte";
    import Score from "$lib/score.svelte";
    import Button from "$lib/button.svelte";

    import { applyAction, deserialize } from '$app/forms';
    /** @type {import('./$types').PageProps} */
    let { form } = $props();
    
    const LIMIT_API = 40;

    let score1: number = $state(6)
    let score2: number = $state(3)

    async function submit(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement}) {
        event.preventDefault()
        
        if(score1 > LIMIT_API || score2 > LIMIT_API) {
            alert('Score too high. Please modify!')
            return;
        }

        if (score1 === 0 && score2 === 0) {
            alert('Both scores are 0. Please modify yours scores')
            return;
        }

        const data = new FormData(event.currentTarget)

        const response = await fetch(event.currentTarget.action, {
            method: 'POST',
			body: data
        })

       	/** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await response.text());

        if (result.status !== 200) {
            handleReset()
            alert('Impossible to calcul')
        }

        applyAction(result)
    }

    function handleReset() {
        score1 = 0
        score2 = 0 
        form = null
    }
    
</script>

<div class="container">
    <h1 >American football</h1>
    
    {#if form?.success}
        <Possibility
            teamName1="Team X" 
            teamName2="Team Y" 
            team1Possibilities={form.possibility1} 
            team2Possibilities={form.possibility2} 
            onReset={handleReset} />
    {:else}
        <form method="POST" onsubmit={submit}>
            <div class="score__display">
                <Score teamName="Team X" scoreName="score1" bind:value={score1}/>
                <hr class="divide__line"/>
                <Score teamName="Team Y" scoreName="score2" bind:value={score2}/>
            </div>
            
            <Button label="Ask Possibility API" style="margin: 2rem 0;" type="submit" />
        </form>
    {/if}
</div>


<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
    }

    .score__display {
        display: flex;
        justify-content: space-between;
    
        .divide__line {
            margin : 0;
        }
    }
</style>