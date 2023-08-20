let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: 'balbasaur',
            height: 0.7,
            type: 'grass'
        },
        {
            name: 'charizard',
            height: 1.7,
            type: 'fire'
        },
        {
            name: 'zapdos',
            height: 1.6,
            type: ['electric', 'flying']
        },
        {
            name: 'hitmonchan',
            height: 1.4,
            type: 'fighting'
        }
    ];
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };

})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Squirtle', height: 1.8, type: 'Water' });
console.log(pokemonRepository.getAll());


Object.keys(pokemonList).forEach(function (poke) {
    console.log(pokemonList[poke]);
});