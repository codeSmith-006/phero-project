// getting the object of video load 
const getVideo = async () => {
    try {

        // fetching the api
        const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");

        const data = await response.json();
        displayVideos(data.videos)
    }

    catch (error) {
        displayCategory("dhorchi re mamma: ", error);
    }
}

const displayVideos = (videos) => {

    showLoader();

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
                            ${video.authors[0].verified == true ? `<img src="assets/verified icon.png" alt=""></img>` : ``}

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

document.getElementById("all").addEventListener("click", () => {
    getVideo();
})


const showDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`;
    fetchDetails(url)
}

const fetchDetails = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayDetails(data.video);
    }
    catch (error) {
        console.log(error)
    }
}

const displayDetails = (details) => {

    showLoader();

    const detailsContainer = document.getElementById("details-container");

    detailsContainer.innerHTML = `
                    <div class="card bg-base-100 image-full w-full shadow-sm">
                    <figure>
                      <img
                        src= ${details.thumbnail};
                        alt="Shoes" />
                    </figure>


                    <div class="card-body">
                      <h2 class="card-title">${details.title}</h2>
                      <p>${details.description}</p>
                      <div class="card-actions justify-end">
                      </div>
                      
                    </div>
                  </div>

                                  <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                </form>
    `
    hideLoader();
}



