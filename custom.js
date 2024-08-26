let blurdiv = null;
function restore() {
    blurdiv = document.getElementById('blurdiv');
    if (blurdiv != null) {
        blurdiv.removeAttribute('class');
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            restore();
        }
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            restore();
        }
        if ((event.metaKey || event.ctrlKey) && event.key === 'p') {
            event.preventDefault();
            const widget = document.querySelector('.quick-input-widget show-file-icons');
            if (widget === null) {
                const workbench = document.querySelector(".monaco-workbench");
                if (workbench != null) {
                    blurdiv = document.getElementById('blurdiv');
                    if (blurdiv == null) {
                        blurdiv = document.createElement("div");
                        workbench.appendChild(blurdiv);
                        blurdiv.setAttribute('Id', 'blurdiv');
                    }
                    blurdiv.setAttribute('class', 'blurdiv');
                }
            }
        }
    }, true);
});
