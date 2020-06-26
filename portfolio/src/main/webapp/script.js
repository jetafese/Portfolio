// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* Language index to help with map location */
var languageIndex;

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Welcome to a site hosted on Google Cloud!', 
       'Ina maana hakuna wasiwasi! Niliishi kwa nchi hii miaka misaba',
       'የተወለድኩት አዲስ አበባ ውስጥ ነው', 
       'Jag har bott i Sverige i nästan ett år när jag reser i Västeuropa'];

  languageIndex = Math.floor(Math.random() * greetings.length);
  // Pick a random greeting.
  const greeting = greetings[languageIndex];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;

  // generate map
  createMap();
}

function testFetch() {
    console.log("Test fetch from data")

    fetch('/data').then(response => response.json()).then((comments) => {
        const container = document.getElementById('comment-container')
        container.innerText = '';
        for(const c of comments) {
          container.appendChild(createListElement(c))
        }
    })
}

/** Creates an <li> element containing text. */
function createListElement(comment) {
  const liElement = document.createElement('li');
  liElement.innerText = comment.text;
  return liElement;
}

/** Creates a map and adds it to the page. */
function createMap() {
  const mapDiv = document.getElementById('map');
  const map = new google.maps.Map(mapDiv, {center: {lat: 33.6532, lng: -39.3832}, zoom: 1});
  mapDiv.style.display = 'flex';

  switch(languageIndex) {
      case 0: addLandmark(map, 43.6532, -79.3832, 'Toronto', 'Home of the NBA Champions!');
              break;
      case 1:addLandmark(map, -1.2921, 36.8219, 'Nairobi', 'The city in the province of Nairobi');
              break;
      case 2:addLandmark(map, 8.9806, 38.7578, 'Addis Ababa', 'It means New Flower');
              break;
      case 3:addLandmark(map, 60.1282, 18.6435, 'Lund', 'University founded in 1666');
              break;
      default: break;
  }
}

/** Adds a marker that shows an info window when clicked. */
function addLandmark(map, lat, lng, title, description) {
  const marker = new google.maps.Marker({
      position: {lat: lat, lng: lng}, 
      map: map, 
      animation: google.maps.Animation.DROP, 
      draggable: true,
      title: title});
  
  const infoWindow = new google.maps.InfoWindow({content: description});
  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}

/* List available comments from the data store */
window.addEventListener('DOMContentLoaded', () => {
    testFetch();
});
