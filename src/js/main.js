'use strict';

const wrapper = document.querySelector('.wrapper');

if (wrapper) {
    wrapper.addEventListener('click', function (event) {

        const imageclass = event.target.classList;
        if (imageclass.contains('teaserimage')) {
            event.target.parentElement.classList.add('teaser-showinfo');
        }
    })
}