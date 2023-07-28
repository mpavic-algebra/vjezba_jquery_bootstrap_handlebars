
$(document).ready(function() {
  $.get("https://pokeapi.co/api/v2/pokemon-color/yellow")
    .done(render)
    .fail(function(error) {
      console.log(error);
  });

  $("#green").click(function() {
    $.get("https://pokeapi.co/api/v2/pokemon-color/green")
    .done(render)
    .fail(function(error) {
      console.log(error);
    });
  })

  $("#yellow").click(function() {
    $.get("https://pokeapi.co/api/v2/pokemon-color/yellow")
    .done(render)
    .fail(function(error) {
      console.log(error);
    });
  })

  $("#blue").click(function() {
    $.get("https://pokeapi.co/api/v2/pokemon-color/blue")
    .done(render)
    .fail(function(error) {
      console.log(error);
    });
  })

  function render(data) {
    const source = $("#pokemon-list").html();
      const template = Handlebars.compile(source);
      const context = {
        pokemon: data.pokemon_species.slice(0, 20),
        title: "Pokemons",
      };
      const html = template(context);

      $("#result").html(html);
  }

})