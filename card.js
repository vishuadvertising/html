var videos = [
    { poster: "1.webp", profile: "profile1.jpg", title: "Exploring the Wonders of Space", creater: "John Doe", views: 1234, timing: "2024-08-29T15:30:00Z" },
    { poster: "1.webp", profile: "profile2.jpg", title: "The Art of Cooking", creater: "Jane Smith", views: 2345, timing: "2024-08-29T16:00:00Z" },
    { poster: "1.webp", profile: "profile3.jpg", title: "Travel Diaries: Europe", creater: "Alex Johnson", views: 3456, timing: "2024-08-29T17:00:00Z" },
    { poster: "poster4.webp", profile: "profile4.jpg", title: "Fitness Tips for Beginners", creater: "Chris Lee", views: 4567, timing: "2024-08-29T18:00:00Z" },
    { poster: "poster5.webp", profile: "profile5.jpg", title: "Top 10 Programming Languages", creater: "Emily Davis", views: 5678, timing: "2024-08-29T19:00:00Z" },
    { poster: "poster6.webp", profile: "profile6.jpg", title: "A Journey into the Wild", creater: "Michael Brown", views: 6789, timing: "2024-08-29T20:00:00Z" },
    { poster: "poster6.webp", profile: "profile6.jpg", title: "A Journey into the Wild", creater: "Michael Brown", views: 6789, timing: "2024-08-29T20:00:00Z" },
    { poster: "poster6.webp", profile: "profile6.jpg", title: "A Journey into the Wild", creater: "Michael Brown", views: 6789, timing: "2024-08-29T20:00:00Z" }

]

var searched = videos.filter(random => {
    return(
        random.title.includes("Exploring")
    );});
console.log(searched);


function createCard() {

    var SearchInput = document.querySelector('.searchInput').value;
    var searchedVideos = videos.filter(e => e.title.includes(SearchInput));


    searchedVideos.forEach(video => {
        var card = document.createElement("div");
        card.className = "card";

        var videoPoster = document.createElement("div");
        videoPoster.className = "videoPoster";

        var videoInfo = document.createElement("div");
        videoInfo.className = "videoInfo";

        var posterImg = document.createElement("img");
        posterImg.src = video.poster;

        var videoTitle = document.createElement("h2");
        videoTitle.textContent = video.title;

        var videoCreator = document.createElement("p");
        videoCreator.textContent = video.creater;

        var videoViews = document.createElement("p");
        videoViews.textContent = `${video.views} views`;

        var videoTiming = document.createElement("p");
        videoTiming.textContent = new Date(video.timing).toLocaleString();

        var playButton = document.createElement("button");
        playButton.textContent = "Play";

        videoPoster.appendChild(posterImg);
        videoInfo.appendChild(videoTitle);
        videoInfo.appendChild(videoCreator);
        videoInfo.appendChild(videoViews);
        videoInfo.appendChild(videoTiming);
        videoInfo.appendChild(playButton);

        card.appendChild(videoPoster);
        card.appendChild(videoInfo);

        var playList = document.getElementById("playList");
        playList.appendChild(card);
    });

}

