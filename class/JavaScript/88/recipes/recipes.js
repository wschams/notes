/*global $*/
(function () {
    "use strict";

    var recipeElem = $('#recipe'),
        imageElem = $('#recipe img'),
        nameElem = $('#recipe h2'),
        ingredientsElem = $('#recipe ul');

    $('input[name="recipe"]').change(function (event) {
        $.getJSON(this.value + ".json", function (loadedRecipe) {
            //console.log(loadedRecipe);
            imageElem.attr('src', loadedRecipe.picture);
            nameElem.text(loadedRecipe.name);
            loadedRecipe.ingredients.forEach(function(ingredient) {
                ingredientsElem.append('<li>' + ingredient + '</li>');
            });
        });

        recipeElem.show();
    });
}());