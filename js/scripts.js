$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var gender = $("#gender").val();
    var favoriteColor = $("#color").val();

    var favoriteAnimal = $("#animal").val();
    if (gender === "Male" && favoriteColor === "Blue" || favoriteAnimal === "Sugar Glider" ){
      $("#result1").show();
    } else if( gender === "Male" && favoriteColor === "Red"){
     $("#result2").show();}
    //  }else if(gender === "Female" || favoriteAnimal === "Dog"){
    //     $("#result3").show();
      } else {
        $("#result4").show();
      }



  });
});
