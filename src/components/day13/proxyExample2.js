const personData = {
  height: '1.65',
  weight: 99.9
}

const personProxy = new Proxy(personData, {
  get: function (target, property) {
    if (property === "bmi") {
      return personData.weight / (personData.height ** 2);
    }
    return target[property]
  }
})

console.log('BMI', personProxy.bmi);
console.log('身高', personProxy.height);
console.log('體重', personProxy.weight);