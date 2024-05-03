var toggles = document.querySelectorAll('.toggle');
toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
    toggle.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
    toggle.addEventListener('mouseleave', function() {
        this.style.cursor = 'auto';
    });
});
