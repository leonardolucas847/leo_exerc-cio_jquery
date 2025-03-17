$(document).ready (function(){
    $('ul').on('click',  function () {
        $(this).toggleClass('riscado');
    });
    $('ul').on('dblclick', function () {
        $(this).remove();
    });
    $('form').on ('submit' , function (e){
    e.preventDefault ()
        const inputTextoTarefa = $('#tarefa-cadastrada').val()
        const tarefaCadastrada = $('<li id="tarefa" ></li>')
        $(tarefaCadastrada).text(inputTextoTarefa);
        $(tarefaCadastrada).appendTo('ul');
        $('#tarefa-cadastrada').val('');
    })
})