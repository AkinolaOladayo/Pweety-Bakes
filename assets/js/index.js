const email = $('#email');
const message = $('#message');

$('#form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'form.php',
        data: $('#form').serialize(),
        success: function() {
            swal({
                title: "Thank You!",
                text: 'Order received, will get back to you soon.',
                icon: "success",
                button: "Ok",
            })
        },
        error: function() {
            swal({
                title: "Oops!",
                text: 'An error occured. Your order has not been submitted.',
                icon: "warning",
                button: "Ok",
            })
        },
        complete:function(){
            $('#form').each(function(){
                this.reset(); 
            });
       }
    })
})