$(function () {
    $('.card-columns .card').on('click', function () {
        $('#modal-content').modal();
        var path = ($(this).find('img').attr('src'));
        console.log(path);
        $('#img-modal-content').attr('src', path);
    });
    $('#modal-content').on('click', function () {
        $('#modal-content').modal('hide');
    });
});
