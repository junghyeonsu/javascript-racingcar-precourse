<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임 기능 목록</h1>

## 📌 기능 목록

#### **자동차 이름 입력 받기**

- [x] 사용자는 자동차의 이름을 입력 할 수 있다.
- [x] 자동차 이름은 쉼표를 기준으로 구분한다.

##### 예외상황

- [x] 자동차 이름이 겹쳤을 때 `alert`로 알려준다.
- [x] 자동차 이름이 없을 때 `alert`로 알려준다.
- [x] 자동차 이름 중에 5자 이하의 자동차가 있다면 `alert`로 알려준다.
- [x] 자동차 입력을 여러 번 클릭했을 경우 처리

#### **이동 횟수 입력 받기**

- [x] 사용자는 이동 횟수를 입력 할 수 있다.

##### 예외상황

- [x] 이동 횟수가 마이너스일 경우에는 `alert`로 알려준다.

#### **자동차 경주하기**

- [x] 자동차는 이동 횟수에 따라 이동한다.
- [x] 전진 조건은 0에서 9사이 무작위 값에서 4이상일 경우 전진한다.
- [x] 0에서 9사이 수를 뽑는 메소드는 `MissionUtils` 라이브러리의 `Random.pickNumberInRange`를 사용한다.
- [x] 한번의 횟수당 자동차들을 한번씩 출력한다.
- [x] 출력할 때 자동차 이름을 같이 출력한다.
- [x] 한번의 전진은 대시(-)로 표현한다.
- [x] 출력은 이동 횟수와 자동차 이름을 입력 받았을 때 출력된다.

##### 예외상황

- [x] 시도 횟수나 자동차 이름을 둘 중 하나라도 입력하지 않았을 때 처리
- [x] 이동 횟수 및 자동차 이름 버튼 여러 번 클릭했을 경우 처리

#### **우승자 발표**

- [x] 우승자를 출력한다.
- [x] 우승자는 가장 많이 전진한 하나 이상의 자동차이다.
- [x] 여러 명일 경우 쉼표를 이용해서 구분한다.

## 📌 리팩토링

- [x] 폴더 구조 변경 (`components`, `utils`, `validators`)
- [x] `Validator` 생성
- [x] 자동차 이름 입력 Form 클래스 분리
- [x] 시도 횟수 입력 Form 클래스 분리
- [x] 자동차 경기 결과 클래스 분리
- [x] 최종 우승자 클래스 분리
- [x] 상수 값들을 따로 분리해서 저장 (`constants.js` 생성)
- [x] 자동차 컨트롤러 생성해서 자동차 객체들을 관리하기

## 📌 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜Car.js
 ┃ ┣ 📜RacingCarNameForm.js
 ┃ ┣ 📜RacingResult.js
 ┃ ┣ 📜RacingTryCountForm.js
 ┃ ┗ 📜RacingWinner.js
 ┣ 📂controllers
 ┃ ┗ 📜Car.js
 ┣ 📂utils
 ┃ ┣ 📜dom.js
 ┃ ┗ 📜index.js
 ┣ 📂validators
 ┃ ┣ 📜CarNameValidator.js
 ┃ ┗ 📜TryCountValidator.js
 ┣ 📜constants.js
 ┗ 📜index.js
```
