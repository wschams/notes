/*global $, pcs*/
(function () {
    "use strict";

    var recipeNameDisplay = $("h1");
    var imgDisplay = $("img");
    var recipeDisplay = $("label");
    var ul = $("ul");
    var h2 = $("h2");

    $.get("getRecipeNames.php", function (loadedRecipes) {
        JSON.parse(loadedRecipes).forEach(function (element) {
            recipeDisplay.append('<input type="radio" name = "recipe" value="' + element.name + '" />' + element.name);
            $("input").on("change", function (event) {
                if ($("input:checked")) {
                    recipeNameDisplay.html(element.name);
                    imgDisplay.attr('src', element.url);
                    imgDisplay.attr('alt', element.name);
                    displayRecipe(element.name);
                }
                event.stopImmediatePropagation();
            });
        });
    }).fail(function (jqxhr) {
        pcs.messagebox.show("Error: " + jqxhr.responseText);
    });

    function displayRecipe(r) {
        $.post("getRecipe.php", { recipe: r }, function (recipeData) {
            ul.empty();
            h2.html('Ingredients');
            JSON.parse(recipeData).forEach(function (element) {
                ul.append('<li>' + element.ingredients + '</li>');
            });
        }).fail(function (jqxhr) {
            pcs.messagebox.show("Error: " + jqxhr.responseText);
        });
    }
}());