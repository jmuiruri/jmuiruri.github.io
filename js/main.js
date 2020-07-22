$(document).ready(function () {

    const $window = $(window), $winWidth = $window.width(), $winHeight = $window.height();
    const halfHeight = $winHeight / 2, quarterHeight = $winHeight / 4;

    isElementInViewPort = ($el) => {
        let $rect = $el[0].getBoundingClientRect();
        return ($rect.top >= 0 && $rect.left >= 0 && $rect.bottom <= $winHeight && $rect.right <= $winWidth);
    }

    let isAnimated = false;
    let $process = $("#process-block");

    let animatedSections = [];

    animateProcess = ($element) => {
        $element.find(".row>div:not(.w-100)").each((i, e) => {
            let x = i + 1;
            let anim = x > 1 ? "fadeInLeft" : "bounce";
            const classList = "col stage-" + x + " animated " + anim + " delay-" + i + "s";
            $(e).attr("class", classList);
        });

        // animatedSections[$element.attr("id")] = true;
        isAnimated = true;

        // console.log(animatedSections);
    }

    let lastScrollPos = 0;
    const $nav = $("nav"), BORDER_BOTTOM = "border-bottom";

    window.onscroll = () => {
        const scrollPos = window.top.scrollY;

        if (scrollPos > quarterHeight) {
            $nav.addClass(BORDER_BOTTOM);
        } else {
            $nav.removeClass(BORDER_BOTTOM);
        }

        if (scrollPos > halfHeight) {
            if (lastScrollPos > scrollPos) {
                $goToTop.show();
            } else {
                $goToTop.hide();
            }
        } else {
            $goToTop.hide();
        }

        lastScrollPos = scrollPos;

        if (isElementInViewPort($process) && !isAnimated) {
            animateProcess($process);
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
            console.log("click toggler");
            if ($winWidth < 768) $navToggle.click();
        });
    }

    initNavLinksClick();

    const $goToTop = $("#go-to-top");
    $goToTop.on("click", function () {
        scroll("#home");
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

    $(".work-name div.btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const link = $(this).data("href");
        window.open(link, "_blank");
    });

    getPopupHtml = (index) => {
        return '<a href="http://wottmakplus.com" target="_blank" class="visit btn btn-danger">Visit</a>';
        // let html = [];
        // return html[index];
    }

    initCarousel = () => {
        $(".owl-carousel").owlCarousel({
            items: 3,
            nav: false,
            loop: true,
            dots: true,
            // center:true,
            responsive: {
                0: { items: 1 },
                475: { items: 2 },
                992: { items: 3 }
            }
        });
    }

    initCarousel();


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


    // $(".nav-link").on("change")





});


















