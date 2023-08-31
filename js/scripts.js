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

    function addListItem(pokemon) {
        let newVar = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('poke-button');
        listItem.appendChild(button);
        newVar.appendChild(listItem);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Squirtle', height: 1.8, type: 'Water' });
console.log(pokemonRepository.getAll());





pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);

});