$('.divs div').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    
    var index = $(this).index() + 1; 
    var Color = $(this).css('background-color');
    if (index === 1) {
        $('.section1 .contant').html("contant1");
        $('.section1 .contant').css('background-color', Color);
    } else if (index === 2) {
        $('.section1 .contant').html("contant2");
        $('.section1 .contant').css('background-color', Color);
    } else if (index === 3) {
        $('.section1 .contant').html("contant3");
        $('.section1 .contant').css('background-color', Color);
    } else if (index === 4) {
        $('.section1 .contant').html("contant4");
        $('.section1 .contant').css('background-color', Color);
    }

});
