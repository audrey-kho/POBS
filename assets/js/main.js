"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * Fetches all entries associated with API key once the webpage is loaded
   */
  function init() {
    document.querySelector("button").addEventListener("click", fetchCall);
  }

  function fetchCall() {
    fetch("https://console.echoAR.xyz/query?key=still-lab-7762")
      .then(checkStatus)
      .then(resp => resp.json())
      .then(pageLoad)
      .catch(handleError);
  }

  /**
   * Prints API response to console
   */
  function pageLoad(res) {
    document.querySelector(".container").classList.add("hidden");
    console.log(res);
    let object = res.db['e44aa0bf-32f4-45b7-99d0-e68b7baade1e'];
    let link = document.createElement("a");
    link.href = object.additionalData.shortURL;
    link.textContent = "Reach for weapon";
    document.getElementById("sim").appendChild(link);
  }

  /**
   * Prints an error message to the console
   *
   * @param {text} error - error message
   */
  function handleError(error) {
    console.log(error);
  }
  /** ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      throw Error("Error in request: " + response.statusText);
    }
  }
})();