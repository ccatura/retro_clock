const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');

const shapes = [
    {
        "name": "test_shape_1",
        "frame1": [
            "00000000",
            "01111100",
            "11000110",
            "00000110",
            "00111100",
            "00000110",
            "11000110",
            "01111100"
        ]
    },
    {
        "name": "test_shape_2",
        "frame1": [
            "00000000",
            "01111100",
            "11000110",
            "11000110",
            "01111100",
            "11000110",
            "11000110",
            "01111100"
        ]
    }
]; 

function processShapes(shapeArray) {
    console.log("--- Processing Shape Data ---");
    
    // Iterate over each object in the 'shapes' array
    shapeArray.forEach((shape, index) => {
        const shapeName = shape.name;
        const frameData = shape.frame1;

        console.log(`\nShape ${index + 1} Name: ${shapeName}`);
        
        if (frameData && Array.isArray(frameData) && frameData.length > 0) {
            console.log(`Frame Data Grid Size: ${frameData.length}x${frameData[0].length}`);
            
            console.log("Frame Grid:");
            frameData.forEach(row => {
                console.log(`  ${row}`);
            });
            
        } else {
            console.log("No 'frame1' data found.");
        }
    });
}

processShapes(shapes);



updateTime();
setInterval(updateTime, 1000);

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12; 
    hours = hours === 0 ? 12 : hours; // Handle the midnight (0) case
    const displayHours = String(hours); 
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    hoursBox.textContent = displayHours;
    minutesBox.textContent = minutes;

    if (typeof meridianBox !== 'undefined') {
        meridianBox.textContent = meridian;
    }
}


const testShapeContainer = document.getElementById('test-shape');

// Loop to create and append multiple elements
for (let i = 1; i <= 5; i++) {
    const pixel = document.createElement('div');
    pixel.textContent = `${i}`;
    pixel.classList.add('pixel-white');
    testShapeContainer.appendChild(pixel);
}