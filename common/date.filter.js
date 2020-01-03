export default (value, type) => {
  switch (type) {
    case 'date':
      return new Date(value).toLocaleDateString()
      break
    case 'time':
      return new Date(value).toLocaleTimeString()
      break
    default:
      return new Date(value).toLocaleString()
  }
}