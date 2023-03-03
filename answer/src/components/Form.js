export const input = (type, id, text, required) => {
  const span = document.createElement("span")
  span.setAttribute("class", "form_elem")

  const input = document.createElement("input")
  input.setAttribute("type", type)
  input.setAttribute("id", id)
  if (required) {
    input.setAttribute("required", "")
  }

  if (id == "name") {
    input.setAttribute("pattern", "^([가-힣]){2,4}$")
    input.setAttribute("title", "2~4 글자의 한글만 입력이 가능합니다.")
  }

  const label = document.createElement("label")
  label.setAttribute("for", id)
  label.appendChild(document.createTextNode(text))
  span.appendChild(label)

  span.appendChild(input)
  document.getElementById("grepp_form").appendChild(span)
}

export const select = (id, optValList, optTxtList, required) => {
  const span = document.createElement("span")
  span.setAttribute("class", "form_elem")

  const select = document.createElement("select")
  select.setAttribute("id", id)
  select.setAttribute("name", id)

  if (required) {
    select.setAttribute("required", "")
  }

  for (let i = 0; i < optValList.length; i++) {
    const option = document.createElement("option")
    option.setAttribute("value", optValList[i])
    option.appendChild(document.createTextNode(optTxtList[i]))
    select.appendChild(option)
  }

  span.appendChild(select)
  document.getElementById("grepp_form").appendChild(span)
}

export const button = (type, text) => {
  const span = document.createElement("span")
  span.setAttribute("class", "form_elem")

  const button = document.createElement("button")
  button.setAttribute("type", type)
  button.appendChild(document.createTextNode(text))

  span.appendChild(button)
  document.getElementById("grepp_form").appendChild(span)
}
