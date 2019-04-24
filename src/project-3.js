// Do not change any of the function names

const makeCat = (name, age) => {
  return {
    name,
    age,
    meow() {
      return 'Meow!';
    }
  };
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
};

// console.log(makeCat('LittlePoundCake', 3));
// console.log(makeCat.name);
// console.log(makeCat.age);
// console.log(makeCat.meow());

const addProperty = (object, property) => {
  // add the property to the object with a value of null
  object[property] = null;
  // return the object
  return object;
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
};

const obj = {
  x: 0,
  y: 1,
};
// console.log(addProperty(obj,'cat'));

const invokeMethod = (object, method) => {
  object[method]();
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
};

const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  return mysteryNumberObject.mysteryNumber * 5;
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
};

const deleteProperty = (object, property) => {
  delete object[property];
  return object;
  // remove the property from the object
  // return the object
};

const newUser = (name, email, password) => {
  return {
    name,
    email,
    password
  };

  // create a new object with properties matching the arguments passed in.
  // return the new object
};

const hasEmail = (user) => {
  if (!user['email']) return false;
  return user['email'].length > 0
  // return true if the user has a value for the property 'email'
  // otherwise return false
};

const hasProperty = (object, property) => {
  return object[property] === true;
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
};

const verifyPassword = (user, password) => {
  return user.password === password;
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
};

const updatePassword = (user, newPassword) => {
  user.password = newPassword;
  return user;
  // replace the existing password on the user object with the value of newPassword
  // return the object
};

const addFriend = (user, newFriend) => {
  user.friends.push(newFriend);
  return user;
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
};

const setUsersToPremium = (users) => {
  users.map(user => user.isPremium = true);
  return users;
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
};

const sumUserPostLikes = (user) => {
  let sum = 0;
  // console.log(user.posts.length);
  user.posts.forEach((e, i) => {
    sum += user.posts[i].likes;
  });
    // sum = sum + user.posts[i].likes;

  return sum;
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
};
const user = {
  username: 'SunJieMing',
  password: 'JavaScript is awesome!',
  posts: [
    {
      id: '1',
      title: 'JS adventures!',
      likes: 10
    },
    {
      id: '2',
      title: 'LambdaSchool forever!',
      likes: 100
    },
    {
      id: '3',
      title: 'What is a JavaScript?',
      likes: 35
    },
    {
      id: '4',
      title: 'JS Objects for dummies',
      likes: 42
    },
    {
      id: '5',
      title: 'Online Education',
      likes: 99
    }
  ]
};
// console.log(sumUserPostLikes(user));


const addCalculateDiscountPriceMethod = (storeItem) => {
  storeItem.calculateDiscountPrice = () => {
    const discount = storeItem.price * storeItem.discountPercentage;
    return storeItem.price - discount;
  };

  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
};

const storeItem = {
  price: 80,
  discountPercentage: 0.1
};
const storeItem2 = {
  price: 5,
  discountPercentage: 0.5
};

// addCalculateDiscountPriceMethod(storeItem);
// console.log(storeItem.calculateDiscountPrice());
// console.log(storeItem);
// addCalculateDiscountPriceMethod(storeItem2);
// console.log(storeItem2.calculateDiscountPrice());
// console.log(storeItem2);
// console.log(addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice());
// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod
};
