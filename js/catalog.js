$( function() {
    $(".products__filter-pricerange").slider({
        range: true,
        animate: "slow",
        min: 0,
        max: 8200,
        values: [0, 5000],

        slide: function( event, ui ) {
        $(".products__filter-pricefrom").val(ui.values[0]);
        $(".products__filter-priceto").val(ui.values[1]);
        }
    });

    $(".products__filter-pricefrom").val($(".products__filter-pricerange").slider("values", 0));
    $(".products__filter-priceto").val($(".products__filter-pricerange").slider("values", 1));

    $(document).focusout(function() {
        let
        input_left = $(".products__filter-pricefrom").val().replace(/[^0-9]/g, ''),    
        opt_left = $(".products__filter-pricerange").slider("option", "min"),
        where_right = $(".products__filter-pricerange").slider("values", 1),
        input_right = $(".products__filter-priceto").val().replace(/[^0-9]/g, ''),    
        opt_right = $(".products__filter-pricerange").slider("option", "max"),
        where_left = $(".products__filter-pricerange").slider("values", 0); 
        if (input_left > where_right) { 
            input_left = where_right; 
        }
        if (input_left < opt_left) {
            input_left = opt_left; 
        }
        if (input_left == "") {
        input_left = 0;    
        }        
        if (input_right < where_left) { 
            input_right = where_left; 
        }
        if (input_right > opt_right) {
            input_right = opt_right; 
        }
        if (input_right == "") {
        input_right = 5000;    
        }    
        $(".products__filter-pricefrom").val(input_left); 
        $(".products__filter-priceto").val(input_right); 
        $(".products__filter-pricerange").slider( "values", [ input_left, input_right ] );
    });

});