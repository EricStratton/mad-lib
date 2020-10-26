$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = {value: $("input#person1").val(), class: $(".person1")};
    const person2Input = {value: $("input#person2").val(), class: $(".person2")};
    const animalInput= {value: $("input#animal").val(), class: $(".animal")};
    const exclamationInput ={value: $("input#exclamation").val(), class: $(".exclamation")};
    const verbInput = {value: $("input#verb").val(), class:$(".verb")};
    const nounInput = {value: $("input#noun").val(), class:$(".noun")};

    const inputs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    console.log(inputs);
    

    inputs.forEach(function(input) {
      $(input.class).text(input.value);
    })

    $("#story").show();
  });
});