class SignupView {
  constructor($main) {
    this.$main = $main
  }

  render() {
    const containerDiv = document.createElement("div")
    containerDiv.setAttribute("id", "form_container")
    this.$main.appendChild(containerDiv)

    const form = document.createElement("form")
    form.setAttribute("id", "grepp_form")
    containerDiv.appendChild(form)

    input("text", "name", "이름")
    input("email", "email", "이메일")
    input("text", "nickname", "닉네임")
  }
}
export default SignupView
