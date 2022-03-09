<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>JavaScript Quoting Property Names of an Object</title>
</head>
<body>
    <script>
    var person = {
        "first name": "Gemechu",
        "current age": 22,
        gender: "Male"
    };
    
    document.write(person["first name"] + "<br>"); // Prints: Gemechu
    document.write(person["current age"] + "<br>"); // Prints: 20
    document.write(person["gender"]); // Prints: Male
    console.log(person);
    </script>
    <p><strong>Note:</strong> Also check out the browser console by pressing the f12 key on the keyboard.</p>
</body>
</html>