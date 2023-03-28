// Created by: Bonnie Zhu
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates your pay depending on the amount of hours you work (including tax).
 */
function calculate() {
  // input
  const Length = parseInt(document.getElementById('Length').value)
  const Width = parseInt(document.getElementById('Width').value)
  const Height = parseInt(document.getElementById('Height').value)

  // process
  const Volumn = Length * Width * Height

  // output
  document.getElementById('Volumn').innerHTML = 'Volumn is: ' + Volumn + 'cm³'
}
