<script lang="ts">
  import { createEventDispatcher } from "svelte";
    import { LEVEL, SPECIES, SUPER } from "../types";
    import { generateNPC } from "./generate";

  const dispatch = createEventDispatcher();

  let level = "random";
  let species = "random";
  let superhero = false;
  $: levels = superhero ? SUPER: LEVEL;
  let specieTypes = SPECIES;

  function generate() {
    const npc = generateNPC(level, species,superhero);
    dispatch('display', {display: npc});
  }

</script>

<label>
  <input type="checkbox"
  on:change={() => superhero = !superhero}
  />
  <span class="label">Use Super Levels</span>
</label>

<label>
<span class="label">Level</span>
<select bind:value={level}>
  <option value="random">Random</option>
  {#each levels as level}
    <option value={level}>{level}</option>
  {/each}
</select>
</label>

<label>
  <span class="label">Species</span>
  <select bind:value={species}>
    <option value="random">Random</option>
    {#each specieTypes as race}
      <option value={race} class="capitalize">{race}</option>
    {/each}
  </select>
</label>
