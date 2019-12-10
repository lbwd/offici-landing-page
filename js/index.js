document.getElementById('opening').addEventListener('click', onClick, false);
function onClick() {
  if (
    document.getElementsByClassName('top-arrow')[0].classList.contains('rotate')
  ) {
    document.getElementsByClassName('top-arrow')[0].classList.remove('rotate');
    document.getElementsByClassName('bot-arrow')[0].classList.remove('rotate');
    document.getElementById('top-cover').classList.remove('final');
    document
      .getElementsByClassName('span-opening')[0]
      .classList.remove('black');
    document.getElementsByTagName('body')[0].classList.remove('overflow');
  } else {
    document.getElementsByClassName('top-arrow')[0].classList.add('rotate');
    document.getElementsByClassName('bot-arrow')[0].classList.add('rotate');
    document.getElementById('top-cover').classList.add('final');
    document.getElementsByClassName('span-opening')[0].classList.add('black');
    document.getElementsByTagName('body')[0].classList.add('overflow');
  }
}

// Mobile height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});