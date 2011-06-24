var op = (function(){
  var _this = {
  };
  return {
    handlers: {
      photoDelete: function(event) {
        var el = $(this),
          url = el.attr('href')+'.json';
          $.post(url, function(response) {
            if(response.code === 200)
              $(".photo-container-"+response.result).hide('medium', function(){ $(this).remove(); });
            else
              op.message.error('Could not delete the photo.');
          }, 'json');
          return false;
      },
      photoLink: function(event) {
        var el = this;
        if(event.type == 'click') {
          console.log(el);
        } else if(event.type == 'mouseover') {
          console.log('mousover');
        }
      },
      setupContinue: function(event) {
        var el = $(this),
          step = el.attr('data-step');
        if(step == 1) {
          $("div#setup ol#setup-steps li[class=current]").removeClass('current');
          $("div#setup ol#setup-steps li:nth-child(2)").addClass('current');
          $("div#setup #form-step-1").hide('medium');
          $("div#setup #form-step-2").show('medium');
        } else if(step == 2) {
          $("div#setup ol#setup-steps li[class=current]").removeClass('current');
          $("div#setup ol#setup-steps li:nth-child(3)").addClass('current');
          $("div#setup #form-step-2").hide('medium');
          $("div#setup #form-step-3").show('medium');
        }
      }
    },
    init: {
      attach: function() {
        $('.photo-link').live('click mouseover', op.handlers.photoLink);
        $('.photo-delete').live('click', op.handlers.photoDelete);
      }
    },
    message: {
      error: function(msg) {
        alert(msg);
      }
    }
  };
})();
