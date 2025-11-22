/* pacman goes to the right, followed by 1 space, then blinky, pinky, inky, then clyde
   15 second interval, then
   blue ghosts fo to the left, followed by 1 space, then pacman
*/

const hoursBox1   = document.getElementById('hours1');
const minutesBox1 = document.getElementById('minutes1');
const hoursBox2   = document.getElementById('hours2');
const minutesBox2 = document.getElementById('minutes2');
const colonBox   = document.getElementById('colon');

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





updateTime();
setInterval(updateTime, 1000);

// get the time and update the display
function updateTime() {
    const now = new Date(); // current date and time
    let hours = now.getHours(); // get current hours
    const meridian = hours >= 12 ? 'PM' : 'AM'; // determine AM or PM

    hours = hours % 12; // Convert to 12-hour format
    hours = hours === 0 ? 12 : hours; // Handle the midnight (0) case
    hours = hours.toString().padStart(2, '0'); // Ensure two digits
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure two digits for minutes

    if (hours > 9) {
        makeShapeContainer(pixelData, hours.toString()[0], hoursBox1) // update hours 1st digit
    }
    makeShapeContainer(pixelData, hours.toString()[1], hoursBox2) // update hours 2nd digit
    makeShapeContainer(pixelData, "colon", colonBox); // colon
    makeShapeContainer(pixelData, minutes.toString()[0], minutesBox1); // update minutes 1st digit
    makeShapeContainer(pixelData, minutes.toString()[1], minutesBox2); // update minutes 2nd digit
    console.log("Time updated: " + hours + ":" + minutes + " " + meridian);
}


const shapeContainer = document.getElementById('shape-container');
// makeShapeContainer(pixelData, "pac-man", shapeContainer);


// Make pixel art from shape data - function version
function makeShapeContainer(data, itemName, shapeContainer) {
    // console.log("Item Name: " + itemName);
    shapeContainer.innerHTML = '';

    const pixelObject = data.find(item => item.name === itemName);
    const frameCount = pixelObject.shape.length;
    const rowsPerFrame = pixelObject.shape[0].grid.length;
    const colsPerFrame = pixelObject.shape[0].grid[0].length;

    for (let y = 0; y < rowsPerFrame; y++) {
        const itemNameObject = pixelData.find(item => item.name === itemName);

        // console.log("Width: " + itemNameObject.shape[0].grid[0].length);

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


// working on it
function adjustPixelSize() {
const viewportWidth = window.innerWidth;
console.log(`Viewport (visible window) width: ${viewportWidth}px`);

var finalPixelSize = viewportWidth / 36;

const allPixels = document.querySelectorAll('.pixel'); 
const allPixelRowHeight = document.querySelectorAll('.pixel-row');
console.log(allPixels);

// allPixels.style.width = finalPixelSize + 'px';

allPixels.forEach(element => {
    element.style.width = finalPixelSize + 'px';
    element.style.height = finalPixelSize + 'px';
});

allPixelRowHeight.forEach(element => {
    element.style.height = finalPixelSize + 'px';
});
}
