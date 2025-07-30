let arr = [];

const inputBox = document.getElementById('arrayInput');
const outputBox = document.getElementById('output');

function showOutput(result) {
  outputBox.value = Array.isArray(result) ? JSON.stringify(result) : result;
}

// Push (Add element to end)
document.getElementById('btnPush').addEventListener('click', () => {
  const val = inputBox.value;
  if (val !== "") {
    arr.push(Number(val));
    showOutput(arr);
    inputBox.value = '';
  }
});

// Remove from end
document.getElementById('btnPop').addEventListener('click', () => {
  arr.pop();
  showOutput(arr);
});

// Remove from start
document.getElementById('btnShift').addEventListener('click', () => {
  arr.shift();
  showOutput(arr);
});

// Add to start
document.getElementById('btnUnshift').addEventListener('click', () => {
  const val = inputBox.value;
  if (val !== "") {
    arr.unshift(Number(val));
    showOutput(arr);
    inputBox.value = '';
  }
});

// Delete 0th index (sets to undefined)
document.getElementById('btnDelete').addEventListener('click', () => {
  delete arr[0];
  showOutput(arr);
});

// toString()
document.getElementById('btnToString').addEventListener('click', () => {
  showOutput(arr.toString());
});

// concat()
document.getElementById('btnConcat').addEventListener('click', () => {
  const result = arr.concat([10, 20]);
  showOutput(result);
});

// filter()
document.getElementById('btnFilter').addEventListener('click', () => {
  const result = arr.filter(num => num > 10);
  showOutput(result);
});

// find()
document.getElementById('btnFind').addEventListener('click', () => {
  const result = arr.find(num => num === 5);
  showOutput(result !== undefined ? result : "Not Found");
});

// sort()
document.getElementById('btnSort').addEventListener('click', () => {
  arr.sort((a, b) => a - b);
  showOutput(arr);
});

// reverse()
document.getElementById('btnReverse').addEventListener('click', () => {
  arr.reverse();
  showOutput(arr);
});

// slice(1,3)
document.getElementById('btnSlice').addEventListener('click', () => {
  const result = arr.slice(1, 3);
  showOutput(result);
});

// splice(2,1,99)
document.getElementById('btnSplice').addEventListener('click', () => {
  arr.splice(2, 1, 99);
  showOutput(arr);
});
