class SignupPage {
  constructor($main) {
    this.$main = $main
  }

  render() {
    const title = new ContentTitle(this.$main, "Sign Up, GreatPeoPle!")
    const signupView = new SignupView(this.$main)
    title.render()
    signupView.render()
  }
}
export default SignupPage
