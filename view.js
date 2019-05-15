class View {
  constructor(controller) {
    this.controller = controller
    this.heading = document.getElementById('heading')
    this.heading.innerText = controller.getModelHeading()
    this.heading.addEventListener('click', controller)
  }

}



export default View