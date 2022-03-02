let video = document.getElementById("joe");

video.addEventListener("mouseover", () => {
    video.src = "video/annoying.mp4";
    video.play();
});