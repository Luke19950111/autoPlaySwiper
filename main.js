var allButtons = $('#buttons>button')
for(let i=0; i<allButtons.length; i++){
    $(allButtons[i]).on('click', function(x){
        var index = $(x.currentTarget).index()
        var p = index * -250
        $('#images').css({
            transform: 'translateX(' + p +'px)'
        })
    })
}