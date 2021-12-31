// var video = document.getElementById("zone_video");
var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDiECp6jiWwUTSDP2M2d_Nwcfwwjgp6j6c&channelId=UC_sdtjo-z0hBcBp9kMbhHpg&part=snippet,id&order=date&maxResults=1";

var succes = function(data) {
    var element = document.getElementById("zone-video");
    var url_video = data.items[0].id.videoId;

    element.attributes.src.nodeValue = ("https://www.youtube.com/embed/" + url_video.toString());
};

$.get(url, succes);

// alert(video.nodeValue);
// video.attributes.src.nodeValue = "non";
// console.log(video);