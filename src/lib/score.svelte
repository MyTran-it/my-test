<script lang="ts">
    export let teamName: string = 'Team'
    export let value: number = 0
    export let scoreName: string = 'score'
</script>

<div class="score__container">
    <label for="score">{teamName}</label>
    <input type="number" id="score" name={scoreName} min=0 bind:value />
</div>

<style lang="scss">
    .score__container {
        display: flex;
        align-items: center;
        gap: 1rem;

        input {
            -webkit-appearance: none; 
            appearance: none;
            outline: none;
            border: none;
            border-bottom: 1px solid black;
            max-width: 5rem;
            height: 5rem;
            font-weight: 600;
            font-size: 3rem;
        }
    }
</style>