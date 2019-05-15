class Controller {
  constructor(model) {
    this.model = model
  }

  handleEvent(e) {
    e.stopPropagation()
    switch (e.type) {
      case 'click':
        this.clickHandler(e.target)
        break
      default:
        console.log(e.target)
    }
  }

  getModelHeading() {
    console.log(this.model)
    return this.model.heading
  }

  clickHandler(target) {
    this.model.heading = 'I changed'
    // target.innerText = this.getModelHeading()
    // this.model.notifyAll()
  }

}




export default Controller