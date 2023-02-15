import Person from './person'
import { Vector, Color } from './structures'

export default class MainClass {
  constructor(public color: Color, public v: Vector, public person: Person) {}
}
