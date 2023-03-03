import Header from "./components/Header.js"
import HomePage from "./page/HomePage.js"
import SignupPage from "./page/SignupPage.js"
import { init } from "./lib/router.js"

export default function App($app) {
  this.target = $app

  this.route = () => {
    const { pathname } = location

    const mappedRoute = {
      "/web/": () => new HomePage({ $target: this.target, initialState: null }),
      "/web/signup": () =>
        new SignupPage({ $target: this.target, initialState: null }),
    }

    return mappedRoute[pathname]()
  }

  this.setState = () => {}

  this.render = () => {
    new Header({ $target: this.target, initialState: null })
    this.route()
  }

  this.render()
  init(this.route)
}
