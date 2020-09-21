export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const valuearr = Object.values(source);
  let result = 0;
  for (let index = 0; index < valuearr.length; index += 1) {
    result += Number(valuearr[index]);
  }
  return result;
}
