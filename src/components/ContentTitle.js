export default class ContentTitle {
  constructor({ $target, initialState }) {
    this.$target = $target
    this.title = document.createElement("div")
    this.title.className = "content_title"
    this.$target.appendChild(this.title)

    this.titleText = initialState

    this.render()
  }

  render() {
    this.title.innerHTML = `<h1>${this.titleText}</h1>`
  }
}
