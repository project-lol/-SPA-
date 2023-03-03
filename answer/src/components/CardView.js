class CardView {
  constructor($main) {
    this.$main = $main
  }

  render() {
    const containerDiv = document.createElement("div")
    containerDiv.setAttribute("id", "cards_container")
    this.$main.appendChild(containerDiv)

    const personalInfo = getPersonalInfo()
    personalInfo.forEach((info, index) => {
      const card = cardDiv(index) // 카드의 레이아웃 요소
      card.appendChild(cardPlane("front", info)) // 카드 앞면의 요소
      card.appendChild(cardPlane("back", info)) // 카드 뒷면의 요소
      containerDiv.appendChild(card)
    })

    this.infiniteScroll(containerDiv, personalInfo)
  }

  infiniteScroll(container, localStorage) {
    const io = new IntersectionObserver(
      (entry, observer) => {
        if (entry[0].isIntersecting) {
          io.unobserve(entry[0].target)
          const personalInfo = getPersonalInfo()
          personalInfo.forEach((info, index) => {
            const card = cardDiv(index)
            card.appendChild(cardPlane("front", info))
            card.appendChild(cardPlane("back", info))
            container.appendChild(card)
          })
          localStorage.setItem("index", personalInfo.length)
        }
      },
      {
        threshold: 0.7,
      }
    )
    const target = document.getElementById("card").lastChild
    io.observe(target)
  }
}

export default CardView
