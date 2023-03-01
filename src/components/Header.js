import { routeChange } from "../lib/router.js"

export default class Header {
  constructor({ $target, initialState }) {
    this.header = document.createElement("header")
    this.target = $target
    this.target.appendChild(this.header)

    this.state = initialState

    this.render()
  }

  setState(newState) {
    this.state = newState
    this.render()
  }

  render() {
    this.header.innerHTML = `<div class="header header_left">
                                    <span class="menu_name" id="menu_home">HOME</span>
                                </div>
                                <div class="header header_right">
                                    <span class="menu_name" id="menu_signup">SIGNUP</span>
                                </div>`

    const home = document.querySelector("#menu_home")
    home.addEventListener("click", () => {
      const path = location.origin + "/web/"
      routeChange(path)
    })

    const signup = document.querySelector("#menu_signup")
    signup.addEventListener("click", () => {
      const path = location.origin + "/web/signup"
      routeChange(path)
    })
  }
}
