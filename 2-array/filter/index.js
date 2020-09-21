function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = collection.filter(function filterNumber(number) {
    return number % 3 === 0;
  });
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = collection.filter(function remove(number, index, self) {
    return self.indexOf(number) === index;
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
