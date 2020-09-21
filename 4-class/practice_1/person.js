// TODO 9: 在这里写实现代码
export default function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function returnString() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  };
}
