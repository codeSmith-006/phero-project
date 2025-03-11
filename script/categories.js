// fetching the buttons
const getButton = async () => {
    try {

        // fetching the api
        const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");

        const data = await response.json()
        displayCategory(data.categories);
    }

    catch (error) {
        displayCategory("dhorchi re mamma: ", error);
    }
}



// display the data
const displayCategory = (categories) => {

    // catch the button container
    const btnContainer = document.getElementById("btn-container");

    for (let category of categories) {
        
        // creating a div container every time the loop will run
        const container = document.createElement("div");

        // set the innerHTML for the container
        container.innerHTML = `
                        <button id="1001" class="font-inter font-medium text-[#252525] text-opacity-70 px-5 py-2 bg-btnAsh rounded btn hover:bg-btnRed hover:text-white">${category.category}</button>
        `

        // lastly appen the child in the main container
        btnContainer.appendChild(container);
    }



}

getButton();

