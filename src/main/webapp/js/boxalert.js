jQuery(document).ready(function() {
$(".alert .toggle-alert").click(function(){
  $(this).closest(".alert").slideUp();
  return false;
});
});