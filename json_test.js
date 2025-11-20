const jsonTest1 = [
    {
        "id": 1,
        "name": "Widget A",
        "available": true,
        "tags": ["small", "blue"],
        "frames": [
            {
                "frameName": "icon_1",
                "grid": [
                    "xox",
                    "oxo",
                    "xox"
                ]
            },
            {
                "frameName": "icon_2",
                "grid": [
                    "oxx",
                    "xoo",
                    "xox"
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Widget B",
        "available": false,
        "tags": ["large", "red"],
        "frames": [
            {
                "frameName": "icon_main",
                "grid": [
                    "xxx",
                    "xox",
                    "xxx"
                ]
            }
        ]
    }
];


console.log("ID: " + jsonTest1[0].id); // Accessing id of the first object
console.log("Name: " + jsonTest1[0].name); // Accessing name of the first object
console.log("Avail: " + jsonTest1[0].available); // Accessing available status of the first object
console.log("Tags: " + jsonTest1[0].tags); // Accessing tags of the first object
console.log("Tags 1: " + jsonTest1[0].tags[0]); // Accessing first tag of the first object
console.log("Tags 2: " + jsonTest1[0].tags[1]); // Accessing second tag of the first object
console.log("Frame name: " + jsonTest1[0].frames[0].frameName); // Accessing frameName of the first frame of the first object
console.log("Frames: " + jsonTest1[0].frames);  // Accessing frames of the first object
console.log("Grid1: " + jsonTest1[0].frames[0].grid); // Accessing grid of the first frame of the first object
console.log("Grid1 Row1: " + jsonTest1[0].frames[0].grid[0]); // Accessing first row of the grid of the first frame of the first object
console.log("Grid1 Row2: " + jsonTest1[0].frames[0].grid[1]); // Accessing second row of the grid of the first frame of the first object
console.log("Grid1 Row3: " + jsonTest1[0].frames[0].grid[2]); // Accessing third row of the grid of the first frame of the first object

console.log("Frame name 2: " + jsonTest1[0].frames[1].frameName); // Accessing frameName of the second frame of the first object
console.log("Grid2: " + jsonTest1[0].frames[1].grid); // Accessing grid of the second frame of the first object
console.log("Grid2 Row1: " + jsonTest1[0].frames[1].grid[0]); // Accessing first row of the grid of the second frame of the first object
console.log("Grid2 Row2: " + jsonTest1[0].frames[1].grid[1]); // Accessing second row of the grid of the second frame of the first object
console.log("Grid2 Row3: " + jsonTest1[0].frames[1].grid[2]); // Accessing third row of the grid of the second frame of the first object

console.log("Total length: " + jsonTest1.length); // Accessing length of the main array

const objectWithKey = jsonTest1.find(item => "frames" in item); // Finding the first object that contains the key "frames"
console.log(objectWithKey);

