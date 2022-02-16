const card = document.getElementsByClassName('question')
let panel

for (panel = 0; panel < card.length; panel++) {
  card[panel].addEventListener('click', function () {
    this.classList.toggle('active')

    const answer = this.nextElementSibling
    if (answer.style.display === 'block') {
      answer.style.display = 'none'
    } else {
      answer.style.display = 'block'
    }
  })
}
