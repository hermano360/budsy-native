import { observable } from 'mobx'

class Contacts {
  @observable all = [
    {id: 1, name: 'Tom', age: 30},
    {id: 2, name: 'Jerry', age: 25},
    {id: 3, name: 'Jones', age: 28}
  ]
}

export default new Contacts();
