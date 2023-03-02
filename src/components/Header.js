class Header {
  constructor($body) {
    this.$body = $body
  }

  createMenuElem(divClass, spanClass, spanId, menuText) {
    const div = document.createElement("div")
    div.setAttribute("class", divClass)

    const span = document.createElement("span")
    span.setAttribute("class", spanClass)
    span.setAttribute("id", spanId)
    span.appendChild(document.createTextNode(menuText))

    div.appendChild(span)
    return div
  }

  render() {
    const header = document.createElement("header")
    const home_menu = this.createMenuElem(
      "header header_left",
      "menu_name",
      "menu_home",
      "HOME"
    )
    const signup_menu = this.createMenuElem(
      "header header_right",
      "menu_name",
      "menu_signup",
      "SIGNUP"
    )

    header.appendChild(home_menu)
    header.appendChild(signup_menu)
    this.$body.appendChild(header)
  }
}
export default Header
