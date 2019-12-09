document.getElementById('opening').addEventListener('click', onClick, false);
function onClick() {
  if (
    document.getElementsByClassName('top-arrow')[0].classList.contains('rotate')
  ) {
    document.getElementsByClassName('top-arrow')[0].classList.remove('rotate');
    document.getElementsByClassName('bot-arrow')[0].classList.remove('rotate');
    document.getElementById('top-cover').classList.remove('final');
    document.getElementsByClassName('span-opening')[0].classList.remove('black');
    document.getElementById('wrapper').classList.remove('overflow');
  } else {
    document.getElementsByClassName('top-arrow')[0].classList.add('rotate');
    document.getElementsByClassName('bot-arrow')[0].classList.add('rotate');
    document.getElementById('top-cover').classList.add('final');
    document.getElementsByClassName('span-opening')[0].classList.add('black');
    document.getElementById('wrapper').classList.add('overflow');
  }
}
