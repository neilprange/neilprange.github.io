var id = null;
function loadPage() {
    var name = document.getElementById("title1");
    var bio = document.getElementById("bio1");
    var namePos = 0;
    var bioPos = 100;

    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
        if (namePos == 50) {
            clearInterval(id);
        } else {
            namePos++;
            name.style.left = namePos + '%';
        }
        if (bioPos == 50) {
            clearInterval(id);
        } else {
            bioPos--;
            bio.style.left = bioPos + '%';
        }
    }
} 
 