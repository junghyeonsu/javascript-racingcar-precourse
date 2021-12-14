import { $ } from '../utils/dom.js';

class RacingCarGameController {
  constructor(model, view) {
    this.$model = model;
    this.$view = view;

    this.initPropagationEventListener();
  }

  // 처음에 이벤트 위임을 해줄 컨테이너들의 클릭 이벤트를 등록한다.
  initPropagationEventListener() {
    $('#menu-button-container').addEventListener(
      'click',
      this.handleMenuButtonsPropagation.bind(this),
    );
  }

  // 메뉴 변경하는 함수
  handleMenuButtonsPropagation(event) {
    const { id } = event.target;

    switch (id) {
      case 'one':
        this.$model.setMenu(id);
        this.$view.renderMenuContent(this.$model.getMenu());
        break;
      case 'two':
        this.$model.setMenu(id);
        this.$view.renderMenuContent(this.$model.getMenu());
        break;
      case 'three':
        this.$model.setMenu(id);
        this.$view.renderMenuContent(this.$model.getMenu());
        break;
      default:
        break;
    }
  }
}

export default RacingCarGameController;
