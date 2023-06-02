window.addEventListener("scroll", () => {
    let Window = document.documentElement.scrollTop
    let life = document.getElementById("app_life")
    let service01 = document.getElementById('app_service_01')
    let service02 = document.getElementById('app_service_02')
    let service03 = document.getElementById('app_service_03')
    let service04 = document.getElementById('app_service_04')
    let app01 = document.getElementById('app_event_01')
    let app02 = document.getElementById('app_event_02')
    let app03 = document.getElementById('app_event_03')
    let app04 = document.getElementById('app_event_04')
    let scroll = Math.trunc(Window)

    console.log(scroll)
    if (scroll > 250) {

        life.style.transition = "all 3s"
        life.style.left = "0px"
    } else if (scroll < 500) {
        life.style.left = "1000px"

    }

    if (scroll > 800) {

        service01.style.transition = "all 3s"
        service01.style.left = "0px"
        service02.style.transition = "all 3s"
        service02.style.right = "0px"
        service03.style.transition = "all 3s"
        service03.style.left = "0px"
        service04.style.transition = "all 3s"
        service04.style.right = "0px"

    } else if (scroll < 1250) {

        service01.style.left = "1200px"
        service03.style.left = "1200px"
        service02.style.right = "1200px"
        service04.style.right = "1200px"
    }

    if (scroll > 1750) {
        app01.style.transition = "all 2.5s"
        app01.style.right = "0px"
        app02.style.transition = "all 3.0s"
        app02.style.right = "0px"
        app03.style.transition = "all 3.5s"
        app03.style.right = "0px"
        app04.style.transition = "all 4s"
        app04.style.right = "0px"
    } else if (scroll < 1700) {
        app01.style.right = "1300px"
        app03.style.right = "1300px"
        app02.style.right = "1300px"
        app04.style.right = "1300px"
    }
})