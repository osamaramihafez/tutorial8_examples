// Notice that this function is asyncronous, this means it returns a promise.
async function apiPOST(path, body = {}) {
  return await $.ajax({
    url: API_URL + path,
    type: "POST",
    data: body,
    cache: false,
    dataType: "text json",
  })
    .done((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err.responseJSON);
      return err.responseJSON;
    });
}

// Let's say the server responds with a 200 status code, then we will hit .done
// and the response object passed into the callback will be the response the server sent us.
//
// If the server responds with an error status code (anything 400+), then we will hit .catch
// and the response the server sent us will be inside err.responseJSON

async function apiGET(path) {
  return await $.ajax({
    url: API_URL + path,
    type: "GET",
    dataType: "text json",
  })
    .done((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err.responseJSON);
      return err.responseJSON;
    });
  // In both cases you will be returning the response from the actual server
  // (which is what you want if the server responds to everything including errors for you)
}

// Useful Jquery functions:
// Documentation for the .hide method: https://api.jquery.com/hide/
// Documentation for the .show method: https://api.jquery.com/show/
// Documentation for the .html method: https://api.jquery.com/html/

// An arrow function where objects passed in as params are destructured
const getMealItemsMsg = ({ Breakfast, Lunch, Dinner }) => {
  apiGET("/meal/items").then((res) => {
    if (res.success) {
      $("#meals").html(res.msg);
    } else {
      $("#meals").html(
        `In the morning we eat the ${Breakfast} and the ${Lunch}, then we eat the ${Dinner} `
      );
    }
  });
};

const mealItems = {
  Breakfast: "potato",
  Lunch: "tomato",
  Dinner: "pomato",
  Brunch: "When there's not enough time for breakfast or lunch.",
  Supper: "Nothing much, what's sup with you?",
};

getMealItems(mealItems);

// Destructuring example
const inventory = ["nokia", "milkshakes", "pomato juice"];

const { Supper, Brunch } = mealItems;
const { 0: phone, 2: powerup } = inventory;

console.log(Supper); // "Nothing much, what's sup with you?"
console.log(phone); // nokia
console.log(powerup); // pomato juice

// Spread operator example
const numbers = [1, 2, 3, 4, 5];

const moreNumbers = [...numbers, 6, 7, 10]; // cuz 7 8 9 :)

console.log(numbers); // [1,2,3,4,5,6,7,10]

// Ternary operator example
function getMealFee(isMember) {
  return isMember ? "$2.00" : "$10.00"; // condition ? value if it's true : value if it's false
}

getMealFee(false); // $10.00
getMealFee(true); // $2.00

// Remove duplicates from an array
const duplicateNumbers = [
  1, 2, 3, 4, 5, 5, 6, 7, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9,
];
const noDuplicateNums = [...new Set(duplicateNumbers)];
