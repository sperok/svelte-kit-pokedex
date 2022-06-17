<script>
import FBCard from "../components/card.svelte";
import {tabs, fetchCards} from "../cardstore";

let searchTerm = "";
let filteredCards = [];
let filteredTabs = {};


$: {
    //console.log("Filtering: " + searchTerm)
    /*
    if(searchTerm){
        filteredCards = $cards.filter( card => card.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    else {
        filteredCards = [...$cards];
    }
    */
   filteredTabs = {...$tabs};
    
    console.log("Filtered Tabs: " + Object.keys(filteredTabs));
}

fetchCards();

</script>
<svelte:head>
	<title>Flipbook</title>
</svelte:head>

<input class="fixed top-10  w-fit rounded-md text-lg p-4 border-2 border-gray-200 dark:border-gray-700" bind:value={searchTerm} placeholder="Search">


<div class="p-4 m-4 grid gap-2 grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7   dark:border-gray-700 border-gray-200">

    {#each Object.entries(filteredTabs).sort() as [ tab, cardList]  } 
        <div class=" hover:text-blue-400">
            <h1 class="text-center text-lg">{tab}</h1>

            {#each cardList as card}
                <FBCard FBCard={card}/> 
            {/each} 
        </div>
    {/each}
</div>


<!--
<ul class="fixed top-28 nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
  role="tablist">

{#each Object.entries(filteredTabs).sort() as [ tab, cardList]  } 

<li class="nav-item" role="presentation">
    <a href="#tabs-{tab}" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-{tab}-tab" data-bs-toggle="pill" data-bs-target="#tabs-{tab}" role="tab" aria-controls="tabs-{tab}"
      aria-selected="false">{tab}</a>
  </li>
  {/each}
</ul>

<div class="">
{#each Object.entries(filteredTabs).sort() as [ tab, cardList]  } 


<div class="tab-content" id="tabs-tabContent">
    <div class="tab-pane fade" id="tabs-{tab}" role="tabpanel"
    aria-labelledby="tabs-{tab}-tab">
    {#each cardList as card}
      
      <FBCard FBCard={card}/> 
    {/each} 
  </div>


</div>
{/each} 
</div>
-->