$('.product_wrap').mouseenter(function () {
    let iif = $('.product_wrap').attr('id')
    let a = $(this).attr('id', 'cs')
    if (a = 'cs') {
        $('#cs .deli_see_more').slideDown()
        $('#cs ').removeAttr('id')
    }
    $(this).addClass('product_event')

})

$('.product_wrap').mouseleave(function () {
    let a = $(this).attr('id', 'cs')
    if (a = 'cs') {
        $('#cs .deli_see_more').slideUp()
        $('#cs ').removeAttr('id')
    }
    $(this).removeClass('product_event')

})
    // 구메예정금액 짜기
    const click01 = document.querySelectorAll('.check_click01')

    let main_val01 = document
        .getElementById("main_val01")
        .value

    main_val01 = Number(main_val01)

    total_m01 = 0

    for (i = 0; i < click01.length; i++) {

        if (click01[i].getAttribute('id') == "main_pl") {

            click01[i].addEventListener('click', function () {
                main_val01 = main_val01 + 1
                $('#main_val01').attr("value", main_val01)

                total_m01 = 51000 * main_val01

                document
                    .getElementById('total')
                    .innerHTML = total_m01 + ' 원'
            })
        } else if (click01[i].getAttribute('id') == "main_mn") {

            click01[i].addEventListener('click', function () {
                if (main_val01 !== 1) {
                    main_val01 = main_val01 - 1
                    $('#main_val01').attr("value", main_val01)
                    total_m01 = 51000 * main_val01

                    document
                        .getElementById('total')
                        .innerHTML = total_m01 + ' 원'
                }
            })

        }
        total_m01 = 54000
    }

    // 옵션 체크시 추가되는 사항들 모달창 띄우기 없애기
    $('#modal_close_01').click(function () {
        $('#modal_01').fadeOut()

    })
    $("#modal_btn_1").click(function () {
        $('#modal_01').fadeIn()
    })

    // 구메예정금액 짜기
    const click02 = document.querySelectorAll('.check_click02')

    let main_val02 = document
        .getElementById("main_val02")
        .value

    main_val02 = Number(main_val02)

    total_m02 = 0

    for (i = 0; i < click02.length; i++) {

        if (click02[i].getAttribute('id') == "main_pl") {

            click02[i].addEventListener('click', function () {
                main_val02 = main_val02 + 1
                $('#main_val02').attr("value", main_val02)

                total_m02 = 63000 * main_val02

                document
                    .getElementById('total02')
                    .innerHTML = total_m02 + ' 원'
            })
        } else if (click02[i].getAttribute('id') == "main_mn") {

            var a = click02[i].addEventListener('click', function () {
                if (main_val02 !== 1) {
                    main_val02 = main_val02 - 1
                    $('#main_val02').attr("value", main_val02)

                    total_m02 = 63000 * main_val02

                    document
                        .getElementById('total02')
                        .innerHTML = total_m02 + ' 원'
                }
            })
        }

        total_m02 = 63000

    }

    // 옵션추가 모달창 띄우기 없애기
    $('#modal_close_02').click(function () {
        $('#modal_02').fadeOut()

    })
    $("#modal_btn_2").click(function () {
        $('#modal_02').fadeIn()
    })

    //   구메예정금액 짜기
    const click03 = document.querySelectorAll('.check_click03')

    let main_val03 = document
        .getElementById("main_val03")
        .value

    main_val03 = Number(main_val03)

    total_m03 = 0

    for (i = 0; i < click03.length; i++) {

        if (click03[i].getAttribute('id') == "main_pl") {

            click03[i].addEventListener('click', function () {
                main_val03 = main_val03 + 1
                $('#main_val03').attr("value", main_val03)

                total_m03 = 45000 * main_val03
                document
                    .getElementById('total03')
                    .innerHTML = total_m03 + ' 원'
            })
        } else if (click03[i].getAttribute('id') == "main_mn") {

            click03[i].addEventListener('click', function () {
                if (main_val03 !== 1) {
                    main_val03 = main_val03 - 1
                    $('#main_val03').attr("value", main_val03)

                    total_m03 = 45000 * main_val03
                    document
                        .getElementById('total03')
                        .innerHTML = total_m03 + ' 원'
                }
            })

        }
    }
    // 모달창 띄우기 없애기
    $('#modal_close_03').click(function () {
        $('#modal_03').fadeOut()

    })
    $("#modal_btn_3").click(function () {
        $('#modal_03').fadeIn()
    })

    // 구메예정금액 짜기
    const click04 = document.querySelectorAll('.check_click04')

    let main_val04 = document
        .getElementById("main_val04")
        .value

    main_val04 = Number(main_val04)

    total_m04 = 0

    for (i = 0; i < click04.length; i++) {

        if (click04[i].getAttribute('id') == "main_pl") {

            click04[i].addEventListener('click', function () {
                main_val04 = main_val04 + 1
                $('#main_val04').attr("value", main_val04)

                total_m04 = 45000 * main_val04
                document
                    .getElementById('total04')
                    .innerHTML = total_m04 + ' 원'
            })
        } else if (click04[i].getAttribute('id') == "main_mn") {

            click04[i].addEventListener('click', function () {
                if (main_val04 !== 1) {
                    main_val04 = main_val04 - 1
                    $('#main_val04').attr("value", main_val04)

                    total_m04 = 45000 * main_val04
                    document
                        .getElementById('total04')
                        .innerHTML = total_m04 + ' 원'
                }
            })

        }
    }
    // 모달창 띄우기 없애기
    $('#modal_close_04').click(function () {
        $('#modal_04').fadeOut()

    })
    $("#modal_btn_4").click(function () {
        $('#modal_04').fadeIn()
    })