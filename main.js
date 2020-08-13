window.onscroll = function() {myFunction()};

    var header = document.getElementById("arrow-header-id");

    function myFunction() {
        if (window.pageYOffset > 1) {
            header.classList.add("sticky-colored");
        } 
        else {
            header.classList.remove("sticky-colored");
        }
    }

