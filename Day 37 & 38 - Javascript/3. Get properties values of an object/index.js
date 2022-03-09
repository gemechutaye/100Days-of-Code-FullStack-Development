<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>JavaScript Get Properties Values of an Object</title>
</head>
<body>
    <script>
    var book = {
        "name": "Harry Potter and the Goblet of Fire",
        "author": "J. K. Rowling",
        "year": 2000
    };
    
    // Dot notation
    document.write(book.name + "<br>");  // Prints: Harry Potter and the Goblet of Fire
    document.write(book.author + "<br>");  // Prints: J. K. Rowling
    document.write(book.year);  // Prints: 2000
    document.write("<hr>");
    
    // Bracket notation
    document.write(book["name"] + "<br>");  // Prints: Harry Potter and the Goblet of Fire
    document.write(book["author"] + "<br>");  // Prints: J. K. Rowling
    document.write(book["year"]);  // Prints: 2000
    </script>
</body>
</html>