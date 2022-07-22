function _getPokeMonInfo() {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

    try {
        fetch(pokemonUrl).then(function(data){
            data.json().then(function(results){
                console.log(results.results[0])
            })
        });
    } catch (err) {
        
    }
}

_getPokeMonInfo();






 /* */






    const first = function(data){
        console.log(data.json());
    }


    //second promise

    const second =function(result)
        {
            console.log(result,result);
        }

   

    try{

        fetch(url).then(first).then(second)

    }
    catch(err)
    {

    }