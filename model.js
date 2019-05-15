class Model {
  constructor() {
    this.heading = 'Click to change'
    this.observers = []
  }
  registerObserver(observer) {
    this.observers.push(observer)
  }
  notifyAll() {
    this.observers.forEach(observer => {
      observer.update(this)
    })
  }
}

export default Model