var viewModals = document.querySelectorAll("div[viewModal]");
let active = false;
const animationEase = "easeInOutQuart";
const animationDuration = 500;

function ModalThumb(viewModal) {
    var viewModalThumb = viewModal.querySelector("div[viewModal-thumb]");
    var viewModalThumbImage = viewModalThumb.querySelector("img");

    function open() {
        viewModalThumb.style.transition = "all .5s ease";
        viewModalThumbImage.style.transition = "all .5s ease";

        viewModalThumb.style.height = viewModalThumb.getAttribute("viewModal-thumb-height");
        viewModalThumbImage.style.height = viewModalThumb.getAttribute("viewModal-thumb-height");
    }

    function close() {
        viewModalThumb.removeAttribute("style");
        viewModalThumbImage.removeAttribute("style");
    }

    return { open, close }
}

function ModalContext(viewModal) {
    var viewModalContext = viewModal.querySelector("div[viewModal-context]");

    function open() {
        viewModalContext.style.transition = "all .5s ease";
        viewModalContext.style.height = "auto";
    }

    function close(instant) {
        if(!instant) {
            viewModalContext.style.transition = "all .5s ease";
        }
        viewModalContext.style.height = '0px';
    }
    return { open, close }
}

function openModal(viewModal, index) {
    active = true;

    //atributos do modal
    ModalThumb(viewModal).open();
    ModalContext(viewModal).open();
    //inserindo o clone, para salvar a posição principal
    var clone = document.createElement("div");
    clone.setAttribute("viewModal-clone", index);
    var viewContext = viewModal.querySelector("div[viewModal-context]");
    var viewContextRect = viewContext.getBoundingClientRect();
    var rect = viewModal.getBoundingClientRect();
    clone.style.left = rect.x + "px";
    clone.style.top = rect.y + "px";
    clone.style.width = rect.width + "px";
    clone.style.height = (rect.height - viewContextRect.height) + "px";
    viewModal.parentNode.insertBefore(clone, viewModal);

    //criando o viewmodal-override, ao clicar nele, fecha o modal.
    var override = document.createElement("div");
    override.style.transition = "all .5s ease";
    override.style.position = "fixed";
    override.style.width = "100%";
    override.style.height = "100vh";
    override.style.left = "0px";
    override.style.top = "0px";
    override.style.backdropFilter = "blur(6px)"
    override.style.background = "#00000040";
    override.style.zIndex = 8;
    override.setAttribute("viewmode-override", index);
    viewModal.parentNode.insertBefore(override, viewModal);

    //transformando o viewmodal em modal
    var width = viewModal.getAttribute('viewModal-width') ?? "auto";
    viewModal.style.position = "fixed";
    viewModal.style.zIndex = 9;
    viewModal.style.borderRadius = "20px";
    viewModal.style.overflow = "hidden";
    viewModal.style.top = clone.style.top;
    viewModal.style.left = clone.style.left;
    viewModal.style.width = clone.style.width;
    viewModal.style.height = clone.style.height + viewContextRect.height;
    anime({
        targets: viewModal,
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        width: width,
        translateX: "-50%",
        translateY: "-50%",
        easing: animationEase,
        duration: animationDuration,
        begin: function () {
            document.body.style.overflow = "hidden";
        },
        complete: function () {
            viewModal.style.top = "50%";
            viewModal.style.left = "50%";
            override.addEventListener("click", () => closeModal(clone, viewModal, override))
            document.body.style.overflow = "unset";
            clone.style.height = rect.height
        }
    })
}

function closeModal(clone, viewModal, override) {
    active = false;
    var cloneRect = clone.getBoundingClientRect();
    viewModal.style.left = window.innerWidth / 2 + "px";
    viewModal.style.top = window.innerHeight / 2 + "px";
    ModalThumb(viewModal).close();
    ModalContext(viewModal).close();
    var width = viewModal.getAttribute('viewModal-width') ?? "auto";
    let widthWindows = 0;
    if (width.includes("%")) {
        widthWindows = window.innerWidth * (parseFloat(width.replace("%", "")) / 100);
    } else
        widthWindows = clone.style.width;

    viewModal.style.width = widthWindows + "px";
    override.remove();
    anime({
        targets: viewModal,
        left: cloneRect.left + "px",
        top: cloneRect.top + "px",
        width: cloneRect.width + "px",
        translateX: "0%",
        translateY: "0%",
        easing: animationEase,
        duration: animationDuration,
        begin: function () {
            document.body.style.overflow = "hidden";
        },
        complete: function () {
            clone.remove();
            viewModal.removeAttribute("style");
            document.body.style.overflow = "unset";
        }
    })

}

viewModals.forEach((e, index) => {
    ModalContext(e).close(true);
    e.addEventListener("click", () => !active && openModal(e, index))
})