/* pacman goes to the right, followed by 1 space, then blinky, pinky, inky, then clyde
   15 second interval, then
   blue ghosts go to the left, followed by 1 space, then pacman
*/

const hoursBox1     = document.getElementById('hours1');
const minutesBox1   = document.getElementById('minutes1');
const hoursBox2     = document.getElementById('hours2');
const minutesBox2   = document.getElementById('minutes2');
const colonBox      = document.getElementById('colon');
const fullscreenToggleInner = document.getElementById('fullscreen-toggle-inner');
const fullscreenButton      = document.getElementById('fullscreen-toggle');

/* Pixel shape data. This will be replaced with an external JSON file later */
const pixelData = [
    {
        "name": "0",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "00111000",
                    "01001100",
                    "11000110",
                    "11000110",
                    "11000110",
                    "01100100",
                    "00111000"
                ]
            }
        ]
    },
   {
        "name": "1",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "00011000",
                    "00111000",
                    "00011000",
                    "00011000",
                    "00011000",
                    "00011000",
                    "01111110"
                ]
            }
        ]
    },
    {
        "name": "2",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "01111100",
                    "11000110",
                    "00001110",
                    "00111100",
                    "01111000",
                    "11100000",
                    "11111110"
                ]
            }
        ]
    },
    {
        "name": "3",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "01111110",
                    "00001100",
                    "00011000",
                    "00111100",
                    "00000110",
                    "11000110",
                    "01111100"
                ]
            }
        ]
    },
    {
        "name": "4",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "00011100",
                    "00111100",
                    "01101100",
                    "11001100",
                    "11111110",
                    "00001100",
                    "00001100"
                ]
            }
        ]
    },
    {
        "name": "5",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "11111100",
                    "11000000",
                    "11111100",
                    "00000110",
                    "00000110",
                    "11000110",
                    "01111100"
                ]
            }
        ]
    },
    {
        "name": "6",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "00111100",
                    "01100000",
                    "11000000",
                    "11111100",
                    "11000110",
                    "11000110",
                    "01111100"
                ]
            }
        ]
    },
    {
        "name": "7",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "11111110",
                    "11000110",
                    "00001100",
                    "00011000",
                    "00110000",
                    "00110000",
                    "01100000"
                ]
            }
        ]
    },
    {
        "name": "8",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "01111000",
                    "11000100",
                    "11100100",
                    "01111000",
                    "10011110",
                    "10000110",
                    "01111100"
                ]
            }
        ]
    },
        {
        "name": "9",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "00000000",
                    "01111100",
                    "11000110",
                    "11000110",
                    "01111110",
                    "00000110",
                    "00001100",
                    "01111000"
                ]
            }
        ]
    },
    {
        "name": "colon",
        "type": "digit",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "0000",
                    "0000",
                    "0L00",
                    "0L00",
                    "0000",
                    "0L00",
                    "0L00",
                    "0000"
                ]
            }
        ]
    },
    {
        "name": "ghost-blinky",
        "type": "animation",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "0000000000000000",
                    "000000RRRR000000",
                    "0000RRRRRRRR0000",
                    "000RRRRRRRRRR000",
                    "00RRRRRRRRRRRR00",
                    "00RRRWWRRRRWWR00",
                    "00RRWWWWRRWWWW00",
                    "0RRRWWBBRRWWBBR0",
                    "0RRRWWBBRRWWBBR0",
                    "0RRRRWWRRRRWWRR0",
                    "0RRRRRRRRRRRRRR0",
                    "0RRRRRRRRRRRRRR0",
                    "0RRRRRRRRRRRRRR0",
                    "0RRRR0RRRR0RRRR0",
                    "00RR000RR000RR00",
                    "0000000000000000"
                ]
            },
            {
                "frameName": 1,
                "grid": [
                    "0000000000000000",
                    "000000RRRR000000",
                    "0000RRRRRRRR0000",
                    "000RRRRRRRRRR000",
                    "00RRRRRRRRRRRR00",
                    "00RRRWWRRRRWWR00",
                    "00RRWWWWRRWWWW00",
                    "0RRRWWBBRRWWBBR0",
                    "0RRRWWBBRRWWBBR0",
                    "0RRRRWWRRRRWWRR0",
                    "0RRRRRRRRRRRRRR0",
                    "0RRRRRRRRRRRRRR0",
                    "0RRRRRRRRRRRRRR0",
                    "0RRRR0RRRR0RRRR0",
                    "0RR0000RR0000RR0",
                    "0000000000000000"
                ]
            },
        ]
    },
    {
        "name": "pac-man",
        "type": "animation",
        "shape": [
            {
                "frameName": 1,
                "grid": [
                    "0000000000000000",
                    "000000YYYYY00000",
                    "0000YYYYYYYYY000",
                    "000YYYYYYYYYYY00",
                    "000YYYYYYYYYYY00",
                    "00YYYYYYYYYY0000",
                    "00YYYYYYY0000000",
                    "00YYYYY000000000",
                    "00YYYYYYY0000000",
                    "00YYYYYYYYYY0000",
                    "000YYYYYYYYYYY00",
                    "000YYYYYYYYYYY00",
                    "0000YYYYYYYYY000",
                    "000000YYYYY00000",
                    "0000000000000000",
                    "0000000000000000"
                ]
            },
        ]
    }
]; 

updateTime(); // Initial call to set the time immediately
const callUpdateTime = setInterval(updateTime, 1000); // Update time every second

/* Fullscreen toggle button functionality */
console.log(fullscreenButton.innerText);

fullscreenButton.addEventListener('click', () => {
    // document.fullscreenElement returns the element in fullscreen, or null if not.
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenToggleInner.innerText = 'fullscreen_exit';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            fullscreenToggleInner.innerText = 'fullscreen';
        }
    }
});

setInterval(onFullscreenChange, 1000); // check every second for fullscreen change
function onFullscreenChange() {
    if (!document.fullscreenElement) {
        // fullscreenButton.style.display = 'flex'; // show button when not in fullscreen
        fullscreenToggleInner.innerText = 'fullscreen';
    }
}

/* Get the time and update the display */
function updateTime() {

    const now = new Date(); // current date and time
    let hours = now.getHours(); // get current hours
    const meridian = hours >= 12 ? 'PM' : 'AM'; // determine AM or PM

    hours = hours % 12; // Convert to 12-hour format
    hours = hours === 0 ? 12 : hours; // Handle the midnight (0) case
    hours = hours.toString().padStart(2, '0'); // Ensure two digits
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure two digits for minutes

    if (hours > 9) {
        makeShapeInContainer(pixelData, hours.toString()[0], hoursBox1) // update hours 1st digit
    } else {
        hoursBox1.innerHTML = ''; // Clear the container if the first digit is not needed
    }
    makeShapeInContainer(pixelData, hours.toString()[1], hoursBox2) // update hours 2nd digit
    makeShapeInContainer(pixelData, "colon", colonBox); // colon
    makeShapeInContainer(pixelData, minutes.toString()[0], minutesBox1); // update minutes 1st digit
    makeShapeInContainer(pixelData, minutes.toString()[1], minutesBox2); // update minutes 2nd digit
    console.log("Time updated: " + hours + ":" + minutes + " " + meridian);
}

/* Create pixel shape in given container */
function makeShapeInContainer(data, itemName, shapeContainer) {
    shapeContainer.innerHTML = ''; // Clear previous content

    const pixelObject = data.find(item => item.name === itemName);
    const frameCount = pixelObject.shape.length;
    const rowsPerFrame = pixelObject.shape[0].grid.length;
    const colsPerFrame = pixelObject.shape[0].grid[0].length;

    for (let y = 0; y < rowsPerFrame; y++) {
        const itemNameObject = pixelData.find(item => item.name === itemName);
        const pixelRow = document.createElement('div');
        const pixelRowID = `${shapeContainer.id}-${itemName}-row-${y+1}`;
        pixelRow.setAttribute('id', pixelRowID);
        pixelRow.classList.add('pixel-row');
        shapeContainer.appendChild(pixelRow);
        const obectRowData = itemNameObject.shape[0].grid;

        for (let x = 0; x < itemNameObject.shape[0].grid[0].length; x++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            if (obectRowData[y][x] === '1') {
                pixel.classList.add('pixel-white');
            } else if (obectRowData[y][x] === 'R') {
                pixel.classList.add('pixel-red');
            } else if (obectRowData[y][x] === 'W') {
                pixel.classList.add('pixel-white');
            } else if (obectRowData[y][x] === 'B') {
                pixel.classList.add('pixel-blue');
            } else if (obectRowData[y][x] === 'L') {
                pixel.classList.add('pixel-light-blue');
            } else if (obectRowData[y][x] === 'Y') {
                pixel.classList.add('pixel-yellow');
            } else {
                pixel.classList.add('pixel-blank');
            }
            const shapeRowContainer = document.getElementById(pixelRowID);
            shapeRowContainer.appendChild(pixel);
        }
    }
    adjustPixelSize();
}










// working on this
function adjustPixelSize() {
const viewportWidth = window.innerWidth;
// console.log(`Viewport (visible window) width: ${viewportWidth}px`);

var finalPixelSize = viewportWidth / 36; // 36 pixels wide total for the full time display
var pixelGapSize = finalPixelSize / 18; // gap is 1/18th of pixel size

const allPixels = document.querySelectorAll('.pixel');
const allPixelRowHeight = document.querySelectorAll('.pixel-row');
// console.log(allPixels);

// allPixels.style.width = finalPixelSize + 'px';

allPixels.forEach(element => {
    element.style.width = (finalPixelSize) + 'px'; // setting width
    element.style.height = (finalPixelSize - (pixelGapSize * 2)) + 'px'; // setting height minus gap
    element.style.margin = (pixelGapSize) + 'px';
});

allPixelRowHeight.forEach(element => {
    element.style.height = finalPixelSize + 'px'; // setting height of row to match pixel height
});
}




