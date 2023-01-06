let episodes = ["Yellow", "Green", "Blue", "Orange", "Violet", "Red", "Pink"];

function generate_order() {
    let order = [];
    let white_at_end = document.getElementById("white-at-end").checked;
    let black_at_beginning = document.getElementById("black-at-beginning").checked;
    let temp = episodes.map((x) => x);
    if (!white_at_end) {
        temp.push("White");
    }
    if (!black_at_beginning) {
        temp.push("Black");
    }
    while (temp.length) {
        let episode = temp[Math.floor((Math.random() * 10) % temp.length)];
        order.push(episode);
        temp.splice(temp.indexOf(episode), 1);
    }
    if (white_at_end) {
        order.push("White");
    }
    if (black_at_beginning) {
        order.unshift("Black");
    }
    console.log(order);
    return order;
}

function generate() {
    console.log("Generating episode orders");
    let order = generate_order();
    console.log(order);
    let s = document.getElementById("episodes-order");
    s.innerHTML = "";
    for (let i = 0; i < order.length; i++) {
        let episode_div = document.createElement("div");
        episode_div.classList.add("episode-div");
        episode_div.style.backgroundColor = order[i];
        let inner_p = document.createElement("p");
        inner_p.textContent = order[i];
        if (inner_p.textContent == "Black" || inner_p.textContent == "Blue" || inner_p.textContent == "Red") {
            inner_p.style.color = "white";
        }
        episode_div.appendChild(inner_p);
        s.appendChild(episode_div);
    }
    s.style.border = "3px dashed #ededed";

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        s.style.borderColor = "#161616";
    }

    let save_img = document.createElement("button");
    save_img.textContent = "Save as png!";
    save_img.addEventListener("click", printToFile("episodes-order"));
    console.log(save_img);

    s.appendChild(save_img);
}

document.getElementById("submit-button").addEventListener("click", generate, false);

//Creating dynamic link that automatically click
/* function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link);
}

//Your modified code.
function printToFile(div) {
    console.log("Saving to png file...");
    html2canvas(div, {
        onrendered: function (canvas) {
            var myImage = canvas.toDataURL("image/png");
            //create your own dialog with warning before saving file
            //beforeDownloadReadMessage();
            //Then download file
            downloadURI("data:" + myImage, "yourImage.png");
        },
    });
} */

// ------------------------
