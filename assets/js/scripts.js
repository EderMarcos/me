$(function () {
    var img = $('#img-modal-content');
    $('.card-columns .card').on('click', function () {
        $('#modal-content').modal();
        var path = ($(this).find('img').attr('src'));
        img.attr('src', path);
        if ($(this).find('img')[0].clientHeight > 200 && window.innerWidth > 500) {
            img[0].style.width = '30%';
        } else {
            img[0].style.width = '90%';
        }
    });
    $('#modal-content').on('click', function () {
        $('#modal-content').modal('hide');
    });

    var nav_links = document.querySelectorAll('.nav-link');
    var scrollPosition = 0;
    for (var i = 0; i < nav_links.length; i++) {
        nav_links[i].addEventListener('click', function (e) {
            e.preventDefault();
            var targetPosition = document.querySelector(e.target.getAttribute('href')).offsetTop;

            var interval = setInterval(function () {
                if(scrollPosition < targetPosition) {
                    scrollPosition += 100;
                    if(scrollPosition >= targetPosition) {
                        scrollPosition = targetPosition;
                        clearInterval(interval);
                    }
                }
                window.scrollTo(0, scrollPosition);
            }, 25);


        })
    }
});
