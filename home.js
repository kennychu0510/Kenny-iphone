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

    // Clock app
    const secondsRatio = today.getSeconds() / 60
    const minutesRatio = (secondsRatio + today.getMinutes()) / 60
    const hourRatio = (minutesRatio + today.getHours()) / 12

    const hourHand = document.querySelector('.hand.hour')
    const minuteHand = document.querySelector('.hand.minute')
    const secondHand = document.querySelector('.hand.second')

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hourRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
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
const contactMeApp = document.querySelector('img[alt=contact]')
const aboutMeApp = document.querySelector('.grid-item-about-me')
const notesApp = document.querySelector('img[alt=notes]')
const clockApp = document.querySelector('.clock-app-icon')
const reminderApp = document.querySelector('img[alt=reminder]')
// const callApp = document.querySelector('img[alt=phone]')
// const callButton = document.querySelector('.call-button')
// const whatsappButton = document.querySelector('.whatsapp-button')
const wechatApp = document.querySelector('img[alt=wechat]')
const messageApp = document.querySelector('img[alt=message]')
const telegramButton = document.querySelector('.telegram-button')
const mailButton = document.querySelector('.mail-button')
const returnHomeButton = document.querySelector('.return-home')
const messageMeButton = document.querySelector('form.message-me-form > .message-me-button')
const contactMe_messageMeButton = document.querySelector('#contact-me-buttons > .message-me-button')
const contactMe_wechatMeButton = document.querySelector('#contact-me-buttons > .wechat-me-button')


// Contents
const contactMeDiv = document.querySelector('.contact-me')
const wechatDiv = document.querySelector('.wechat')
const messageDiv = document.querySelector('.message')
const aboutMeDiv = document.querySelector('.about-me')
const gameDiv = document.querySelector('.game')
const notesDiv = document.querySelector('.notes')
const clockDiv = document.querySelector('.clock')
const reminderDiv = document.querySelector('.reminder')
const reminderDivContainer = document.querySelector('.reminder-container')

// Buttons inside Apps
const newReminderButton = document.querySelector('.new-reminder-container')

function addonClickToLink(DOMobject, link) {
    DOMobject.addEventListener('click', () => window.open(link))
}

function addClass(DOMelement, className) {
    DOMelement.classList.add(className)
}

function removeClass(DOMelement, className) {
    DOMelement.classList.remove(className)
}

function toggleClass(DOMelement, className) {
    DOMelement.classList.toggle(className)
}

const gameLink = 'https://kennychu0510.github.io/Kenny-iphone/game/game.html'

// Enable button links
addonClickToLink(appleApp, 'http://www.apple.com')
addonClickToLink(instagramApp, 'https://www.instagram.com/kengonoo/')
addonClickToLink(facebookApp, 'https://www.facebook.com/kennychu0510')
addonClickToLink(mailApp, 'mailto:kennychu0510@gmail.com')
addonClickToLink(mailButton, 'mailto:kennychu0510@gmail.com')
addonClickToLink(githubApp, 'https://github.com/kennychu0510')
addonClickToLink(weatherApp, 'https://www.hko.gov.hk/en/index.html')
addonClickToLink(linkedinApp, 'http://www.linkedin.com/in/kenny-kc-chu')
addonClickToLink(youtubeApp, 'https://www.youtube.com/')
// addonClickToLink(whatsApp, 'https://api.whatsapp.com/send?phone=')
// addonClickToLink(whatsappButton, 'https://api.whatsapp.com/send?phone=')
addonClickToLink(telegramApp, 'https://t.me/Kengono')
addonClickToLink(telegramButton, 'https://t.me/Kengono')
// addonClickToLink(callButton, 'tel:852-********')
// addonClickToLink(callApp, 'tel:852-********')
// addonClickToLink(gameApp, gameLink)


// App opening
const myApps = [{
        app: contactMeApp,
        div: contactMeDiv
    },
    {
        app: wechatApp,
        div: wechatDiv
    },
    {
        app: messageApp,
        div: messageDiv
    },
    {
        app: aboutMeApp,
        div: aboutMeDiv
    },
    {
        app: gameApp,
        div: gameDiv
    },
    {
        app: notesApp,
        div: notesDiv
    },
    {
        app: reminderApp,
        div: reminderDiv,
    }
]

// App opening
for (let appObject of myApps) {
    appObject.app.addEventListener('click', () => {
        toggleClass(returnHomeButton, 'active')
        addClass(appObject.div, 'active')
    })
}

// Return home button 
returnHomeButton.addEventListener('click', () => {
    toggleClass(returnHomeButton, 'active')
    for (let appObject of myApps) {
        removeClass(appObject.div, 'active')
    }
})

// Buttons within Contact Me App 
contactMe_messageMeButton.addEventListener('click', () => {
    removeClass(messageDiv, 'active')
    addClass(messageDiv, 'active')
})

contactMe_wechatMeButton.addEventListener('click', () => {
    removeClass(messageDiv, 'active')
    addClass(wechatDiv, 'active')
})


// Button inside reminder app
newReminderButton.addEventListener('click', () => {
    const reminderItems = document.querySelectorAll('.reminder-item').length

    if (length > 8) {
        alert('Max reminders reached')
    } else {

        const reminderItemDiv = document.createElement('div')
        addClass(reminderItemDiv, 'reminder-item')
        const checkboxInput = document.createElement('input')
        checkboxInput.setAttribute('type', 'checkbox')
        const checkmarkSpan = document.createElement('span')
        addClass(checkmarkSpan, 'checkmark')
        const reminderInput = document.createElement('textarea')
        const horizontalLine = document.createElement('hr')

        reminderItemDiv.append(checkboxInput, checkmarkSpan, reminderInput, horizontalLine)

        reminderDivContainer.appendChild(reminderItemDiv)
    }

})

// NO FUNCTIONS YET
messageMeButton.addEventListener('click', () => {
    alert("MESSAGE WILL WORK SOON!")
})