// Efek sederhana saat website dibuka

console.log("Portofolio berhasil dijalankan!");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});