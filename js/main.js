$(document).ready(function () {

    $("#navbar-toggler").on("click", function () {
        $(".nav-items").toggleClass("show");
    });


    window.onscroll = () => {
        const scrollPos = window.top.scrollY;

        if (scrollPos > (window.outerHeight / 2)) {
            $goToTop.show();
        } else {
            $goToTop.hide();
        }

        // navHighlight(scrollPos);

    }

    scroll = (targetSelector) => {
        $("html,body").animate({
            scrollTop: $(targetSelector).offset().top - 100
        }, 1000);
    }

    initPageSectionLinks = () => {
        $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on("click", function (e) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    scroll(target, 1000);
                }
            }
        });
    }

    initPageSectionLinks();

    const $navToggle = $(".navbar-toggler");

    initNavLinksClick = () => {
        $("a.nav-link:not(.dropdown-toggle)").on("click", function () {
            // if ($nav.hasClass(MENU_SHOWN))
            $navToggle.click();
        });
    }

    // initNavLinksClick();

    const $goToTop = $("#go-to-top");
    $goToTop.on("click", function () {
        scroll("#mainnav");
    });


    $("#work").magnificPopup(
        {
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            // callbacks: {
            //     elementParse: function (item) {
            //         item.el.context.title = getPopupHtml(item.index);
            //         // console.log(item.index, item);
            //     }
            // },
            closeBtnInside: false
        }
    );

    getPopupHtml = (index) => {
        return '<a href="http://wottmakplus.com" target="_blank" class="visit btn btn-danger">Visit</a>';
        // let html = [];
        // return html[index];
    }

    // image: {
    //     markup: '<div class="mfp-figure">' +
    //         '<div class="mfp-close"></div>'+
    //         '<div class="mfp-img></div>'+
    //         '<div class="mfp-bottom-bar">'+
    //         'div class="mfp-title"></div>'+
    //         '<div class="mfp-title"></div>'+
    //         '</div></div>',
    //         titleSrc:'title',
    //         verticalFit:true,
    //         tError:'<a> Image could not be loaded</a>'
    // }

});


















