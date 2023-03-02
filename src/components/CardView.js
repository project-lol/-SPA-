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
  }
}

export default CardView
