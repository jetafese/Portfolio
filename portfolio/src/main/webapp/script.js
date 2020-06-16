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

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Welcome to a site hosted on Google Cloud!', 
       'Ina maana hakuna wasiwasi! Niliishi kwa nchi hii miaka misaba',
       'የተወለድኩት አዲስ አበባ ውስጥ ነው', 
       'Jag har bott i Sverige i nästan ett år när jag reser i Västeuropa'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function testFetch() {
    console.log("Test fetch from data")

    fetch('/data').then(response => response.json()).then((data) => {
        const container = document.getElementById('greeting-container')
        container.innerText = '';
        container.appendChild(createListElement(data[0]))
        container.appendChild(createListElement(data[1]))
        container.appendChild(createListElement(data[2]))
    })
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
