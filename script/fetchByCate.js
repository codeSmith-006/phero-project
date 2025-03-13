const loadCategoriesVideo = (id) => {

    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`

    // const clickedButton = document.getElementById(`${id}`);




    // clickedButton.classList.add("active")
    getCategoryData(url);
}

const getCategoryData = async (url) => {
    showLoader();
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayCategoryVideos(data);
    }

    catch (error) {
        console.log("dhorchi re", error);
    }
}

const displayCategoryVideos = (videos) => {


    // fetch the grid container
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";
    document.getElementById("no-content").classList.add("hidden")

    if (videos.status === true) {
        for (let video of videos.category) {
    
            const gridVideo = document.createElement("div");
    
            gridVideo.innerHTML = `
                                    <div class="relative"> 
                        <!-- duration section -->
                        <div class="w-[24%] absolute right-3 bottom-3">
                            <p class="font-inter text-[10px] text-white p-1 bg-[#171717] rounded text-center">3hrs 56 min ago</p>
                        </div>
    
                            <!-- thumbnail section -->
                    <img class="rounded-lg h-48 w-full" src="${video.thumbnail}" alt="">
                    </div>
    
                    <!-- video details section -->
                    <div class="flex gap-3 mt-5">
    
                        <!-- profile image -->
                        <img class="rounded-full w-10 h-10" src="${video.authors[0].profile_picture}" alt="">
    
                        <!-- title section -->
                        <div>
    
                            <!-- heading -->
                            <h1 class="font-inter font-bold leading-6 text-[#171717]">${video.title}</h1>
    
                            <!-- name section -->
                            <div class="flex gap-2 items-center mt-2">
                                <p class="font-inter text-sm text-left text-[#171717] opacity-70">${video.authors[0].profile_name}</p>
    
                                <!-- verified icon -->
                                ${video.authors[0].verified == true ? `<img src="assets/verified icon.png" alt=""></img>` : `` }
    
                            </div>
    
                            <!-- view section -->
                            <p class="font-inter text-sm text-left text-[#171717] opacity-70 mt-2">${video.others.views} views</p>
                        </div>
                    </div>
                    <button onclick="showDetails('${video.video_id}'); video_details.showModal();" class="btn btn-wide w-full mt-2">Show Details</button>
            `
    
            gridContainer.appendChild(gridVideo)
        }
    }

    else {
        document.getElementById("no-content").classList.remove("hidden")
    }

    hideLoader();

}

document.getElementById("search-box").addEventListener("keyup", () => {
    search();
})

const search = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchValue}`;
    fetchSearch(url);
}

const fetchSearch = async (url) => {
    try {
        showLoader()
        const response = await fetch(url);
        const data = await response.json();
        displaySearchVideos(data.videos);
    }

    catch(error) {
        console.log("Problem: ", error)
    }
}

const displaySearchVideos = (videos) => {



    // fetch the grid container
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = "";
    document.getElementById("no-content").classList.add("hidden")

    for (let video of videos) {
        const gridVideo = document.createElement("div");

        gridVideo.innerHTML = `
                                <div class="relative"> 
                    <!-- duration section -->
                    <div class="w-[24%] absolute right-3 bottom-3">
                        <p class="font-inter text-[10px] text-white p-1 bg-[#171717] rounded text-center">3hrs 56 min ago</p>
                    </div>

                        <!-- thumbnail section -->
                <img class="rounded-lg h-48 w-full" src="${video.thumbnail}" alt="">
                </div>

                <!-- video details section -->
                <div class="flex gap-3 mt-5">

                    <!-- profile image -->
                    <img class="rounded-full w-10 h-10" src="${video.authors[0].profile_picture}" alt="">

                    <!-- title section -->
                    <div>

                        <!-- heading -->
                        <h1 class="font-inter font-bold leading-6 text-[#171717]">${video.title}</h1>

                        <!-- name section -->
                        <div class="flex gap-2 items-center mt-2">
                            <p class="font-inter text-sm text-left text-[#171717] opacity-70">${video.authors[0].profile_name}</p>

                            <!-- verified icon -->
                            ${video.authors[0].verified == true ? `<img src="assets/verified icon.png" alt=""></img>` : `` }

                        </div>

                        <!-- view section -->
                        <p class="font-inter text-sm text-left text-[#171717] opacity-70 mt-2">${video.others.views} views</p>
                    </div>

                    

                </div>
                <button onclick="showDetails('${video.video_id}'); video_details.showModal();" class="btn btn-wide w-full mt-2">Show Details</button>
        `

        gridContainer.appendChild(gridVideo)
    }

    hideLoader();
}