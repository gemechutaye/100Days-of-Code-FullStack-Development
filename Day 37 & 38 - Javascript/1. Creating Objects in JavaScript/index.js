<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Creating Objects in JavaScript</title>
</head>
<body>
    <script>
    var person = {
        name: "Peter",
        age: 28,
        gender: "Male",
        displayName: function() {
            alert(this.name);
        }
    };
    
    document.write(person.name + "<br>"); // Prints: Peter
    document.write(person.age + "<br>"); // Prints: 28
    document.write(person.gender); // Prints: Male
    console.log(person); 
    </script>
    <p><strong>Note:</strong> Also check out the browser console by pressing the f12 key on the keyboard.</p>
</body>
</html>