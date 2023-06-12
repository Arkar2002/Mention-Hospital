// jQuery Area
$(document).ready(function(){
    //  Start navbar adding active class
    $(".navbar-nav .nav-link").click(function () {
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    })
    //  End navbar adding active class

    // Start Progress
    let getprogress = $(".progress");
    let getprogressvalue = $(".progress_value");

    $(window).scroll(function (e) {
        let getscrollTop = document.documentElement.scrollTop;
            getscrollHeight = document.documentElement.scrollHeight,
            getclientHeight = document.documentElement.clientHeight,
            calcheight = Math.floor((getscrollTop / (getscrollHeight - getclientHeight)) * 100);
        getprogressvalue.text(`${calcheight}%`);
        getprogress.css({
            background: `conic-gradient(
              steelblue ${calcheight}%,
              #eee ${calcheight}%  
            )`
        })

        if (getscrollTop >= 300) {
            $(".fea_para_ani").addClass("feature_para");
            $(".fea_img_ani").addClass("feature_img");
        };

        if (getscrollTop >= 2100) {
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebots");
            $(".cardthrees").addClass("moverights");
        }

    });
    // End Progress

    // VideoModal

    $("#video").click(function () {
        let getmodal = $(this).data("bs-toggle");
        let getvideosrc = $(this).data("video");
        let videowithloops = getvideosrc + "?autoplay=1&mute=1";

        $("."+getmodal+" iframe").attr("src",videowithloops);

        $(`.${getmodal} .btn-close`).click(function () {
            $("."+getmodal+" iframe").removeAttr("src");
        });

        $("."+getmodal).click("hidden.bs.modal",function () {
            $("."+getmodal+" iframe").removeAttr("src");
        })

    })

    // Premises 
    $('#lightSlider').lightSlider({
        gallery: true,
        item: 2,
        loop:true,
        slideMargin: 0,
        thumbItem: 7,
        auto: true,
        speed: 400
    });

    // faq accordion
    $("#accordion").accordion();

    $("#autoyear").text(new Date().getUTCFullYear());
})

// Javascript Area