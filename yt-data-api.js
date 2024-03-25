var apiKey = ''; // YouTube Data API V3 Key

function channel() {
    channelID = document.querySelector("#channelID").value;
    var part = 'snippet,contentDetails,statistics';

    var url = 'https://www.googleapis.com/youtube/v3/channels';
    url += '?part=' + encodeURIComponent(part);
    url += '&id=' + encodeURIComponent(channelID);
    url += '&key=' + encodeURIComponent(apiKey);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var channel = data.items[0];

            document.querySelector('#channelName').innerHTML = channel.snippet.title;
            var subscriberCount = channel.statistics.subscriberCount
            if (subscriberCount >= 10000000) {
                subscriberCount = parseInt(channel.statistics.subscriberCount / 10000000) + "M"
            }
            else if (subscriberCount >= 1000) {
                subscriberCount = parseInt(channel.statistics.subscriberCount / 1000) + "K"
            }
            document.querySelector('#channelSubscribers').innerHTML = subscriberCount;
            document.querySelector('#channelVideos').innerHTML = channel.statistics.videoCount;
            if (channel.statistics.viewCount >= 10000000) {
                viewCount = parseInt(channel.statistics.viewCount / 10000000) + "M"
            }
            else if (channel.statistics.viewCount >= 1000) {
                viewCount = parseInt(channel.statistics.viewCount / 1000) + "K"
            }
            document.querySelector('#channelViews').innerHTML = viewCount;
        });
}

// function video() {
//     videoID = document.querySelector("#videoID").value;
//     var part = 'snippet,statistics';

//     var url = 'https://www.googleapis.com/youtube/v3/videos';
//     url += '?part=' + encodeURIComponent(part);
//     url += '&id=' + encodeURIComponent(videoID);
//     url += '&key=' + encodeURIComponent(apiKey);

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             var video = data.items[0];

//             document.querySelector('#videoViews').innerHTML = video.statistics.viewCount;
//             document.querySelector('#videoLikes').innerHTML = video.statistics.likeCount;
//             document.querySelector('#videoComments').innerHTML = video.statistics.commentCount;
//         });
// }

function video() {
    videoID = document.querySelector("#videoID").value;
    var part = 'snippet,statistics';

    var url = 'https://www.googleapis.com/youtube/v3/videos';
    url += '?part=' + encodeURIComponent(part);
    url += '&id=' + encodeURIComponent(videoID);
    url += '&key=' + encodeURIComponent(apiKey);

    var h3vc = document.querySelector("#viewContainer")
    var h3lc = document.querySelector("#likesContainer")
    var h3cc = document.querySelector("#commentsContainer")

    var spanvc = document.createElement("span")
    var spanlc = document.createElement("span")
    var spancc = document.createElement("span")

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var video = data.items[0];

            spanvc.innerHTML = video.statistics.viewCount;
            spanlc.innerHTML = video.statistics.likeCount;
            spancc.innerHTML = video.statistics.commentCount;

            h3vc.appendChild(spanvc)
            h3lc.appendChild(spanlc)
            h3cc.appendChild(spancc)
        });
}
