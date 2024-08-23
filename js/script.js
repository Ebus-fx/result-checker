$(document).ready(function () {
  $("#formOne").submit(function (e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    // Slide down the story section and slide up the form container
    $(".story").slideDown();
    $(".container").slideUp();

    // Get values from the form inputs
    const personnameInput = $("input#personname").val().trim();
    const examnumberInput = $("input#examnumber").val().trim();
    const centreInput = $("input#centre").val().trim();
    const subject1Input = $("select#subject1").val();
    const subject2Input = $("select#subject2").val();
    const subject3Input = $("select#subject3").val();
    const subject4Input = $("select#subject4").val();
    const subject5Input = $("select#subject5").val();
    const subject6Input = $("select#subject6").val();
    const subject7Input = $("select#subject7").val();
    const subject8Input = $("select#subject8").val();
    const subject9Input = $("select#subject9").val();
    const grade1Input = $("select#grade1").val();
    const grade2Input = $("select#grade2").val();
    const grade3Input = $("select#grade3").val();
    const grade4Input = $("select#grade4").val();
    const grade5Input = $("select#grade5").val();
    const grade6Input = $("select#grade6").val();
    const grade7Input = $("select#grade7").val();
    const grade8Input = $("select#grade8").val();
    const grade9Input = $("select#grade9").val();
    console.log(subject1Input)
    // Populate the result section with form values
    $(".personname").text(personnameInput);
    $(".examnumber").text(examnumberInput);
    $(".centre").text(centreInput);
    $(".subject1").text(subject1Input);
    $(".subject2").text(subject2Input);
    $(".subject3").text(subject3Input);
    $(".subject4").text(subject4Input);
    $(".subject5").text(subject5Input);
    $(".subject6").text(subject6Input);
    $(".subject7").text(subject7Input);
    $(".subject8").text(subject8Input);
    $(".subject9").text(subject9Input);
    $(".grade1").text(grade1Input);
    $(".grade2").text(grade2Input);
    $(".grade3").text(grade3Input);
    $(".grade4").text(grade4Input);
    $(".grade5").text(grade5Input);
    $(".grade6").text(grade6Input);
    $(".grade7").text(grade7Input);
    $(".grade8").text(grade8Input);
    $(".grade9").text(grade9Input);
    
  });
});
