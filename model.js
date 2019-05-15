class Model {
  constructor() {
    let heading = 'Click to change'
    this.observers = []
    Object.defineProperty(this, 'heading', {
      get() {
        return heading
      },
      set(value) {
        heading = value
        this.notifyAll()
      }
    })
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