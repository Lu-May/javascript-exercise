export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  source.properties.status = 'processed';
  return Object.assign(source, { serialNumber: '12345' });
}
