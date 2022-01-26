# React-Hook 기초

* React란?
  - React는 **웹 프레임워크**로, **자바스크립트 라이브러리의 하나**로서 사용자 인터페이스를 만들기 위해 사용된다.

* React의 필요성?
  * react를 사용하지 않아도, html과 css, javascript를 이용해서 웹 페이지를 만들 수 있지만, **react를 이용해 사용자와 상호작용할 수 있는 동적인 UI를 쉽게 만들 수 있기 때문**에 많이 이용하는 추세

* React Hook?
  * Hooks 는 리액트 v16.8 에 새로 도입된 기능이며, 함수형태의 컴포넌트에서 사용되는 몇가지 기술을 Hook이라고 부른다. 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 그리고 렌더링 직후 작업을 설정하는 useEffect 등의 기능 등을 제공을 한다.

* * *
# 리액트 용어 정리
- 컴포넌트 : 앱을 이루는 최소한의 단위이며, props나 state와 같은 데이터를 입력받아 DOM 노드를 생성한다.
- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값이며, 어떠한 값을 컴포넌트에 전달해 줘야 할때 사용하며 할당된 후 컴포넌트 내부에서 값을 변경할 수 없다.
- state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있다. 동적인 데이터를 다룰 땐 state를 사용한다.


**이러한 기능을 통해 컴포넌트 간에는 무조건 props를 통해서만 데이터를 주고받고, 변경되는 값은 state만큼만 확인하면 된다!**

* * *
# 컴포넌트의 종류
* [함수형 컴포넌트] 내가 사용하는 컴포넌트이므로, 리액트 공식홈페이지에서도 추천하고 있는 방식이다.
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

* [클래스형 컴포넌트]
```
class Welcome extends React.Component {
  render() { /*클래스형은 rende함수 필수*/
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
* * *
# 리액트 프로젝트 생성
- 사전에 필요한것 : Node JS
  - Node JS 설치 링크 : [NodeJS 공식 홈페이지](https://nodejs.org/ko/, "Node Js 설치하러가기!")
    - Node JS 설치 확인 방법 : cmd창 Open 후, node -v 입력 하여 v17.3.0 처럼 나온다면 설치 완료
 
  - cmd Open후, 설치할 디렉토리로 이동하여 npx create-react-app 프로젝트명 입력
    - 예) npx create-react-app my-app

* 리액트 프로젝트 실행하는 법
  - VS Code의 터미널창에서 npm start run 입력 후, Enter
  - ※ 해당 프로젝트 디렉토리에 위치해 있어야함
* * *

