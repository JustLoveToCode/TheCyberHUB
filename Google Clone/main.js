document.addEventListener("DOMContentLoaded", function() {
    // Getting the searchInput using the querySelector
    const searchInput = document.getElementById("search-input");
    // Getting the googleSearchBtn using the querySelector
    const googleSearchBtn = document.querySelector(".google-search-btn");
    // Getting the luckySearchBtn using the querySelector
    const luckySearchBtn = document.querySelector(".lucky-search-btn");
    // Getting the searchIconBtn using the querySelector
    const searchIconBtn = document.querySelector(".search-icon-btn"); 
    

    // Creating the function for performSearch Functionality
    function performSearch() {
        // Trim the Spaces Before and After the Search
        // searchInput.value will return the String itself
        const input = searchInput.value.trim();
        // If the input actually exist
        if (input) {
            // Ensure that the Strings can be safely included in the URL
            const encodedInput = encodeURIComponent(input);
            const searchUrl = `https://www.google.com/search?q=${encodedInput}`;
            window.location.href = searchUrl;
        }
    }
    // Creating the function for performLuckySearch Functionality
    function performLuckySearch() {
        // Trim the Spaces Before and After the Search
        // searchInput.value will return the String itself
        const input = searchInput.value.trim();
        // If the input actually exist
        if (input) {
            // Ensure that the Strings can be safely included in the URL
            const encodedInput = encodeURIComponent(input);
            const luckySearchUrl = `https://www.google.com/search?q=${encodedInput}&btnI`;
            window.location.href = luckySearchUrl;
        }
    }

    // Event Listener for Google Search button
    googleSearchBtn.addEventListener("click", performSearch);

    // Event Listener for "I'm Feeling Lucky" button
    luckySearchBtn.addEventListener("click", performLuckySearch);

    // Event Listener for Search Icon button
    searchIconBtn.addEventListener("click", performSearch); 

    

    // Adding the Event Listener for keydown which is the Enter Button for the KeyBoard Event
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // Invoke the Functionality which is performSearch()
            performSearch();
        }
    });
});


