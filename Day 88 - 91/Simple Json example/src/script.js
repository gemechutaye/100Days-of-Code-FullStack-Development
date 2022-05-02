console.clear()

var drive = {
        "CPU": "Intel",
        "Cores": 8,
        "Drives": [
            "DVD read/writer",
            "1TB Sata 7200",
            "250GB SSD",
            32
        ],
        "Manufacturer": {
            "Name": "Bob's Drives",
            "Street": "331 Jefferson",
            "City": "Gas City",
            "State": "IN",
            "ZipCode": 78216
        }
    };

console.log(drive.Drives[0]);
console.log(drive.Drives[3]);
console.log(drive.Manufacturer.Name);

// An alternative way to create a JavaScript object:

var manufacturer = new Object();
manufacturer.Name = "Bob's Drives";
manufacturer.Street = "331 Jefferson";
manufacturer.City = "Gas City";
manufacturer.State = "IN";
manufacturer.ZipCode = 78216;

var drive2 = new Object();
drive2.CPU = "Intel";
drive2.Cores = 8;
drive2.Drives = ["DVD read/writer", "1TB Sata 7200", "250GB SSD"];
drive2.Manufacturer = manufacturer; 

console.log(drive2.Drives[0]);
console.log(drive2.Manufacturer.Name);

 