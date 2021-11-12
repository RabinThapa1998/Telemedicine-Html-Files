$(document).ready(function () {
  
    // image-uploader-code
    $("#imageUpload").change(function (data) {

        var imageFile = data.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);

        reader.onload = function (evt) {
            $('#imagePreview').attr('src', evt.target.result);
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
    });
    
    //email validator
    function validateEmail($email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test($email)
    }

    // form-validation-code
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $("#next-1").click(function(e) {
        e.preventDefault();
        $('#nameError').html('').removeClass('is-invalid')
        $('#emailError').html('')
        $('#mobileError').html('')
        $('#dateError').html('')
        $('#idnumError').html('')

        if($('#fullname').val()==''){
            $('#nameError').html('Name is required')
            return false;
        }
        else if ($('#fullname').val().length < 3){
            $('#nameError').html('Name must be of more than 3 characters')
            return false;
        }
        else if (!isNaN($('#fullname').val()))
        {
            $('#nameError').html('Numbers are not allowed')
            return false;
        }
        else if ($('#datepicker').val() == ''){
            $('#dateError').html('required');
            return false;
        }
        else if ($('#idnum').val() == ''){
            $('#idnumError').html('required');
            return false;
        }
        else if ($('#mobile').val()==''){
            $('#mobileError').html('required')
        }
        else if (isNaN($('#mobile').val())){
            $('#mobileError').html('Only numbers are allowed');
            return false;
        }
        else if ($('#mobile').val().length != 10){
            $('#mobileError').html('Mobile number must be of 10 digits');
            return false;
        }
        else if ($('#email').val() == ''){
            $('#emailError').html('Email is required');
            return false;
        }
        else if (!validateEmail($("#email").val())){
            $('#emailError').html('Email is not valid');
            return false;
        }
        
        else{
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    }
    });

    $("#next-2").click(function (e) {
        e.preventDefault();
        $('#heightError').html('')
        $('#weightError').html('')
      
        if($('#height').val()=='' ){
            $('#heightError').html('required')
            return false;
        }else if ( $('#weight').val()==''){
            $('#weightError').html('required')
            return false;
        }
        
        else{
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    }
    });

    // $("#submit").click(function () {
    //     current_fs = $(this).parent();
    //     next_fs = $(this).parent().next();
    //     //show the next fieldset
    //     next_fs.show();
    //     //hide the current fieldset with style
    //     current_fs.animate({ opacity: 0 }, {
    //         step: function (now) {
    //             // for making fielset appear animation
    //             opacity = 1 - now;

    //             current_fs.css({
    //                 'display': 'none',
    //                 'position': 'relative'
    //             });
    //             next_fs.css({ 'opacity': opacity });
    //         },
    //         duration: 500
    //     });
    //     setProgressBar(++current);
    // });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $("#submit").click(function () {
        alert('form-submitted!')
        return false;
    })
});
