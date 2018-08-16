window.onload = function () {
    var back_to_top_element = document.getElementById("back_to_top"),
        update_element = document.getElementById("update");

    back_to_top_element.style.display = "none";

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            back_to_top_element.style.display = "block";
            update_element.style.marginRight = "";
        } else {
            back_to_top_element.style.display = "none";
            update_element.style.marginRight = "8px";
        }
    });
};