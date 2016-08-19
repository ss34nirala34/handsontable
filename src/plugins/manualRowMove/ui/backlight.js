import {BaseUI} from './_base';
import {addClass} from './../../../helpers/dom/element';

const CSS_CLASSNAME = 'ht__manualRowMove--backlight';

class BacklightUI extends BaseUI {
  constructor(hotInstance) {
    super(hotInstance);
  }

  build() {
    super.build();

    addClass(this.element, CSS_CLASSNAME);
  }
}

export {BacklightUI};