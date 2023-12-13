<script lang="ts">
  import Panes from "../layout/Panes.svelte";
  import Display from "./components/npc/Display.svelte";
  import Generator from "./components/npc/Generator.svelte";

  let output: any = '';

  function setDisplay(e: CustomEvent) {
    output = e.detail.display;
  }
</script>

<Panes>
  <svelte:component this={Generator} slot="sidebar" on:display={setDisplay}/>
  <svelte:component this={Display} slot="main" display={output}/>
</Panes>