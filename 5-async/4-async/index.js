async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const requestResult = await fetch(url);
    const data = await requestResult.json();
    document.writeln(data.name);
  } catch (error) {
    console.error(error);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
