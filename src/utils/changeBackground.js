import backgroundPages from '../img/bgheaderinner.png';

export default function changeBackground () {
    document.querySelector('.header-background').src = backgroundPages;
    document.querySelector('header').style.marginBottom = '0px';
}