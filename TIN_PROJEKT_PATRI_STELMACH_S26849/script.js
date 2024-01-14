var recipes = 
[
  {
    id: 'recipe1',
    title: 'Spaghetti Bolognese',
    ingredients: 
    [
      '500g spaghetti',
      '400g mięsa mielonego',
      '1 cebula, posiekana',
      '2 ząbki czosnku, posiekane',
      '1 puszka (400g) pomidorów krojonych',
      '1 łyżeczka suszonego oregano',
      'Sól i pieprz do smaku'
    ],
    instructions: 
    [
      'Ugotuj spaghetti zgodnie z instrukcjami na opakowaniu.',
      'Na patelni podsmaż mięso mielone na średnim ogniu.',
      'Dodaj posiekaną cebulę i czosnek, smaż, aż się zmiękną.',
      'Dodaj pomidory krojone i oregano, dopraw solą i pieprzem.',
      'Gotuj sos przez 15-20 minut.',
      'Podawaj sos na ugotowanym spaghetti.'
    ],
    image: 'pasta.jpg'
  },

  {
    id: 'recipe2',
    title: 'Pizza Margherita',
    ingredients: 
    [
      'Ciasto na pizzę',
      '1 szklanka sosu pomidorowego',
      'Świeży ser mozzarella, pokrojony w plastry',
      'Świeże liście bazylii',
      'Oliwa z oliwek',
      'Sól i pieprz do smaku'
    ],
    instructions: 
    [
      'Rozgrzej piekarnik do 220°C.',
      'Rozwałkuj ciasto na pizzę na lekko oprószonym mąką blacie.',
      'Rozprowadź sos pomidorowy na cieście.',
      'Rozłóż plastry świeżego sera mozzarella na wierzchu.',
      'Dodaj świeże liście bazylii, polej oliwą z oliwek, dopraw solą i pieprzem.',
      'Piecz w rozgrzanym piekarniku przez 12-15 minut lub do zrumienienia brzegów ciasta.'
    ],
    image: 'pizza.jpg'
  },

  {
    id: 'recipe3',
    title: 'Sałatka Cezar',
    ingredients: 
    [
      '1 główka sałaty rzymskiej',
      '100g grzanki czosnkowej',
      '50g parmezanu, startego',
      '2 łyżki sosu worcestershire',
      '2 łyżki soku z cytryny',
      '1 ząbek czosnku, przeciśnięty',
      '4 łyżki majonezu',
      'Sól i pieprz do smaku'
    ],
    instructions: 
    [
      'Rozłóż liście sałaty rzymskiej na talerzu.',
      'Posyp grzanki czosnkową i startym parmezanem na sałacie.',
      'W małej miseczce wymieszaj sos worcestershire, sok z cytryny, przeciśnięty czosnek, majonez, sól i pieprz.',
      'Polij sałatkę przygotowanym sosem.'
    ],
    image: 'cezar.jpg'
  },

  {
    id: 'recipe4',
    title: 'Kurczak w Sosie Teriyaki',
    ingredients: 
    [
      '4 filety z kurczaka',
      '1/2 szklanki sosu sojowego',
      '1/4 szklanki miodu',
      '3 łyżki octu ryżowego',
      '2 ząbki czosnku, posiekane',
      '1 łyżeczka imbiru, startego',
      '2 łyżki oleju sezamowego',
      'Sól i pieprz do smaku'
    ],
    instructions: 
    [
      'W miseczce wymieszaj sos sojowy, miód, ocet ryżowy, czosnek, imbir, olej sezamowy, sól i pieprz.',
      'Obsmaż filety z kurczaka na patelni na średnim ogniu z obu stron, aż do zarumienienia.',
      'Zmniejsz ogień i wlej przygotowany sos.',
      'Gotuj na niskim ogniu przez 10-15 minut, aż kurczak będzie gotowy i sos zgęstnieje.',
      'Podawaj z ryżem lub warzywami.'
    ],
    image: 'kurczak.jpg'
  },

  {
    id: 'recipe5',
    title: 'Pierogi Ruskie',
    ingredients: 
    [
      '500g ziemniaków, ugotowanych i zmiażdżonych',
      '200g ser twarogowy',
      '1 cebula, posiekana i podsmażona',
      'Sól i pieprz do smaku',
      'Ciasto na pierogi (lub gotowe z sklepu)'
    ],
    instructions: 
    [
      'Wymieszaj ziemniaki z serem twarogowym i podsmażoną cebulą.',
      'Dodaj sól i pieprz do smaku.',
      'Rozwałkuj ciasto na pierogi i wykrawaj kręgi.',
      'Nałóż na środek każdego kręgu łyżkę nadzienia.',
      'Zlep brzegi pieroga i gotuj w osolonym wrzątku przez około 5 minut.',
      'Podawaj z cebulą i kwaśną śmietaną.'
    ],
    image: 'pierogi.jpg'
  }
];


function showRecipeDetails(recipeId) 
{
  var recipe = recipes.find(function (r) 
  {
    return r.id === recipeId;
  });

  if (recipe) 
  {
    displayRecipeDetails(recipe);
    $('#recipe-details').slideDown();
  }
}

function displayRecipeDetails(recipe) 
{
  $('#recipe-title').text(recipe.title);

  var ingredientsList = '<h3>Składniki:</h3><ul>';
  recipe.ingredients.forEach(function (ingredient) 
  {
    ingredientsList += '<li>' + ingredient + '</li>';
  });

  ingredientsList += '</ul>';
  $('#ingredients').html(ingredientsList);

  var instructionsList = '<h3>Przygotowanie:</h3><ol>';
  recipe.instructions.forEach(function (instruction) 
  {
    instructionsList += '<li>' + instruction + '</li>';
  });

  instructionsList += '</ol>';
  $('#instructions').html(instructionsList);
}

function hideRecipeDetails() 
{
  $('#recipe-details').slideUp();
}

function showAddRecipeForm() 
{
  // Wyświetlanie formularza dodawania przepisu
  $('#add-recipe-form').slideDown();
  
  // Ukrywanie aktualnych szczegółów przepisu
  $('#recipe-details').slideUp();
}

function addCustomRecipe() 
{
  var name = $('#recipe-name').val();
  var image = $('#recipe-image').val();
  var ingredients = $('#recipe-ingredients').val().split(',').map(function (item)
   {
    return item.trim();
  });
  var instructions = $('#recipe-instructions').val().split('\n').map(function (item) 
  {
    return item.trim();
  });

  var newRecipe = 
  {
    id: 'customRecipe' + recipes.length,
    title: name,
    ingredients: ingredients,
    instructions: instructions,
    image: image
  };

  // Dodawanie nowego przepisu do listy zeby go wyswietlalo po wcisnieciu
  recipes.push(newRecipe);

  // Dodawanie nowego przepisu do pudełka
  var newRecipeHtml =
    `<div class="recipe" onclick="showRecipeDetails('${newRecipe.id}')">
      <img src="${newRecipe.image}" alt="${newRecipe.title}">
      <h2>${newRecipe.title}</h2>
    </div>`;

  $('#dynamic-recipes').append(newRecipeHtml);

  // Ukrywanie formularza po dodaniu przepisu
  $('#add-recipe-form').slideUp();

  // Zamykanie formularza
  $('#recipe-form')[0].reset();
}
