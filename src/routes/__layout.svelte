<script>
import Nav from "../components/nav.svelte";
</script>
<div class=" relative p-4 mx-auto">
    <Nav/>
    <slot></slot>
</div>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>