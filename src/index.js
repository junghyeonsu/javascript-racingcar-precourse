import { $ } from './utils/dom.js';
import CarNameValidator from './validators/CarNameValidator.js';
import TryCountValidator from './validators/TryCountValidator.js';

import Car from './components/Car.js';
import RacingCountForm from './components/RacingCountForm.js';
import RacingResult from './components/RacingResult.js';

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
    this.$racingCountForm = new RacingCountForm();
    this.$racingResult = new RacingResult();
    this.addEventListeners();
    this.addDOM();
    this.init();
  }

  init() {
    this.$racingCountForm.hide();
    this.$racingResult.hide();
  }

  addDOM() {
    const racingCarResultContainer = document.createElement('div');
    const racingWinnerContainer = document.createElement('div');
    racingCarResultContainer.id = 'racing-car-result-container';
    racingWinnerContainer.id = 'racing-winner-container';
    $('#app').appendChild(racingCarResultContainer);
    $('#app').appendChild(racingWinnerContainer);
  }

  addEventListeners() {
    $('#car-names-submit').addEventListener('click', this.onClickCarNameSubmitButton.bind(this));
    $('#racing-count-submit').addEventListener(
      'click',
      this.onClickTryCountSubmitButton.bind(this),
    );
  }

  onClickCarNameSubmitButton(event) {
    event.preventDefault();
    this.cars = [];
    const splittedCarNames = $('#car-names-input').value.split(',');
    if (!this.validateCarNames(splittedCarNames)) return;
    splittedCarNames.forEach(carName => this.cars.push(new Car(carName)));
    this.$racingCountForm.show();
    this.playRacingCarGame();
  }

  validateCarNames(splittedCarNames) {
    return (
      CarNameValidator.checkAtLeastOneCar(splittedCarNames) &&
      CarNameValidator.checkCarNameDuplicated(splittedCarNames) &&
      CarNameValidator.checkCarNameUnderFiveLetter(splittedCarNames)
    );
  }

  onClickTryCountSubmitButton(event) {
    event.preventDefault();
    const submitTryCount = $('#racing-count-input').value;
    if (!TryCountValidator.checkTryCountLessThanZero(submitTryCount)) return;
    this.tryCount = submitTryCount;
    this.playRacingCarGame();
  }

  playRacingCarGame() {
    if (this.cars.length === 0 || this.tryCount === 0) return;
    this.$racingResult.show();

    let resultStirng = '';
    this.cars.forEach(car => car.resetAdvance());

    for (let i = 0; i < this.tryCount; i += 1) {
      // eslint-disable-next-line no-loop-func
      this.cars.forEach(car => {
        car.advanceCar();
        resultStirng += `<div>${car.printAdvance()}</div>`;
      });
      resultStirng += '<br />';
    }
    this.printGameResult(resultStirng);
    const winners = this.checkWinners(this.cars);
    this.printWinners(winners);
  }

  printGameResult(result) {
    $('#racing-car-result-container').innerHTML = '';
    $('#racing-car-result-container').innerHTML = result;
  }

  checkWinners(cars) {
    let maximumAdvance = 0;
    cars.forEach(car => {
      if (car.advance > maximumAdvance) maximumAdvance = car.advance;
    });

    const winners = cars.filter(car => car.advance === maximumAdvance);
    return winners;
  }

  printWinners(winners) {
    $('#racing-winner-container').innerHTML = '';
    const winnerTemplate = `
      <div>
        최종 우승자: 
        <span id="racing-winners">${winners.map(i => i.name).join(',')}</span>
      </div>
    `;
    $('#racing-winner-container').innerHTML = winnerTemplate;
  }
}

new RacingCarGame();
