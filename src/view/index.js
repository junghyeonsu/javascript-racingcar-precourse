import { $ } from '../utils/dom.js';
import {
  createHeaderTemplate,
  createMenuContentContainer,
  createMenuButtons,
} from '../templates/index.js';

import { SELECTOR } from '../constants.js';

class RacingCarGameView {
  constructor() {
    this.initializeApp();
    this.renderCarNamesForm();
  }

  initializeApp() {
    $(`#${SELECTOR.racingCarGameApp}`).innerHTML =
      createHeaderTemplate() + createMenuButtons() + createMenuContentContainer();
  }

  renderMenuContent(menu) {
    $('#menu-content-container').innerHTML = `<div>${menu}</div>`;
  }
}

export default RacingCarGameView;
