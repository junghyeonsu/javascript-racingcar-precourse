class RacingCarGameModel {
  constructor() {
    this.$menu = 'one';
  }

  getMenu() {
    return this.$menu;
  }

  setMenu(menu) {
    this.$menu = menu;
  }
}

export default RacingCarGameModel;
