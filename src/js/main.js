'use strict';

const wrapper = document.querySelector('.wrapper');

if (wrapper) {
    wrapper.addEventListener('click', function (e) {

        const imageclass = e.target.classList;
        if (imageclass.contains('teaserimage')) {
            e.target.parentElement.classList.add('teaser-showinfo');
        }
    })
}