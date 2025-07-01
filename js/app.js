let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qr-img");
const printBtn = document.getElementById("printBtn");

function gen(){
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
         printBtn.disabled = false;
    }else{
        qrText.classList.add("error");
    }
}
function printQR() {
    // open a tiny new window/tab containing only the image, then print
    const w = window.open("");         // blank popup
    w.document.write(`<img src="${qrImg.src}" 
                            style="width:50px;height:50px;"/>`);
    w.document.close();                // finish writing
    w.focus();                         // bring to front (some browsers)
    w.print();                         // open print dialog
    w.close();                         // close when done
}