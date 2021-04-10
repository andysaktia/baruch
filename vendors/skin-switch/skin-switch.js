$(function() {
  $('#change-skin').on('click', function () {
    $("body").toggleClass("page-dark-mode");
    $("body").toggleClass("bg-super-white");
    $("body").toggleClass("dark-gray");
    $(".mw7.mt4.mb3.center.br2-ns.bt.bb.ba-ns").toggleClass("bg-white");
    $(".markdown-body a").toggleClass("b--white");
    $(".markdown-body a").toggleClass("whiteIm");
  });
});
