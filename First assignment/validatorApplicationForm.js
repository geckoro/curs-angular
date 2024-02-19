$(document).ready(function() {
    var Module = (function () {
        var _scrollToTop = function() {
            window.scrollTo(0, 0);
        }

        var _closeAlerts = function() {
            $('#alertSuccess').hide();
            $('#alertInfo').hide();
            $('#alertDanger').hide();
        }

        var _validate = function() {
            if (!$("#employmentType1").is(':checked') && !$("#employmentType2").is(':checked')) {
                return false;
            }

            var isValid = true;
            $(".form-control").each(function() {
                if ($.trim($(this).val()) == "") {
                    isValid = false;
                };
            });
            
            return isValid;
        };

        var _reset = function () {
            $(".form-control").each(function() {
                $(this).val("");
            });

            $('.form-check-input').prop('checked', false);
        }

        var showAlert = function(buttonId) {
            _closeAlerts();
            _scrollToTop();

            if (buttonId == 'resetButton') {
                _reset();
                $('#alertInfo').fadeIn();
                return;
            }

            var status = _validate();
            if (status == false) {
                $('#alertDanger').fadeIn();
                return;
            }
          
            $('#alertSuccess').fadeIn();
        }

        return {
            showAlert: showAlert
        }
    })();

    $('.btn').click(function(event) {
        Module.showAlert(event.target.id)
    });
});