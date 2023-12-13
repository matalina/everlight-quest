<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import GenerateNpc from './pages/GenerateNPC.svelte';
  export let url = '';
</script>

<Router {url}>
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/npc">NPC</Link>
    </nav>
  </header>
  
  <div id="main" class="text-3xl font-bold underline">
    <Route path="/" component="{Home}"/>
    <Route path="/npc" component="{GenerateNpc}"/>
  </div>
  
  <footer></footer>

</Router>


<style>
</style>
