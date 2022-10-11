var users = {
  user1: {
    userName: "@elonmusk",
    displayName: "Elon Musk",
    joinedDate: "June 2009",
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: "/assets/elonmusk.jpg",
    coverPhotoURL: "/assets/elonmusk-cover.jpeg",
    tweets: [
      {
        text: "I admit to judging books by their cover",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Starship to the moon",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "Out on launch pad, engine swap underway",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },

  user2: {
    userName: "@BillGates",
    displayName: "Bill Gates",
    joinedDate: "June 2009",
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: "/assets/billgates.jpg",
    coverPhotoURL: "/assets/billgates-cover.jpeg",
    tweets: [
      {
        text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Should I start tweeting memes? Let me know in a comment.",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "In 2020, I read a book every hour.",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
};
//   window.location.href = 'http://127.0.0.1:5500/?user=user1'

let usp = new URLSearchParams(window.location.search);
let paramUser = usp.get("user");

//   if(usp.toString())
console.log(usp.toString());

// declare DOM variables
const headerContainer = document.getElementById("header-container");
const coverPhotoContainer = document.getElementById("cover-container");
const coverPhoto = document.createElement("img");
const headerInfo = document.createElement("div");
const profileContainer = document.getElementById("profile-container");
const profileInfoTop = document.createElement("div");
const profileInfoBottom = document.createElement("div");
const tweetsContainer = document.getElementById("tweets-container");
// convert follower count
let followers = users[paramUser].followerCount.toString().slice(0, 3);
let popInt = followers.split("").pop();
let convertedFollowers = followers.slice(0, 2) + "." + popInt + "M";
// header
headerContainer.innerHTML = `<button class="back-btn"><i class="gg-arrow-left"></i></button>`;
headerInfo.innerHTML = `<h3 class="display-name">${users[paramUser].displayName}<img  class="verified" src="/assets/icons8-verified-badge-48.png" alt="verified"></h3>
      <p class="header-tweets">${users[paramUser].tweets.length} Tweets</p>`;
headerInfo.setAttribute("class", "header-info");
headerContainer.appendChild(headerInfo);
// cover photo
coverPhoto.src = users[paramUser].coverPhotoURL;
coverPhoto.setAttribute("class", "cover-photo");
coverPhotoContainer.appendChild(coverPhoto);
// profile info
profileInfoTop.setAttribute("class", "profile-info-top");
profileInfoTop.innerHTML = `<img src="${users[paramUser].avatarURL}" class="profile-picture">
      <button class="following-btn">Following</button>`;
profileContainer.appendChild(profileInfoTop);
profileInfoBottom.setAttribute("class", "profile-info-bottom");
profileInfoBottom.innerHTML = `<h3 class="display-name profile">${users[paramUser].displayName}<img  class="verified" src="/assets/icons8-verified-badge-48.png" alt="verified"></h3>
      <p class="twitter-handle">${users[paramUser].userName}</p>
      <p class="joined-date"><i class="gg-calendar-dates"></i>Joined ${users[paramUser].joinedDate}</p>
      <div class="follow-counts"><p class="following-count"><span class="bold">${users[paramUser].followingCount}</span> Following</p>
      <p class="follower-count"><span class="bold">${convertedFollowers}</span> Followers</p></div>`;
profileContainer.appendChild(profileInfoBottom);
//tweets, loop to render tweets
for (let i = 0; i < users[paramUser].tweets.length; i++) {
  const tweet = document.createElement("div");
  tweet.setAttribute("id", "tweet");
  tweet.innerHTML = `<div class="profile-picture-mini"><img src="${users[paramUser].avatarURL}"></div>
          <div class="tweet-content">
              <p class="display-name tweet">${users[paramUser].displayName}<img class="verified" src="/assets/icons8-verified-badge-48.png" alt="verified"><span class="twitter-handle">${users[paramUser].userName}</span></p>
              <p class="tweet-innertext">${users[paramUser].tweets[i].text}</p>
              <div class="social-bar">
              <i class="gg-comment"></i>
              <i class="gg-repeat"></i>
              <i class="gg-heart"></i>
              <i class="gg-software-upload"></i>
              </div>
          </div>`;
  tweetsContainer.appendChild(tweet);
}
//eventlistener for tabs
const tab = document.getElementsByClassName("content-tab");
for (var i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", selectTab);
}

function selectTab() {
  const selected = document.getElementsByClassName("selected");
  selected[0].classList = "content-tab";
  event.target.classList.add("selected");
  console.log(event.target);
}

// event listener for Following & Back buttons
//Following = Gates
//Back = Elon
const followBtn = document.getElementsByClassName("following-btn")[0];
const backBtn = document.getElementsByClassName("back-btn")[0];

followBtn.addEventListener("click", selectBill);
followBtn.addEventListener("touchstart", selectBill);
backBtn.addEventListener("click", selectElon);
backBtn.addEventListener("touchstart", selectElon);

function selectBill() {
  window.location.href = "http://127.0.0.1:5500/?user=user2";
}

function selectElon() {
  window.location.href = "http://127.0.0.1:5500/?user=user1";
}
