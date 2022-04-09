const timeObject = document.querySelector('.time')
const dateObject = document.querySelector('.date')
const calendarDay = document.querySelector('#calendar-day')
const calendarDate = document.querySelector('#calendar-date')

function updateTime() {
    const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const daysShort = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date()

    const day = daysShort[today.getDay()]
    const date = today.getDate()
    const month = monthsShort[today.getMonth()]
    let minutes = today.getMinutes()

    let morning = true
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    hours = today.getHours()
    if (hours > 12) {
        hours = hours - 12
        morning = false
    } else if (hours === 0) {
        hours = 12
    }


    let timeNow = hours + ":" + minutes

    if (morning) {
        timeNow += " AM"
    } else {
        timeNow += " PM"
    }

    const dateNow = `${day} ${date} ${month}`

    timeObject.innerText = timeNow
    dateObject.innerText = dateNow
    calendarDay.innerText = day
    calendarDate.innerText = date

}

updateTime()
setInterval(updateTime, 1000)

// DOM Elements Select
const appleApp = document.querySelector('img[alt=apple]')
const instagramApp = document.querySelector('img[alt=instagram]')
const facebookApp = document.querySelector('img[alt=facebook]')
const homeApp = document.querySelector('img[alt=home]')
const mailApp = document.querySelector('img[alt=mail]')
const githubApp = document.querySelector('img[alt=github]')
const weatherApp = document.querySelector('img[alt=weather]')
const linkedinApp = document.querySelector('img[alt=linkedin]')
const gameApp = document.querySelector('img[alt=game]')
const youtubeApp = document.querySelector('img[alt=youtube]')
const whatsApp = document.querySelector('img[alt=whatsapp]')
const telegramApp = document.querySelector('img[alt=telegram]')
const aboutMeApp = document.querySelector('img[alt=aboutme]')
const aboutMeGridItem = document.querySelector('.grid-item-about-me')
const callApp = document.querySelector('img[alt=phone]')
const callButton = document.querySelector('.call-button')
const whatsappButton = document.querySelector('.whatsapp-button')
const telegramButton = document.querySelector('.telegram-button')
const mailButton = document.querySelector('.mail-button')
const returnHomeButton = document.querySelector('.return-home')

// Contents
const aboutMeDiv = document.querySelector('#about-me')

function addonClickToLink(DOMobject, link) {
    DOMobject.addEventListener('click', () => window.open(link))
}

function addClass(DOMelement, className) {
    DOMelement.classList.add(className)
}

function removeClass(DOMelement, className) {
    DOMelement.classList.remove(className)
}

// Enable button links
addonClickToLink(appleApp, 'http://www.apple.com')
addonClickToLink(instagramApp, 'https://www.instagram.com/kengonoo/')
addonClickToLink(facebookApp, 'https://www.facebook.com/kennychu0510')
addonClickToLink(mailApp, 'mailto:kennychu0510@gmail.com')
addonClickToLink(mailButton, 'mailto:kennychu0510@gmail.com')
addonClickToLink(githubApp, 'https://github.com/kennychu0510')
addonClickToLink(weatherApp, 'https://www.hko.gov.hk/en/index.html')
addonClickToLink(linkedinApp, 'http://www.linkedin.com/in/kenny-kc-chu')
addonClickToLink(homeApp, '/tecky-exercises/wef008/index.html')
addonClickToLink(gameApp, '/game/game.html')
addonClickToLink(whatsApp, 'https://api.whatsapp.com/send?phone=85298545977')
addonClickToLink(whatsappButton, 'https://api.whatsapp.com/send?phone=85298545977')
addonClickToLink(telegramApp, 'https://t.me/Kengono')
addonClickToLink(telegramButton, 'https://t.me/Kengono')
addonClickToLink(callButton, 'tel:852-98545977')
addonClickToLink(callApp, 'tel:852-98545977')

aboutMeApp.addEventListener('click', () => {
    addClass(aboutMeDiv, 'active')
})

returnHomeButton.addEventListener('click', () => {
    removeClass(aboutMeDiv, 'active')
})