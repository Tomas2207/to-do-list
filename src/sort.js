export default function (arr) {
  const sort = document.querySelector('#sort');
  const mid = document.querySelector('.mid-content');
  mid.innerHTML = '';
  console.log(sort.value);

  if (sort.value === 'Red') {
    arr = arr.sort((a, b) => {
      if (a.priority === 'Red' && b.priority === 'Yellow') {
        return -1;
      }
      if (a.priority === 'Red' && b.priority === 'Green') {
        return -1;
      }
      if (a.priority === 'Yellow' && b.priority === 'Green') {
        return -1;
      }
    });
  } else {
    arr = arr.sort((a, b) => {
      if (a.priority === 'Yellow' && b.priority === 'Red') {
        return -1;
      }
      if (a.priority === 'Green' && b.priority === 'Red') {
        return -1;
      }
      if (a.priority === 'Green' && b.priority === 'Yellow') {
        return -1;
      }
    });
  }
  console.log('sorted', arr);
}
