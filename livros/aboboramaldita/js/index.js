const body = document.querySelector('body')
const sideBar = document.querySelector('.sideBar')
const list = document.querySelectorAll('li')
const showTitleSB = document.querySelectorAll('.showTitleSB')
const spotifyPlayer = document.querySelector('.spotifyPlayer')
const spotifyPlayerAbout = document.querySelector('.spotifyPlayerAbout')
const youtubePlayer = document.querySelector('.youtubePlayer')
const youtubePlayerAbout = document.querySelector('.youtubePlayerAbout')

const spotifyEl = document.querySelector('.spotifyEl')
const youtubeEl = document.querySelector('.youtubeEl')


// function limits card index
const limitListIndex = (id) => {
    if(id === 3 || id === 5 || id === 6) {
        return 0
    } else if (id === 4 || id === 7) {
        return 1
    } else if(id === 8) {
        return 2
    } else if (id === 9) {
        return 3
    }
    else {
        return id
    }
}
// function show card from sidebar
const listAnimation = () => {
    list.forEach((e, id) => {
        e.style.animation = `transformXCardShow ${.5 / ( limitListIndex(id) + 1)}s forwards ${.5 +  (limitListIndex(id) * 0.5) }s linear`
        
        e.style.animationDirection = 'normal'
    })
}
// function hides card from sidebar
const listAnimationBack = () => {
    list.forEach((e, id) => {
        setTimeout(() => {
            e.style.animation = ''
        }, 1000)
    })
}

// function show h3 from sidebar
const showTitleSBFunc = () => {
    showTitleSB.forEach((h3, id) => {
        h3.style.animation = 'opacityH3 1s forwards 1s'
    })
}
// function hides h3 from sidebar
const HideTitleSBFunc = () => {
    setTimeout(() => {
        showTitleSB.forEach((h3, id) => {
            h3.style.animation = ''
        })
    }, 1000)
}

// function show sidebar
const showSideBar = () => {
        listAnimation()
        showTitleSBFunc()

    if(body.clientWidth > 610) {
        sideBar.style.left = '50%'
        sideBar.style.width = `${body.clientWidth / 2}px` 
    } else {
        sideBar.style.left = '0'
        sideBar.style.width = '100%'
        body.style.overflowY = 'hidden'
    }
} 
// fuction hides sidebar
const toHideSideBar = () => {
    listAnimationBack()
    HideTitleSBFunc()

    sideBar.style.left = '105%'
    body.style.overflowY = 'auto'

}

// function Show Spotify Player

const showSpotifyPlayer = () => {
    youtubePlayer.style.display = 'none'
    youtubePlayerAbout.style.display= 'none'

    if(body.clientWidth >= 609 ) {
        youtubePlayer.innerHTML = ''
        if(spotifyPlayer.firstChild === null) {
            spotifyPlayer.appendChild(spotifyEl)
        }
        spotifyPlayer.style.display = 'inline'
        spotifyPlayer.style.top = body.clientHeight - 100 + 'px'
        spotifyPlayer.style.animation = 'showYoutubeyPlayer 1s forwards ease-in'
    } else if (body.clientWidth < 609) {
        youtubePlayerAbout.innerHTML = ''
        if(spotifyPlayerAbout.firstChild === null) {
            spotifyPlayerAbout.appendChild(spotifyEl)
        }
        spotifyPlayerAbout.style.display= 'inline'
        spotifyPlayerAbout.style.animation = 'showSpotifyPlayer 1s forwards 0.5s linear'
        window.scrollTo(0, body.clientHeight)
    }
}

// const show Youtube Player

const showYoutubePlayer = () => {
    spotifyPlayer.style.display = 'none'
    spotifyPlayerAbout.style.display= 'none'


    if(body.clientWidth >= 609 ) {
        spotifyPlayer.innerHTML = ''
        if(youtubePlayer.firstChild === null) {
            youtubePlayer.appendChild(youtubeEl)
        }
        youtubePlayer.style.display = 'inline'
        youtubePlayer.style.top = body.clientHeight - 100 + 'px'
        youtubePlayer.style.animation = 'showYoutubeyPlayer 1s forwards ease-in'
    } else if (body.clientWidth < 609) {
        spotifyPlayerAbout.innerHTML = ''
        if(youtubePlayerAbout.firstChild === null) {
            youtubePlayerAbout.appendChild(youtubeEl)
        }
        youtubePlayerAbout.style.display= 'inline'
        youtubePlayerAbout.style.animation = 'showYoutubeyPlayer 1s forwards 0.5s linear'
        window.scrollTo(0, body.clientHeight)
    }
}