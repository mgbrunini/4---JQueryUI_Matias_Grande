$(document).ready(function(){
  $(".fichaRoja").draggable({
    revert: 'invalid'
  });
  $(".fichaNegra").draggable({
    revert: 'invalid'
  });
  $(".negro").droppable({
    accept: function (element) {
      if (element.hasClass("fichaRoja") || element.hasClass("fichaNegra")) {
        return false;
      }
      return true;
    }
  });
  $(".blanco").droppable({
    accept: function (element) {
      if (element.hasClass("fichaRoja") || element.hasClass("fichaNegra")) {
        return true;
      }
      return false;
    }
  });
})
