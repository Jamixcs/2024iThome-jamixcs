let name = {
  firstName: "Jami",
  lastName: "Guo",
};

let ref = new Proxy(name, {
  get: function (target, property) {
    if (property === "fullName") {
      return target.firstName + "" + target.lastName;
    }
    return target[property];
  }
});

console.log(ref.fullName);
console.log(ref.firstName);