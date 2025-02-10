<script lang="ts">
    import Button from '$lib/button.svelte'
    
    let {
        teamName1,
        teamName2,
        team1Possibilities = [],
        team2Possibilities = [],
        onReset
    } = $props();

</script>

<div>
    <Button style="margin-bottom: 2rem" label="Undo" onclick={() => {
        onReset()
    }} />

    <div class="possibility-container">
        <div>{teamName1}</div>
        <div>{teamName2}</div>
    </div>
    <hr/>

    {#if (team2Possibilities.length === 0)}
    {#each team1Possibilities as p1 }
        <div class="possibility-container">
            <div>{p1.join(', ')}</div>
            <div>-</div>
        </div>
    {/each}
        {:else if (team1Possibilities.length === 0)}
        {#each team2Possibilities as p2 }
        <div class="possibility-container">
            <div>-</div>
            <div>{p2.join(', ')}</div>
        </div>
    {/each}
    {:else}
    {#each team1Possibilities as p1 }
        {#each team2Possibilities as p2 }
            <div class="possibility-container">
                <div>{p1.join(', ')}</div>
                <div>{p2.join(', ')}</div>
            </div>
        {/each}
    {/each}
    {/if}
    
</div>

<style>
    .possibility-container {
        display: flex; 
        justify-content: space-between; 
        width: 100%;
        padding: 1rem 0;
        align-items: center;
        > div {
            width: 50%;
        }
    }
</style>