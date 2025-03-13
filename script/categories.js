// loader script

const showLoader = () => {
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("grid-container").classList.add("hidden");
}

const hideLoader = () => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("grid-container").classList.remove("hidden");
}


// fetching the buttons
const getButton = async () => {
    try {

        // fetching the api
        showLoader()
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
                        <button onclick="loadCategoriesVideo(${category.category_id})" id="${category.category_id}" class="font-inter font-medium text-[#252525] text-opacity-70 px-5 py-2 bg-btnAsh rounded btn hover:bg-btnRed hover:text-white cateBtn">${category.category}</button>
        `

        // lastly append the child in the main container
        btnContainer.appendChild(container);
    }

    const cateBtn = document.querySelectorAll(".cateBtn");

    btnContainer.addEventListener("click", (event) => {

        for (let btn of cateBtn) {
            btn.classList.remove("active", "bg-btnAsh", "text-[#252525]");
        }

        if (event.target.tagName === "BUTTON") {
            event.target.classList.add("active")
        }
    })

    hideLoader();

}

getButton();


