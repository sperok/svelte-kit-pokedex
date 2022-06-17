<script>
export let FBCard;
</script>
<a style="background-image: url('{FBCard.image}'); background-size: contain; background-repeat: no-repeat; background-position: center center" 
   class=" p-4 m-2 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md hover:text-8xl hover:z-50 flex flex-col items-center" href={`/cards/${FBCard.id}`} >
    <h2 class="hover:z-50">{FBCard.name}</h2>
</a>