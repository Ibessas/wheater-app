const formatters = (Vue) => {
  Vue.filter('toDate', (value) => {
    const date = new Date(value);

    return zeroAEsquerda(date.getDate()) + '/' + zeroAEsquerda(date.getMonth()) + '/' + date.getFullYear()
  });
};

export default formatters;

function zeroAEsquerda(value) {
  return value < 10 ? '0' + value : value
}
