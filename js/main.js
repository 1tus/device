$(function(){
    $('.promoslider').slick({
        arrows: false,
        dots: true
    })
});

const   writeUsBtn = document.querySelector(".about__item-link2"),
        btnFormClose = document.querySelector(".modal__send-close"),
        popapForm = document.querySelector(".modal__send"),
        mapLink = document.querySelector(".about__item-map-link"),
        popapMap = document.querySelector(".modal__map"),
        btnMapClose = document.querySelector(".modal__map-close"),
        modalFormOverlay = document.querySelector(".modal__send-overlay"),
        modalMapOverlay = document.querySelector(".modal__map-overlay"),
        btnFormSend = document.querySelector(".modal__form-button"),
        modalFormName = document.querySelector(".modal__form-inputname"),
        modalFormMail = document.querySelector(".modal__form-inputmail"),
        modalFormMessage = document.querySelector(".modal__form-inputtext");

btnFormSend.addEventListener("click",function(evt){
    let validName,
        validMail;
    validName = /[A-Za-zА-Яа-я]{3,}\s[A-Za-zА-Яа-я]{3,}/.test(modalFormName.value);
    validMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(modalFormMail.value);
    modalFormName.classList.remove("modal__form-input--novalid");
    modalFormMail.classList.remove("modal__form-input--novalid");
    modalFormMessage.classList.remove("modal__form-input--novalid");
    if (!validName){
        modalFormName.classList.add("modal__form-input--novalid");
    }
    if (!validMail){
        modalFormMail.classList.add("modal__form-input--novalid");
    }
    if (modalFormMessage.value == ""){
        modalFormMessage.classList.add("modal__form-input--novalid");
    }
    if(modalFormName.classList.contains("modal__form-input--novalid") || modalFormMail.classList.contains("modal__form-input--novalid") || modalFormMessage.classList.contains("modal__form-input--novalid"))
    {
        evt.preventDefault();
        popapForm.classList.remove("modal--error");
        popapForm.offsetWidth = popapForm.offsetWidth;
        popapForm.classList.add("modal--error");
    }
});

writeUsBtn.addEventListener("click",function(evt){
    evt.preventDefault();
    popapForm.classList.remove("modal--display");
    popapForm.classList.remove("modal--close");
    popapForm.classList.add("modal--display");
    modalFormOverlay.classList.add("modal-overlay--display");
});
btnFormClose.addEventListener("click",function(evt){
    popapForm.classList.remove("modal--error");
    popapForm.classList.add("modal--close");
    modalFormOverlay.classList.remove("modal-overlay--display");
});
modalFormOverlay.addEventListener("click",function(evt){
    popapForm.classList.remove("modal--error");
    popapForm.classList.add("modal--close");
    modalFormOverlay.classList.remove("modal-overlay--display");
});

mapLink.addEventListener("click",function(evt){
    evt.preventDefault();
    popapMap.classList.remove("modal--display");
    popapMap.classList.remove("modal--close");
    popapMap.classList.add("modal--display");
    modalMapOverlay.classList.add("modal-overlay--display");
});
btnMapClose.addEventListener("click",function(evt){
    popapMap.classList.add("modal--close");
    modalMapOverlay.classList.remove("modal-overlay--display");
});
modalMapOverlay.addEventListener("click",function(evt){
    popapMap.classList.add("modal--close");
    modalMapOverlay.classList.remove("modal-overlay--display");
});

window.addEventListener("keydown",function(evt){
    if(evt.keyCode === 27){
        if(popapForm.classList.contains("modal--display")){
            popapForm.classList.remove("modal--error");
            popapForm.classList.add("modal--close");
            modalFormOverlay.classList.remove("modal-overlay--display");            
        }
        if(popapMap.classList.contains("modal--display")){
            popapMap.classList.add("modal--close");
            modalMapOverlay.classList.remove("modal-overlay--display");
        }
    }
});