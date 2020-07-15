$(function(){
    $(document).om('click', "edit_btn" , function(){
        let editable = $(this).prev('.edit_cont').attr('contentedtable');
        if(editable){
            $(this).text('edit');
            $(this).prev('.edit_cont').removeAttr('contenteditable')
            $(this).prev('.edit_cont').removeClass('edit_cont_border')
        }
        else{
            $(this).text('save');
            $(this).prev('.edit_cont').attr('ontentedtable', 'true');
            $(this).prev('edit_cont').addClass('edit_cont_border');
        }
    })
});