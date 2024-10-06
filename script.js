const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')
const darkModeSwitch = document.querySelector('#darkmode-switch')
const hasSetDarkMode = localStorage.getItem('darkmode')

menuBtn.addEventListener('click',() => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'
  if (isExpanded) {
    menuBtn.setAttribute('aria-expanded', false)
    mainMenu.addEventListener('animationed', () => {
      mainMenu.classList.add('hide')
    }, {once: true})
  }
  else {
    mainMenu.classList.remove('hide')
    menuBtn.setAttribute('aria-expanded', true)
  }
})

if(hasSetDarkMode == null) {
  if(window.matchMedia('prefers-color-scheme: dark').matches) {
    enableDarkMode()
  }
  else {
    disableDarkMode()
  }
} else if (hasSetDarkMode === 'on') {
  enableDarkMode()
} else if (hasSetDarkMode === 'off') {
  disableDarkMode()
}

darkModeSwitch.addEventListener('change', () => {
  if(darkModeSwitch.checked) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkmode', 'on')
  }
  else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  darkModeSwitch.checked = true
  document.documentElement.classList.add('dark')
}
function disableDarkMode() {
  darkModeSwitch.checked = false
  document.documentElement.classList.remove('dark')
}