<script lang="ts">
    let props = $props();
</script>

<button {...props} type={props.type} class={['my-button', props.class]}>{props.label}</button>

<style  lang="scss">
    .my-button {
        width: 10rem;
        height: 3rem;
        border-radius: 1rem;
    }
</style>