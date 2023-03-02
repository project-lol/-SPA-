import App from "./app.js"

new App(document.querySelector(".app"))

/*
1. 
다른 컴포넌트들을 렌더링할 수 있는 App 컴포넌트를 만든다. 
이 App 컴포넌트는 다른 컴포넌트들을 렌더링하며, 필요시 전역적인 상태를 관리하고, 라우터를 관리하는 역할을 한다. 
이 App 컴포넌트는 render, setState, route 와 같은 기능을 가진다. 
*/

/*
2. 
Header 컴포넌트를 만든다. 이 Header 컴포넌트는 
setState, render와 같은 함수를 가진다. 
이 Header 컴포넌트를 App를 통해서 렌더링한다. 

- Header 컴포넌트의 스타일을 수정한다. v
- Header 컴포넌트의 각 요소를 클릭하면, url이 변경되어야 한다. v
*/

/*
3. 
ContentTitle 컴포넌트를 만든다. 

ContentTitle 컴포넌트는 마찬가지로, 
setState, render와 같은 함수를 가진다. 

이 컴포넌트는 추가적으로 title 제목을 받아올 수 있도록한다. 그리고 받아온 title을 가지고 화면에 렌더링을 한다. 
*/

/*
4. 
각 url에 알맞게 페이지가 로드되도록 수정한다. 

- router 함수를 만든다. v
- routeChange 함수를 만든다. v
- routeChange 함수를 사용한다. v
- app에 init 함수를 가져와, 그 안에 this.route를 넘겨준다. v
- this.route 내부의 구현에는 pathname을 확인하고, 그 pathname에 알맞게 컴포넌트를 렌더링하는 로직을 구현한다. v
- init 함수는 app 컴포넌트 내부에 무조건적으로 실행하게 만든다. v
*/

/*
5. 
Home 컴포넌트를 구현한다. 
Home 컴포넌트는 /web/ 시에 렌더링되도록 해야한다. 

- Home 컴포넌트는 setState, render의 함수를 가지고 있어야 한다. v
- Home 컴포넌트는 ContentTitle 컴포넌트를 렌더링시킨다. v
*/

/*
6.
SignUp 컴포넌트를 구현한다. 
SignUp 컴포넌트는 /web/signup 시에 렌더링되도록 한다. 

- SignUp컴포넌트는 setState, render 의 함수를 가지고 있다. v 
- SignUp 컴포넌트는 ContentTitle 컴포넌트를 렌더링시킨다. v
*/

/*
7.
request 함수를 만든다. 
request 함수를 통해서 json 데이터를 가지고 온다. 
json 데이터를 HomePage에 넣어준다. 
*/

/*
8. 
home 페이지에 데이터를 기반으로 카드들을 렌더링 시킨다. 
*/

/*
9.
렌더링된 카드들의 스타일을 수정한다. 
*/

/*
10.뒤짚은 카드의 상태가 로컬스토리지에 저장되어 있도록 만든다. 

- 카드를 뒤집었을 때, 해당 카드의 id와 상태를 로컬스토리지에 저장한다. 
- 로컬 스토리지의 키 값은 cardStatus인데,

근데, 애매하게 느껴지는 부분은 해당 값을 저장하는 것이 객체라는 것이 이해가 안된다. 배열에 담긴 객체도 아니고, 그냥 객체? 
여러 데이터가 저장될 수도 있는게 아닌가? 
*/
