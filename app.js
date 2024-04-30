const fileInput = document.querySelector('#file')
const slides = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let imgFiles = []
let currentSlide = 0

fileInput.onchange = (event) => {
    const files = Array.from(event.target.files)
    if (files.length === 0) return alert('файл не выбран')

    imgFiles = imgFiles.concat(files)
    console.log(files, 'fff')
    slides.innerHTML = ''

    imgFiles.forEach((file, index) => {
        const imgURL = URL.createObjectURL(file)
        const slide = document.createElement('div')
        slide.className = 'slide'
        slide.innerHTML = `<img src="${imgURL}" alt="Slide ${index + 1}">`
        slides.appendChild(slide)
    })
   showSlide(currentSlide)

}
function showSlide(index){
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, i) =>
        slide.style.display = i === index ? 'block': "none")
}

prevButton.addEventListener('click', () =>{
    if (currentSlide > 0){
        currentSlide--
        showSlide(currentSlide)
    }
})

nextButton.addEventListener('click', () =>{
    if (currentSlide < imgFiles.length - 1){
        currentSlide++
        showSlide(currentSlide)
    }
})
function showSlides (index) {
    slides.forEach((slide , i) => {
        if (i === index) {
            slides.classList.add("active")
        }else {
            slides. classList.remove("active")
        }
    })

}
 const remove = document.querySelector('.remove')

remove.addEventListener('click',function () {
    // currentSlide.remove()
    if (currentSlide === imgFiles.length - 1){
        currentSlide--
    }
    showSlides(currentSlide)
})







