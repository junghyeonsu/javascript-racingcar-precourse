import RacingCarGameController from './controller/index.js';
import RacingCarGameModel from './model/index.js';
import RacingCarGameView from './view/index.js';

class RacingCarGame {
  constructor() {
    this.$racingCarGameController = new RacingCarGameController(
      new RacingCarGameModel(),
      new RacingCarGameView(),
    );
  }
}

new RacingCarGame();
