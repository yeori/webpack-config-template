import './style.scss'

const dev = () => {
  console.log('hellow webpack!')
}

class TestClass {
  constructor(value) {
    this.value = value
  }
  getValue() {
    return this.value
  }
}

export default { dev, TestClass}
