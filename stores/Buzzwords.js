import { observable } from 'mobx'

class Buzzwords {
  @observable flavor = [];
  @observable effects = [];
  @observable selected = {
    flavor: [],
    effects: []
  };
  @observable count = {
    flavor: 6,
    effects: 6
  }
  @observable recommendations = []
  @observable loading = false
}

export default new Buzzwords();
