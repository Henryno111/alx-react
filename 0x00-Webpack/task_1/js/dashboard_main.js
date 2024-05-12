import $ from 'jquery';
import _ from 'lodash';

let counter = 0; // Initialize counter

$(document).ready(function() {
  const button = $('<button>').text('Click here to get started');
  const paragraph3 = $('<p>').attr('id', 'count');
  const paragraph4 = $('<p>').text('Copyright - Holberton School');

  // Append the elements to the body
  $('body').append(paragraph1, paragraph2, button, paragraph3, paragraph4);

  // Bind the debounce function to the button's click event
  button.click(_.debounce(updateCounter, 300));
});

function updateCounter() {
  counter++; // Increment counter
  $('#count').text(`${counter} clicks on the button`); // Update paragraph3 with the counter
}