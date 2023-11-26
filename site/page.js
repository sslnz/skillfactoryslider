const slides = [
    {
        img: 'image_1.jpg',
        texts: [
            `Rostov-on-Don <br/>LCD admiral`,
            `81 m2`,
            `3.5 months`,
            `Upon request`
        ],
    },
    {
        img: 'image_2.jpg',
        texts: [
            `Sochi <br/>Thieves`,
            `105 m2`,
            `4 months`,
            `Upon request`
        ],
    },
    {
        img: 'image_3.jpg',
        texts: [
            `Rostov-on-Don <br/>Patriotic`,
            `93 m2`,
            `3 months`,
            `Upon request`
        ],
    }
]

const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const text3 = document.querySelector('#text3')
const text4 = document.querySelector('#text4')

const left_arrow = document.querySelector('#left-arrow')
const right_arrow = document.querySelector('#right-arrow')

const point1 = document.querySelector('#pont1')
const point2 = document.querySelector('#pont2')
const point3 = document.querySelector('#pont3')

const nav1 = document.querySelector('#nav1')
const nav2 = document.querySelector('#nav2')
const nav3 = document.querySelector('#nav3')

const line1 = document.querySelector('#line1')
const line2 = document.querySelector('#line2')
const line3 = document.querySelector('#line3')

const image = document.querySelector('#image')

const setSlide = (index) => {

    text1.innerHTML = slides[index].texts[0]
    text2.innerHTML = slides[index].texts[1]
    text3.innerHTML = slides[index].texts[2]
    text4.innerHTML = slides[index].texts[3]

    const str = image.src.substring(image.src.lastIndexOf('/') + 1, image.src.length)
    image.src = image.src.replace(str, slides[index].img)

    switch (index) {
        case 0:
            setPointStyles(point1, point2, point3)
            setNavbarStyle(
                {nav: nav1, line: line1},
                {nav: nav2, line: line2},
                {nav: nav3, line: line3}
            )
            break
        case 1:
            setPointStyles(point2, point1, point3)
            setNavbarStyle(
                {nav: nav2, line: line2},
                {nav: nav1, line: line1},
                {nav: nav3, line: line3}
            )
            break
        case 2:
            setPointStyles(point3, point1, point2)
            setNavbarStyle(
                {nav: nav3, line: line3},
                {nav: nav1, line: line1},
                {nav: nav2, line: line2}
            )
            break
    }
}

const setPointStyles = (pC, p1, p2) => {
    pC.style.background = 'rgba(255, 255, 255, 1)'
    p1.style.background = 'rgba(255, 255, 255, 0.3)'
    p2.style.background = 'rgba(255, 255, 255, 0.3)'
}

const setNavbarStyle = (navC, nav1, nav2) => {
    navC.nav.style.color = '#E3B873'
    nav1.nav.style.color = 'rgba(255, 255, 255, 0.3)'
    nav2.nav.style.color = 'rgba(255, 255, 255, 0.3)'

    navC.line.style.display = 'block'
    nav1.line.style.display = 'none'
    nav2.line.style.display = 'none'
}

const changeIndex = (index) => {
    if (index >= 3) index = 0
    if (index <= -1) index = 2

    return index
}

let currentIndex = 0

nav1.addEventListener('click', () => {
    currentIndex = 0
    setSlide(currentIndex)
})

nav2.addEventListener('click', () => {
    currentIndex = 1
    setSlide(currentIndex)
})

nav3.addEventListener('click', () => {
    currentIndex = 2
    setSlide(currentIndex)
})

left_arrow.addEventListener('click', () => {
    currentIndex -= 1
    currentIndex = changeIndex(currentIndex)
    setSlide(currentIndex)
})

right_arrow.addEventListener('click', () => {
    currentIndex += 1
    currentIndex = changeIndex(currentIndex)
    setSlide(currentIndex)
})

point1.addEventListener('click', () => {
    currentIndex = 0
    setSlide(currentIndex)
})

point2.addEventListener('click', () => {
    currentIndex = 1
    setSlide(currentIndex)
})

point3.addEventListener('click', () => {
    currentIndex = 2
    setSlide(currentIndex)
})
