$(document).ready(function() {
    if($('[ajax="True"]').length){
        $('[ajax="True"]').each(function(index) {

            if(!$('[form_element]')[index]){
                var data_form = $('[ajax]')[index].attributes['ajax_data'].nodeValue;
            }else{
                var data_form = new FormData($($('[ajax]')[index].attributes['form_element'].nodeValue)[0]);
                if (!!$('[file_element]')[index]) {
                    file_name = $($('[ajax]')[index].attributes['file_element'].nodeValue)[0].attributes['name'].nodeValue;
                    formData.append(file_name, $($('[ajax]')[index].attributes['file_element'].nodeValue)[0].files[0]);
                }
            }
            
            if(!$('[if_click="False"]')[index]){
                var id = $('[ajax]')[index].attributes['if_click'].nodeValue;
                $(id).click(function(e){
                    $.ajax({
                        type: $('[ajax]')[index].attributes['ajax_type'].nodeValue,
                        url: $('[ajax]')[index].attributes['ajax_url'].nodeValue,
                        data: data_form,
                        success: function(response) {
                            $($('[ajax]')[index].attributes['ajax_response'].nodeValue).html(response);
                        }
                    })
                    // .done(function() {
                    //   console.log("success");
                    // })
                    .fail(function(error) {
                        $($('[ajax]')[index].attributes['ajax_response'].nodeValue).html(error.statusText);
                    });
                });
            }else{
                $.ajax({
                    type: $('[ajax]')[index].attributes['ajax_type'].nodeValue,
                    url: $('[ajax]')[index].attributes['ajax_url'].nodeValue,
                    data: data_form,
                    success: function(response) {
                        $($('[ajax]')[index].attributes['ajax_response'].nodeValue).html(response);
                    }
                })
                // .done(function() {
                //   console.log("success");
                // })
                .fail(function(error) {
                    $($('[ajax]')[index].attributes['ajax_response'].nodeValue).html(error.statusText);
                });
            }
        });
    }
});
