import { observable } from 'mobx'

class Buzzwords {
  @observable flavor = [];
  @observable effects = [];
  @observable selected = {
    flavor: [],
    effects: []

  };
}

export default new Buzzwords();
