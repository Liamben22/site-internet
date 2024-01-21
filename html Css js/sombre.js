const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;


switchThemeBtn.addEventListener('click', () => {

    if(toggleTheme === 0) {

        document.documentElement.style.setProperty('--ecriture', '#000000');
        document.documentElement.style.setProperty('--background', '#ffffff');
        toggleTheme++;

    } else {

        document.documentElement.style.setProperty('--ecriture', '#ffffff');
        document.documentElement.style.setProperty('--background', '#000000');
        toggleTheme--;

    }


})
 
