# FirstReactNative

"처음 배우는 리넥트 네이티브" 기록 및 정리

<br><br>

## 라이브러리

`propTypes` : 프로젝트의 크기가 커지면서 컴포넌트에 props를 전달할 때 잘못된 타입을 전달하거나, 필수 로 전달해야 하는 값을 전달하지 않아서 문제가 생길 수 있습니다. 혹은 협업하는 다른 개발자가 잘못 전달할 수도 있습니다. 이런 상황에서 잘못된 props가 전달되었다는 것을 경고 메시지를 통해 알리는 방법으로 PropTypes를 사용하는 방법이 있습니다. 

<br>

`styled-components` : 스타일드 컴포넌트는 자바스크립트 파일 안에 스타일을 작성하는 CSS-in-JS 라이브러리이며, 스타일이 적용된 컴포넌트라고 생각하면 이해하기 쉽습니다.

https://styled-components.com/

```
npm install styled-components
```

128p - 4.3.1 스타일드 컴포넌트 사용법

<br>

`async-storage` : 로컬에 데이터를 저장하고 불러오는 기능을 구현. 비동기로 동작하며 문자열로 된 키-값(key-value) 형태의 데이터를 기기에 저장하고 불러올 수 있는 기능을 제공합니다.

https://github.com/react-native-community/async-storage

<br>

## 그 외

구글 머터리얼 디자인 아이콘 : https://material.io/resources/icons/?style=baseline

<br>

## 기록 끄적끄적


### ES6 문법
 
```javascript
//ES5
export default function App() {
}

//ES6
const App = () => {
}

export default App;
```

```javascript
//ES5
map(function (item){
    return <Task text={item.text} />
})

//ES6
map(item => (
    return <Task text={item.text} />
))
```