var saveBtn = document.getElementById("#saveBtn");
  var textarea = document.getElementById("#textarea1")

$(document).ready(function() {

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#saveBtn1").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea1").attr("data-store"), textarea1.value);
  });
  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#saveBtn2").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textarea2").attr("data-store"), textarea2.value);
  });


});
  





var currentday = new Date();
  var format='LLLL';
  var result= moment(currentday).format(format);
    // test flag
   test = false;

    // get times from moment
   $("#currentday").append(result);

