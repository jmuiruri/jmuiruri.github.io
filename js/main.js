$(document).ready(function () {

    const $window = $(window), $winWidth = $window.width(), $winHeight = $window.height();
    getQH = () => $winHeight / ($(".top").hasClass(".tog-bg") ? 4 : 10);
    const halfHeight = $winHeight / 2, quarterHeight = getQH();

    let lastScrollPos = 0;
    const $nav = $("nav"), BORDER_BOTTOM = "border-bottom";

    const onScroll = () => {
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
    }
    
    window.onscroll = onScroll;

    const scroll = (targetSelector) => {
        $("html,body").animate({
            scrollTop: $(targetSelector).offset().top - 100
        }, 1000);
    }

    const initPageSectionLinks = () => {
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

    const initNavLinksClick = () => {
        $("a.nav-link:not(.dropdown-toggle)").on("click", function () {
            if ($winWidth < 768) $navToggle.click();
        });
    }

    initNavLinksClick();

    const $goToTop = $("#go-to-top");
    $goToTop.on("click", function () {
        scroll("#home");
    });

    $(".work-name div.btn").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const link = $(this).data("href");
        window.open(link, "_blank");
    });

    const showCarousel = () => {
        $(".owl-carousel").owlCarousel({
            nav: false,
            loop: true,
            dots: true,
            center: true,
            responsive: {
                0: { items: 1 },
                475: { items: 2 },
                992: { items: 3 }
            }
        });
    }

    showCarousel();


    const showWorkGallery = () => {

        let $gallery = $(".gallery");
        if ($gallery.attr("class") === undefined || $gallery.attr("class") === null) return;

        $gallery.magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            closeBtnInside: false

        });

        $gallery.imagesLoaded(function () {
            $gallery.isotope({});
            $('.filtering').on("click", 'span', function () {
                const $span = $(this);
                $span.addClass("active").siblings().removeClass("active");
                $gallery.isotope({ filter: $span.data('filter') });
            });
        });
    }

    showWorkGallery();


    const initAnimations = () => {
        const wow = new WOW({
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    }

    initAnimations();
});

