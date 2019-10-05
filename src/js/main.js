'use strict';

const wrapper = document.querySelector('.wrapper');

if (wrapper) {
    wrapper.addEventListener('click', function (e) {

        const imageclass = e.target.classList;
        const teaserParentClass = e.target.parentElement.classList;
        if (imageclass.contains('teaserimage') && teaserParentClass.contains('teaser-showinfo')) {
            teaserParentClass.remove('teaser-showinfo');
        } else if (imageclass.contains('teaserimage')) {
            teaserParentClass.add('teaser-showinfo');
        }
    })
}