let jsonObject = `
{
    "dogBreeds": [{
        "breed": "Labrador Retriever",
        "breedType": "Purebred",
        "origin": "Canada,USA",
        "popularity": "1",
        "temperament": ["Cheerful", "Gentle", "Friendly", "Intelligent"],
        "hypoallergenic": "No",
        "intelligence": 7,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "German Shepard",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "2",
        "temperament": ["Corageous", "Intelligent", "Loyal", "Watchful"],
        "hypoallergenic": "No",
        "intelligence": 3,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "Golden Retriever",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "3",
        "temperament": ["Intelligent", "Kind", "Friendly", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 4,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "French Bulldog",
        "breedType": "Purebred",
        "origin": "France, UK",
        "popularity": "4",
        "temperament": ["Playful", "Sociable", "Friendly", "Lively", "Patient"],
        "hypoallergenic": "No",
        "intelligence": 58,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Bulldog",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "5",
        "temperament": ["Friendly", "Docile", "Willful", "Gregarious"],
        "hypoallergenic": "No",
        "intelligence": 77,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Beagle",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "6",
        "temperament": ["Gentle", "Intelligent", "Even Tempered", "Determined"],
        "hypoallergenic": "No",
        "intelligence": 72,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Poodle",
        "breedType": "Purebred",
        "origin": "Germany, France",
        "popularity": "7",
        "temperament": ["Intelligent", "Faithful", "Trainable", "Instinctual"],
        "hypoallergenic": "Yes",
        "intelligence": 2,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Rottweiler",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "8",
        "temperament": ["Intelligent", "Corageous", "Fearless", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "German Shorthaired Pointer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "9",
        "temperament": ["Intelligent", "Trainable", "Boisterous", "Cooperative"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Yorkshire Terrier",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "10",
        "temperament": ["Independent", "Intelligent", "Corageous", "Confident"],
        "hypoallergenic": "Yes",
        "intelligence": 27,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Boxer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "11",
        "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
        "hypoallergenic": "No",
        "intelligence": 48,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }]
}`

let bodyData = JSON.parse(jsonObject)
let data = bodyData.dogBreeds

let listDogName = []

data.forEach((item) => {
  listDogName.push(item.breed)
})

let firstselectDogList = document.getElementById('firstDogList')
let secondselectDogList = document.getElementById('secondDogList')
let traitsDropdown = document.getElementById('infoList')
let filterDropdown = document.getElementById('filter')

//add drop down for dog breeds:

listDogName.forEach((item, index) => {
  let option = document.createElement('option')
  option.value = listDogName[index]
  option.text = listDogName[index]
  firstselectDogList.appendChild(option)
})

listDogName.forEach((item, index) => {
  let option = document.createElement('option')
  option.value = listDogName[index]
  option.text = listDogName[index]
  secondselectDogList.appendChild(option)
})

let options = ['popularity', 'intelligence']

options.forEach((item, index) => {
  let option = document.createElement('option')
  option.value = options[index]
  option.text = options[index]
  return traitsDropdown.appendChild(option)
})

options.forEach((item, index) => {
  let option = document.createElement('option')
  option.value = options[index]
  option.text = options[index]
  return filterDropdown.appendChild(option)
})
//add drop down for dog information:

let compare = () => {
  document.getElementById('statement').innerHTML = ''

  //first selected dog object
  let select = document.getElementById('firstDogList')
  let selectedDogIndex = select.selectedIndex
  let firstDog = data[selectedDogIndex]

  //destructuring of first dog:
  let {
    breed,
    breedType,
    origin,
    popularity,
    temperament,
    hypoallergenic,
    intelligence,
    photo,
  } = firstDog

  //Second selected dog object
  let select2 = document.getElementById('secondDogList')
  let selectedDogIndex2 = select2.selectedIndex
  let secondDog = data[selectedDogIndex2]

  //destructuring of second dog:
  let {
    breed2,
    breedType2,
    origin2,
    popularity2,
    temperament2,
    hypoallergenic2,
    intelligence2,
    photo2,
  } = secondDog //doesnt work

  //trait selected
  let select3 = document.getElementById('infoList')
  let traitSelected = select3.selectedIndex

  function addImg(dog) {
    var image = new Image()
    image.src =
      `<img src="` + dog + `.jpg"` + ` style="width:250px;height:250px;">`
    const insert = document.getElementsByClassName('firstDog')
    insert.appendChild(image)
  }

  // <div class ="firstDog"></div> higher ranked dog here
  // <div class="secondDog"></div>

  if (selectedDogIndex == selectedDogIndex2) {
    alert('selected dogs cannot be the same')
  } else {
    if (traitSelected == 0) {
      if (popularity > secondDog.popularity) {
        let morePopulardog = secondDog.breed
        document
          .getElementById('statement')
          .append(
            `The ` + morePopulardog + ` is more popular than the ` + breed,
          )
      } else {
        let morePopulardog = breed
        document
          .getElementById('statement')
          .append(
            `The ` +
              morePopulardog +
              ` is more popular than the ` +
              secondDog.breed,
          )
        addImg(morePopulardog)
      }
    } else {
      if (intelligence > secondDog.intelligence) {
        let moreIntelligentdog = secondDog.breed
        document
          .getElementById('statement')
          .append(
            `The ` + secondDog.breed + ` is more intelligent than the ` + breed,
          )
      } else {
        let moreIntelligentdog = breed
        document
          .getElementById('statement')
          .append(
            `The ` + breed + ` is more intelligent than the ` + secondDog.breed,
          )
        addImg(moreIntelligentdog)
      }
    }
  }
}

let showAll = () => {
  var thing = document.getElementById('showAll')
  //Dog images:
  listDogName.forEach((item, index) => {
    let imageElement = document.createElement('img')
    let imageFile = listDogName[index].jpg
    let imageGrid = document.getElementById('showAllDogs')

    //    image2:
    //   var img2 = document.createElement("img");
    //   img2.src= secondDog.photo
    //   var block2 = document.getElementById("dog2photo");
    //   block2.appendChild(img2);
  })

  if (thing.style.visibility == 'visible') {
    thing.style.visibility = 'hidden'
  } else {
    thing.style.visibility = 'visible'
  }
}

// let Compare = () => {
//   document.getElementById('statement').innerHTML = ''
//   if (selectedDogIndex == selectedDogIndex2) {
//     alert('selected dogs cannot be the same')
//   } else {
//     if (popularity > secondDog.popularity) {
//       document
//         .getElementById('statement')
//         .append(secondDog.breed + ` is more popular than ` + breed)
//     } else {
//       document
//         .getElementById('statement')
//         .append(breed + `is more popular than ` + secondDog.breed)
//     }
//   }

//   for(let i=0; i<temperament.length; i++){
//     document.getElementById('dog1temperament').append(`${temperament[i]} `)
//   }
