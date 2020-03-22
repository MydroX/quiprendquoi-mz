if (navigator.clipboard) {
    document.querySelectorAll('[data-clipboard]').forEach(($clipboardEl) => {
        const $button = document.createElement('button');
        $button.innerHTML = 'Copier';

        $clipboardEl.parentNode.append($button);
        console.log("hello");
        $button.addEventListener(
            'click',
            copyToClipboard.bind(this, $clipboardEl, $button),
        );  
    });
} else {
    console.log('Presse papier non supporté :(');
}