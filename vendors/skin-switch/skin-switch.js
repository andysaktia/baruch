$(function() {
  $('#change-skin').on('click', function () {
    $("body").toggleClass("page-dark-mode");
    $("body").toggleClass("bg-super-white");
    $("body").toggleClass("dark-gray");
    $("body div.mb7").toggleClass("bg-white");
    $(".markdown-body a").toggleClass("b--black");
    $(".markdown-body a").toggleClass("white");
  });
});
