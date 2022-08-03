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

let filterIntelligence = []
data.forEach((item) => {
  filterIntelligence.push([item.breed, item.intelligence])
})

let filterPopularity = []
data.forEach((item) => {
  filterPopularity.push([item.breed, item.popularity])
})

filterIntelligence.sort(function (a, b) {
  return a[1] - b[1]
})

filterPopularity.sort(function (a, b) {
  return a[1] - b[1]
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

//add drop down for dog information:

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

let compare = () => {
  document.getElementById('win').innerHTML = ''

  document.getElementById('statement').innerHTML = ''
  //first selected dog object
  let select = document.getElementById('firstDogList')
  let selectedDogIndex = select.selectedIndex
  let firstDog = data[selectedDogIndex]
  console.log(firstDog)
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
  // let {
  //   breed2,
  //   breedType2,
  //   origin2,
  //   popularity2,
  //   temperament2,
  //   hypoallergenic2,
  //   intelligence2,
  //   photo2,
  // } = secondDog //doesnt work why?

  //trait selected
  let select3 = document.getElementById('infoList')
  let traitSelected = select3.selectedIndex

  //add image of higher dog:
  function addImg(dog) {
    let imageElement = document.createElement('img')
    let imageFile = dog + '.jpg'
    imageElement.src = imageFile
    let imageGrid = document.getElementById('win')
    imageGrid.append(imageElement)
  }
  //clear image
  function clearImage() {
    let imageGrid = document.getElementById('win')
    imageGrid.remove()
  }

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
        addImg(morePopulardog)
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
        addImg(moreIntelligentdog)
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
    //addImg(moreIntelligentdog)
  }
}

let showAll = () => {
  var thing = document.getElementById('showAll')
  //Dog images:
  listDogName.forEach((item, index) => {
    let imageElement = document.createElement('img')
    let imageFile = item + '.jpg'
    imageElement.src = imageFile
    let imageGrid = document.getElementById('showAllDogs')
    imageGrid.append(imageElement)
  })

  if (thing.style.visibility == 'visible') {
    thing.style.visibility = 'hidden'
    document.getElementById('showAllDogs').innerHTML = ''
  } else {
    thing.style.visibility = 'visible'
  }
}

let filter = () => {
  //trait selected
  let filterSelect = document.getElementById('filter')
  let filterItem = filterSelect.selectedIndex

  if (filterItem == 'popularity') {
  } else {
  }
}

const filterDropDown = document.getElementById('filter')

filterDropDown.addEventListener('change', function handleChange(event) {
  if (event.target.value == 'popularity') {
    document.getElementById('showAllDogs').innerHTML = ''
    filterPopularity.sort(function (a, b) {
      return a[1] - b[1]
    })
    filterPopularity.forEach((item, index) => {
      let imageElement = document.createElement('img')
      let imageFile = item[0] + '.jpg'
      imageElement.src = imageFile
      let imageGrid = document.getElementById('showAllDogs')
      imageGrid.append(imageElement)
    })
  } else {
    document.getElementById('showAllDogs').innerHTML = ''
    filterIntelligence.sort(function (a, b) {
      return a[1] - b[1]
    })
    filterIntelligence.forEach((item, index) => {
      let imageElement = document.createElement('img')
      let imageFile = item[0] + '.jpg'
      imageElement.src = imageFile
      let imageGrid = document.getElementById('showAllDogs')
      imageGrid.append(imageElement)
    })
  }
})

//   for(let i=0; i<temperament.length; i++){
//     document.getElementById('dog1temperament').append(`${temperament[i]} `)
//   }
