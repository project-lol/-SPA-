export const setPersonalInfo = async () => {
  const response = await fetch("/web/src/data/new_data.json")
  const data = await response.json()
  if (!localStorage.getItem("personalInfo")) {
    localStorage.setItme("personalInfo", data)
  }
}
