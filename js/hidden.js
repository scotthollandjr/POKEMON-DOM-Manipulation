$(document).ready(function() {
  var name=prompt("Hello! What is your name?");
  $("#header").show();
  $("#header").append("<h1>Hello there, " + name + "!</h1>" + "<br>" + "<h2>Welcome to the world of pokemon! My name is OAK! People call me the POKEMON PROF!</h2>" + "<br>" + "<h4>-continue-</h4>");
  $("#header").prepend("<img src='../img/oak.png' width='400px'>");
  $("h4").parent("#header").click(function() {
    $(this).remove();
    $("#choose").show();
  });
  $("#choose").append("<h3>This world is inhabited by creatures called POKEMON! For some people, POKEMON are pets. Others use them for fights. Myself... I study POKEMON as a profession.</h3>" + "<h3>It's unsafe! Wild POKEMON live in tall grass! You need your own POKEMON for your protection. I know!</h3>" + "<h3>Here, " + name + "! There are 3 POKEMON here! I have only 3 left, but you can have one! Choose!</h3>");

  $("#choose").append("<img src='../img/pokeball.png' id='bulbasaurball' class='pokeball'><img src='../img/pokeball.png' id='charmanderball' class='pokeball'><img src='../img/pokeball.png' id='squirtleball' class='pokeball'>");

  $("img#bulbasaurball").click(function() {
    alert("Congratulations! You chose Bulbasaur!");
    $("img.pokeball").hide();
    $("#choose").hide();
    $("#starter").show();
    $("img#bulbasaur").show();
    $("#starter").append("<h3>If a wild POKEMON appears, your POKEMON can fight against it!</h3>");
    $("#starter").append("<h4>-continue-</h4>");
  });

  $("img#charmanderball").click(function() {
    alert("Congratulations! You chose Charmander!");
    $("img.pokeball").hide();
    $("#choose").hide();
    $("#starter").show();
    $("img#charmander").show();
    $("#starter").append("<h3>If a wild POKEMON appears, your POKEMON can fight against it!</h3>");
    $("#starter").append("<h4>-continue-</h4>");
  });

  $("img#squirtleball").click(function() {
    alert("Congratulations! You chose Squirtle!");
    $("img.pokeball").hide();
    $("#choose").hide();
    $("#starter").show();
    $("img#squirtle").show();
    $("#starter").append("<h3>If a wild POKEMON appears, your POKEMON can fight against it!</h3>");
    $("#starter").append("<h4>-continue-</h4>");
  });
  $("h4").parent("#starter").click(function() {
    $("#starter").hide();
    $("#tallgrass").show();
  });
});
