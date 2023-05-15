// $(function(){
//     $(".view_pics").click(function(){
//         $(".view_pics_dd").removeClass("hidden");
//         $(".view_nutris_dd").addClass("hidden");
//     })
//     // $(".view_pics").click(function(){
//     //     $(".view_pics_dd").show();
//     //     $(".view_nutris_dd").hide();
//     // });

//     $(".view_nutirs").click(function(){
//         $(".view_pics_dd").addClass("hidden");
//         $(".view_nutris_dd").removeClass("hidden");
//     })

//     // $(".view_nutirs").click(function(){
//     //     $(".view_pics_dd").hide();
//     //     $(".view_nutris_dd").show();
//     // });
// })

const viewPics = document.getElementById("view_pics")
const viewNutris = document.getElementById("view_nutris")
const viewPicsD = document.getElementById("view_pics_dd")
const viewNutrisD = document.getElementById("view_nutris_dd")

const handleViewPics = (event)=>{
    // console.log(event.target)
    event.preventDefault(); /* 화면이 새로고침되지 않도록 하는 코드 */
    viewPicsD.classList.remove("hidden")
    viewNutrisD.classList.add("hidden")
}
const handleViewNutris=(event)=>{
    event.preventDefault();
    viewNutrisD.classList.remove("hidden")
    viewPicsD.classList.add("hidden")
}
viewPics.addEventListener("click",handleViewPics)
viewNutris.addEventListener("click",handleViewNutris)