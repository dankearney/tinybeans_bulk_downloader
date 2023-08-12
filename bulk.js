var birthDate = new Date("February 27, 2023");
var baseUrl = "https://tinybeans.com/app/#/main/entries/1745421/2023/";

function navigateToUrl(url) { 
    window.location.href = url; 
};

function getUrl(baseUrl, date) { 
    return baseUrl + (date.getMonth()+1) + "/" + date.getDate(); 
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

currentDate = birthDate;
var globalImages = []
while (currentDate - new Date() < 0) {
    navigateToUrl(getUrl(baseUrl, currentDate));
    // Pause 5 seconds to make sure the page loads
    await new Promise(r => setTimeout(r, 5000));
    images = document.querySelectorAll("img.blob")  
    images.forEach(
        function(item) { 
            globalImages.push(item.src); 
    })
    currentDate = addDays(currentDate, 1);
}

var command = "wget -w 5 --random-wait " + globalImages.join(" ");

console.log(command);

console.log(" Execute copy(command) to get it to your clipboard!");
