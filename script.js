document.addEventListener("DOMContentLoaded", function() {
let htmlCode  = document.getElementById('code-html');
let cssCode  = document.getElementById('code-css');
let jsCode  = document.getElementById('code-js');
let preview = document.getElementById('preview');

function updatePreview() {
    const html = htmlCode.value;
    const css = "<style>" + cssCode.value + " </style>";
    const js = "<script>" + jsCode.value + "</script>";
    preview.innerHTML = html + css + js;
    

}

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);


});
document.addEventListener("DOMContentLoaded", function() {
    let htmlCode  = document.getElementById('code-html');
    let cssCode  = document.getElementById('code-css');
    let jsCode  = document.getElementById('code-js');

    function addTabIndentation(textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const beforeCursor = textarea.value.substring(0, start);
        const afterCursor = textarea.value.substring(end);

        const identedText = beforeCursor.replace(/^(.*)$/gm, '    $1');

        textarea.value = identedText + afterCursor;

        textarea.selectionStart = start + 4;
        textarea.selectionEnd = start + 4;
    }

    htmlCode.addEventListener('keydown', function(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            addTabIndentation(htmlCode);
        }
    });
    cssCode.addEventListener('keydown', function(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            addTabIndentation(cssCode);
        }
    });
    jsCode.addEventListener('keydown', function(event) {
        if (event.key === "Tab" && !event.shiftKey) {
            event.preventDefault();
            addTabIndentation(jsCode);
        }
    });
});

