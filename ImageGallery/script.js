function openImage(image){
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-image").src = image.src;
}

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}