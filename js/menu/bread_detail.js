const imgContainer = document.getElementById("image_container");
const productImg = document.getElementById("product_image");
imgContainer.addEventListener("mousemove", onZoom);
imgContainer.addEventListener("mouseover", onZoom);
imgContainer.addEventListener("mouseleave", offZoom);

function onZoom(e){
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    productImg.style.transformOrigin = `${x}px ${y}px`;
    productImg.style.transform = "scale(2)";
}

function offZoom(e){
    productImg.style.transformOrigin = `center center`;
    productImg.style.transform = "scale(1)";
}