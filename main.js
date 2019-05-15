import Model from './model.js'
import Controller from './controller.js'
import View from './view.js'

function main() {
  var model = new Model()
  var controller = new Controller(model)
  var view = new View(controller)
}

main()