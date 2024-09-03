var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/userCount").build();

connectionUserCount.on("updateTotalViews", (value) => {
    document.getElementById("totalViewsCounter").innerText = value;
});

connectionUserCount.on("updateTotalUsers", (value) => {
    document.getElementById("totalUsersCounter").innerText = value;
});

function newWindowLoadedOnClient() {
    connectionUserCount.send("NewWindowLoaded");
}

function fulfilled() {
    console.log("Connection ti User Hub Successful");
    newWindowLoadedOnClient();
}

function rejected() {
    console.log("Connection to User Hub Failed");
}

connectionUserCount.start().then(fulfilled, rejected);