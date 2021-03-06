   $(document).ready(function () {

       $("#survey").on("submit", function (event) {
           event.preventDefault();
           var userInput = {
               name: $("#name").val(),
               photo: $("#photo").val(),
               scores: [$("#q1").val(),
                   $("#q2").val(),
                   $("#q3").val(),
                   $("#q4").val(),
                   $("#q5").val(),
                   $("#q6").val(),
                   $("#q7").val(),
                   $("#q8").val(),
                   $("#q9").val(),
                   $("#q10").val()
               ]
           };
           $.post("/api/user", userInput, function (data) {
               $("#matchName").text(data.name);
               $("#matchPic").attr("src", data.photo);
               $('#friendsModal').modal('toggle')
           });

       });
       
       $("#playAgain").on("click", function (event) {
           event.preventDefault();
           $('#survey').trigger("reset");
       })
   });