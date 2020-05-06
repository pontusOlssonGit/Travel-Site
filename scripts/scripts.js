  $("#button2").click(function() {

    $(".div-history-expand").slideToggle("slow", function() {

    });

    if ($("#button2").val() != 'Hide') {
      $("#button2").prop('value', 'Hide');
    } else if ($("#button2").val() != 'Show') {
      $("#button2").prop('value', 'Show');
    }

  });

  $("#button1").click(function() {

    $(".div-tourist-expand").slideToggle("slow", function() {

    });

    if ($("#button1").val() != 'Hide') {
      $("#button1").prop('value', 'Hide');
    } else if ($("#button1").val() != 'Show') {
      $("#button1").prop('value', 'Show');
    }

  });
