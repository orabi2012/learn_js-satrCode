var sister = {
  name: "Sarah",
  age: 23,
  parents: ["alice", "andy"],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,

  GetYearOfB: function () {
    var y = new Date().getFullYear();

    return y - sister.age;
  },
};

sister.age = 60;

console.log(sister.age);

console.log(sister.GetYearOfB());
