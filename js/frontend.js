jQuery(document).ready(function($) {

    let checkForMultiBlock = $(document).find('.wp-block-foa-foa-multi-row-block');
    let countBlocks = checkForMultiBlock.length;
    let screenWidth = window.innerWidth;

    if (screenWidth > 991) {
        for (i = 0; i < countBlocks; i++) {
            if (i % 2 !== 0) {
                $(checkForMultiBlock[i]).addClass('odd-row');
                let getText = $(checkForMultiBlock[i]).find('.foa-hero-text');
                let getImage = $(checkForMultiBlock[i]).find('.foa-hero-image');
                $(getText).insertBefore(getImage);

            }
        }
    }


    $('.close-status').click(function() {
        $('.checkbox-on').hide();
        localStorage.setItem('hideStatus', 'hide');
    });

    let getLocalStorage = localStorage.getItem('hideStatus');

    if (getLocalStorage === 'hide') {
        $('.checkbox-on').hide();
    }


    //SEARCH FUNCTION

    $('#search-button').click(function() {
        let getSearchTerms = $('#search-box').val();
        console.log(getSearchTerms);
        if (getSearchTerms === null || getSearchTerms === undefined || getSearchTerms === '') {
            $('#search-results').html('Please add your value');
        } else {
            fetch(`https://friendsofanimals.org/wp-json/wp/v2/posts?search=${getSearchTerms}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length === 0) {
                        $('#search-results').html('<div class="no-results">No Results Found</div>');
                    } else {
                        $('#search-results').html('<div id="results-wrapper"></div>');
                        data.map(function(item) {
                            $('#results-wrapper').append(`<div class="search-item"><h3><a href="${item.link}">${item.title.rendered}</a></h3><p class="search-date">${moment(item.date).format("MMM D, YYYY")}</p><p class="search-excerpt">${item.excerpt.rendered}</p></div><hr />`);
                        })
                    }
                })
                .catch(err => console.error(err));
        }
    });

    //MOBILE MENU
    $('.fa-bars').click(function() {
        if ($('.mobile-menu-wrapper').is(':visible')) {
            $('.mobile-menu-wrapper').hide();

        } else {
            $('.mobile-menu-wrapper').show();
        }
    });

    $('.mobile-main-menu li').each(function() {
        $(this).click(function() {
            let getSubMenu = $(this).find('.sub-menu');
            if ($(getSubMenu).is(':visible')) {
                $(getSubMenu).hide();
                $(this).removeClass('show-submenu');
            } else {
                $(getSubMenu).show();
                $(this).addClass('show-submenu');
            }
        })
    });

    $('.mobile-menu').find('li.menu-item-has-children').children('a').click(function(e) {
        e.preventDefault;
        $(this).next().toggle();
    })


    //OPERATORS SEARCH

    let vetList = [];
    $('#operators-search').click(function() {
        $('.drts-view-entity-container').each(function() {
            let getVetName = $(this).find('.directory-listing-title').text();
            let getVetAddress = $(this).find('.drts-location-address').text();
            let getVetPhone = $(this).find('.drts-display-element-entity_field_field_phone-1').text();
            let obj = {
                'vetname': getVetName,
                'vetaddress': getVetAddress,
                'vetphone': getVetPhone
            }
            vetList.push(obj);
        });
        localStorage.setItem("vetlist", JSON.stringify(vetList));
    });

    $(document).ready(function() {
        setTimeout(function() {

            if ($("#nf-field-41-container")[0]) {
                let getVetlist = localStorage.getItem("vetlist");
                let getVetListJSON = JSON.parse(getVetlist);
                let getForm = $('#ninja_forms_form_5').children().children().eq(4).children().children().children().eq(1).children().children().eq(4).children().children().eq(1).children().children().eq(1).children();

                getVetListJSON.map(item => {
                    $("#nf-field-41").val($("#nf-field-41").val() + '\r\n' + item.vetname + '\r\n' + item.vetaddress + '\r\n' + item.vetphone + '\r\n' + '---------------');
                });

                /*getVetListJSON.map(item => {
                    $(".note-editable").append('<p>' + item.vetname + '<br />' + item.vetaddress + '<br />' + item.vetphone + '<br />' + '---------------' + '</p>');
                });*/
            }

        }, 3000);
    });

    $(document).ready(function(){
        if ($(".drts-view-entities-none-found")[0]){
            $('.wp-block-button__link').css({
                opacity: '0.5',
                textDecoration: 'none',
                cursor:'not-allowed'
            })

            $('.wp-block-separator').nextAll('p').hide()
            $('.wp-block-separator').nextAll('.vets-input').hide()
            $( '<p>Sorry, there are no FoA Participating Veterinarians in your area.</p><p>You are not eligible to purchase a FoA spay/neuter certificate.</p><p><a style="color:red" href="/">GO BACK</a></p>' ).insertAfter( '.wp-block-separator' );

            $('.wp-block-button__link').click(function(e) {
                e.preventDefault();
            });
        } 
    })


});