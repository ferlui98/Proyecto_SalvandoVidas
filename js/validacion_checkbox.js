/*Funcion para validar los checkbox*/
function validar_checkbox() {

    let checkbox_checked = document.querySelectorAll('input[type="checkbox"]:checked').length;

    if (checkbox_checked == 0 || checkbox_checked > 3) {
        alert("Debes elegir entre 1 a 3 estrategias como máximo de la pregunta 3.");
        return false;
    } else {
        return true;
    }
}
