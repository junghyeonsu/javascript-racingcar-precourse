import { $ } from '../utils/dom.js';
import { DOM } from '../constants.js';

class RacingResult {
  constructor() {
    this.$container = null;
    this.$winners = [];
  }

  createDOM() {
    this.$container = document.createElement('div');
    $('#app').appendChild(this.$container);
  }

  render() {
    this.$container.innerHTML = this.template();
  }

  template() {
    return `
      <p>
        <span>최종 우승자:</span>
        <span id="${DOM.RACING_WINNERS}">${this.printWinnersWithSplit(this.$winners)}</span>
      </p>
    `;
  }

  checkWinners(cars) {
    const maximumAdvance = Math.max(...cars.map(car => car.$advance));
    this.$winners = cars.filter(car => car.$advance === maximumAdvance);
  }

  printWinnersWithSplit(winners) {
    return winners.map(winner => winner.$name).join(',');
  }
}

export default RacingResult;
