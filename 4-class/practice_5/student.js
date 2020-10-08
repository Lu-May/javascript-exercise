// TODO 19: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass === undefined) {
      return `${super.introduce()} I am a Worker. I have a job.`;
    }
    return `${super.introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}
