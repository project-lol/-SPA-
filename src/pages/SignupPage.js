import ContentTitle from "../components/ContentTitle.js"

export default class SignupPage {
  constructor({ $target, initialState }) {
    const page_content = document.querySelector(".page_content")
    if (page_content) page_content.remove()

    this.target = $target
    this.main = document.createElement("main")
    this.main.className = "page_content"
    this.target.appendChild(this.main)

    this.state = initialState

    this.render()
  }

  setState() {}

  render() {
    new ContentTitle({
      $target: this.main,
      initialState: "Hello, GreatPeoPle!",
    })
  }
}
