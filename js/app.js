// var video = document.getElementById("zone_video");
var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDiECp6jiWwUTSDP2M2d_Nwcfwwjgp6j6c&channelId=UC_sdtjo-z0hBcBp9kMbhHpg&part=snippet,id&order=date&maxResults=3";

var succes = function(data) {
    var element = document.getElementById("zone-video");
    var element_live = document.getElementById("video?live");
    var url_video = data.items[2].id.videoId;
    var live = data.items[2].snippet.liveBroadcastContent;

    element.attributes.src.nodeValue = ("https://www.youtube.com/embed/" + url_video.toString());

    if (live != "none") {
        element_live.innerHTML = "Je suis en live:";
    }
};

$.get(url, succes);

// alert(video.nodeValue);
// video.attributes.src.nodeValue = "non";
// console.log(video);