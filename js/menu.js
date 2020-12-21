(function () {
  "use strict";

  $(function () {
    $(".menu-container").load("menu.html");
  });
  var link = document.getElementById('mycv')
  link.href = url;
  link.download = 'file.pdf';
  link.dispatchEvent(new MouseEvent('click'));
})();