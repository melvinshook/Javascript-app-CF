let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    listPokemon.setAttribute('id', pokemon.name);
    listPokemon.classList.add('group-list-item');
    
    
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-dark');
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');

    
    
    
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }
   

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = []; // Loop to go through the types and add them, if there's more than 1
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');
   

    modalTitle.empty();
    modalBody.empty();
    modalHeader.empty();
 

    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img" style="width:50%">');
    imageElement.attr('src', pokemon.imageUrl);
    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');
    let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');
    let typesElement = $('<p>' + 'Types: ' + pokemon.types + '</p>');

    





    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalHeader.append(nameElement);
    
   

  

    



  }

  // search for pokemon
  function search() {
    let searchInput = document.querySelector('#search-bar');

    searchInput.addEventListener('input', function() {
      // Adds a Bootstrap class.
      let pokemonList = document.querySelectorAll('.group-list-item');
      let searchText = searchInput.value.toLowerCase();

      pokemonList.forEach(function(pokemon) {
        if (pokemon.innerText.toLowerCase().indexOf(searchText) > -1) {
          pokemon.style.display = '';
        } else {
          pokemon.style.display = 'none';
        }
      });
    });
  }


 


  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', e => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });



  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      showModal(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal,
    search: search
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


