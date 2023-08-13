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

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {
        document.write("<p>" + pokemonList[i].name + " " + "(Height:" + pokemonList[i].height + ")" + "Wow, that\'s big" + "</p>");
    } else {
        document.write("<p>" + pokemonList[i].name + " " + "(Height:" + pokemonList[i].height + ")" + "</p>");
    }
}

