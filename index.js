function showSection(sectionId) {
    document.getElementById("home").style.display = "none";
    document.getElementById("upload").style.display = "none";
    document.getElementById("account").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}

function logout() {
    alert("Logged out successfully!");
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", function () {
const createBtn = document.getElementById("create-btn");
const viewCapsulesBtn = document.getElementById("view-capsules-btn");
const uploadSection = document.getElementById("upload");
const capsuleListSection = document.getElementById("capsule-list");
const capsuleForm = document.getElementById("capsuleForm");
const cardsContainer = document.getElementById("cardsContainer");
const capsuleList = document.getElementById("capsuleList");
const searchCapsule = document.getElementById("searchCapsule");

// Check if user is logged in
const loggedInUser = localStorage.getItem("loggedInUser");
if (!loggedInUser) {
alert("No user logged in. Redirecting to login page.");
window.location.href = "index.html";
} else {
document.getElementById("username").textContent = loggedInUser;
showSection('home'); // Default section
}

// Show Sections
function showSection(sectionId) {
document.getElementById("home").style.display = "none";
document.getElementById("upload").style.display = "none";
document.getElementById("capsule-list").style.display = "none";
document.getElementById(sectionId).style.display = "block";
}

// Logout Function
function logout() {
alert("Logged out successfully!");
localStorage.removeItem("loggedInUser");
window.location.href = "index.html";
}

// Show Upload Form
createBtn.addEventListener("click", () => showSection("upload"));

// Show Capsule List
viewCapsulesBtn.addEventListener("click", () => {
showSection("capsule-list");
displayCapsuleList();
});

// Handle Form Submission
capsuleForm.addEventListener("submit", async (event) => {
event.preventDefault();

const title = document.getElementById("title").value.trim();
const description = document.getElementById("description").value.trim();
const lockDate = new Date(document.getElementById("lockDate").value).getTime();
const mediaFiles = document.getElementById("media").files;

if (!title || !description || !lockDate || mediaFiles.length === 0) {
    alert("Please fill all fields.");
    return;
}

let mediaArray = [];
for (let file of mediaFiles) {
    let fileData = await convertToBase64(file);
    mediaArray.push({ type: file.type, data: fileData });
}

saveCapsule(title, description, lockDate, mediaArray);
capsuleForm.reset();
showSection("home"); // Return to home after submission
});

// Convert File to Base64
function convertToBase64(file) {
return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});
}

// Save Capsule to Local Storage
function saveCapsule(title, description, lockDate, mediaArray) {
let capsules = JSON.parse(localStorage.getItem("capsules")) || [];
capsules.push({ title, description, lockDate, media: mediaArray });
localStorage.setItem("capsules", JSON.stringify(capsules));
alert("Capsule saved!");
}

// Display Capsules in List
function displayCapsuleList() {
capsuleList.innerHTML = ""; // Clear previous list
let capsules = JSON.parse(localStorage.getItem("capsules")) || [];

if (capsules.length === 0) {
capsuleList.innerHTML = "<p>No capsules stored yet.</p>";
return;
}

capsules.forEach((capsule, index) => {
let li = document.createElement("li");
let lockDate = new Date(capsule.lockDate);
let isLocked = lockDate > new Date();

// Display capsule title with lock status
li.textContent = `${capsule.title} ${isLocked ? "(Locked 🔒)" : "(Unlocked ✅)"}`;
li.style.color = isLocked ? "red" : "green";

// Allow only unlocked capsules to be clicked
if (!isLocked) {
    li.style.cursor = "pointer";
    li.addEventListener("click", () => addCard(capsule));
}

capsuleList.appendChild(li);
});
}

// Search Capsules
searchCapsule.addEventListener("input", (event) => {
let query = event.target.value.toLowerCase();
let items = capsuleList.getElementsByTagName("li");
for (let item of items) {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
}
});

// Display Unlocked Capsules on Home Page
function displayUnlockedCapsules() {
let capsules = JSON.parse(localStorage.getItem("capsules")) || [];
capsules.forEach((capsule) => {
    if (new Date(capsule.lockDate) <= new Date()) {
        addCard(capsule);
    }
});
}

// Add Capsule as Card
function addCard(capsule) {
let card = document.createElement("div");
card.classList.add("memory-card");

let title = document.createElement("h3");
title.textContent = capsule.title;

let desc = document.createElement("p");
desc.textContent = capsule.description;

let mediaContainer = document.createElement("div");

capsule.media.forEach((media) => {
    if (media.type.startsWith("image")) {
        let img = document.createElement("img");
        img.src = media.data;
        img.style.width = "150px";
        img.style.borderRadius = "5px";
        mediaContainer.appendChild(img);
    } else if (media.type.startsWith("video")) {
        let video = document.createElement("video");
        video.src = media.data;
        video.controls = true;
        video.style.width = "150px";
        mediaContainer.appendChild(video);
    }
});

card.appendChild(title);
card.appendChild(desc);
card.appendChild(mediaContainer);
cardsContainer.appendChild(card);
}

// Show Unlocked Capsules on Page Load
displayUnlockedCapsules();
});

