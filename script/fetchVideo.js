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
                            <img src="assets/verified icon.png" alt="">

                        </div>

                        <!-- view section -->
                        <p class="font-inter text-sm text-left text-[#171717] opacity-70 mt-2">${video.others.views} views</p>
                    </div>
                </div>
        `

        gridContainer.appendChild(gridVideo)
    }
}

document.getElementById("all").addEventListener("click", () => {
    getVideo();
})



