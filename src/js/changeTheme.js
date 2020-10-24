
export const body = document.querySelector('body');
export const theme = document.querySelector('.theme-switch__toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;


theme.addEventListener('change', onChangeChecked);
function onChangeChecked(e) {
  // localStorage.setItem('checked', e.target.checked);

  if (e.target.checked) {
    localStorage.setItem('theme', DARK);
    body.classList.replace(LIGHT, DARK); 
  } else {
    localStorage.setItem('theme', LIGHT);
    body.classList.replace(DARK, LIGHT);
  }

 // e.target.checked ? localStorage.setItem('theme', DARK) : localStorage.setItem('theme', LIGHT);
// const getValue = localStorage.getItem('theme');
//   if (getValue === DARK) {
// body.classList.replace(LIGHT, DARK);  
// }
// if (getValue === LIGHT) {
//   body.classList.replace(DARK, LIGHT);
// }
};


const getValue = localStorage.getItem('theme');

if (getValue === null) {
  body.classList.add(LIGHT);
}

if (getValue === DARK) {
  body.classList.add(DARK);
  theme.checked = true;
}

if (getValue === LIGHT) {
  body.classList.add(LIGHT);
  theme.checked = false;
}