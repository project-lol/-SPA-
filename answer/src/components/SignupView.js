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

    form.addEventListener("submit", e => {
      e.preventDefault()

      const personalInfo = JSON.parse(localStorage.getItem("personalInfo"))

      let idx = personalInfo.length
      let nameVal = e.target.name.value
      let emailVal = e.target.email.value
      let nicknameVal = e.target.nickname.value

      const submitInfo = {
        name: nameVal,
        email: emailVal,
        nickname: nicknameVal,
      }

      localStorage.setItem("personalInfo", submitInfo)
    })

    input("text", "name", "이름", true)
    input("email", "email", "이메일", true)
    input("text", "nickname", "닉네임", true)

    const roleValList = ["BE", "FE", "iOS", "Android", "Web"]
    const roleTxtList = ["백엔드", "프론트엔드", "iOS", "Android", "Web"]
    const mbtiValList = [
      "INTJ",
      "INTP",
      "ENTJ",
      "ENTP",
      "INFJ",
      "INFP",
      "ENFJ",
      "ENFP",
      "ISTJ",
      "ISFJ",
      "ESTJ",
      "ESFJ",
      "ISTP",
      "ISFP",
      "ESTP",
      "ESFP",
    ]
    const mbtiTxtList = [
      "INTJ",
      "INTP",
      "ENTJ",
      "ENTP",
      "INFJ",
      "INFP",
      "ENFJ",
      "ENFP",
      "ISTJ",
      "ISFJ",
      "ESTJ",
      "ESFJ",
      "ISTP",
      "ISFP",
      "ESTP",
      "ESFP",
    ]
    select("role", roleValList, rolTextList, true)
    select("mbti", mbtiValList, mbtiTxtList, false)

    button("submit", "등록")
  }
}
export default SignupView
