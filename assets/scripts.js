var unknownError = "Sorry, an unknown error occured. Please try again later.";
var botError = "This does not look like a Human Request.";
var form = $(".js-newsletter-form");

var ajaxSubmit = function(form) {
  $.ajax({
    type: "POST",
    url: form.attr("action"),
    data: form.serialize(),
    success: function() {
      var canRedirectSubscriber = form.find(".mb-subscribe-redirect-url").val();

      if (canRedirectSubscriber && canRedirectSubscriber.length) {
        window.location.href = canRedirectSubscriber;
      } else {
        var defaultMessage = $(".mb-success-message").attr("default-message");
        $(".mb-success-message").text(defaultMessage);
      }
    },
    error: function(response) {
      var response = $.parseJSON(response.responseText);
      var error =
        response && response.error ? response.error.join(",") : unknownError;

      $(".mb-error-message").text(error);
    }
  });
};

$(".mb-form").each(function() {
  $(this).validate({
    submitHandler: function(form) {
      $(".mb-message").empty();
      var isBot = $(form)
        .find(".mb-form-group-tk input")
        .val().length;
      isBot
        ? form.siblings(".mb-error-message").text(botError)
        : ajaxSubmit($(form));
      return false;
    }
  });
});
