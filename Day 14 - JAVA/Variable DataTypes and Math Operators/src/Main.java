public class Main {

      public static void main(String[] args) {
//          declaring variables
          int myVar;
          myVar = 50;
          System.out.println(myVar);
          int anotherVar = 100;
          System.out.println(anotherVar);
          myVar = anotherVar;
          System.out.println(myVar);

          final int maxStudents = 25;
          System.out.println(maxStudents);
          final int someVariable;
//          int someOtherVariable = 100;
//          someVariable = someOtherVariable;
//          System.out.println(someVariable);

//          Primitive Data Types
//          Integer Types
          byte numberOfEnglishLetters = 26;
          short feetInMile = 5200;
          int milesToSun = 92960000;
          long mileInALightYear = 58790000000000L;

//          Floating Point Types
          float kilometersInAMarathon = 42.195f;
          float absoluteZeroInCelsius = -273.15f;
          double atomWidthInMeters = 0.00000000001d;

//          Character Types
          char regularU = 'U';
//          char accentedU = '\UooDA'; //U

//          Boolean Type
          boolean iLoveJava = true;

          // Primitive types stored by value
          int firstValue = 100;
          int otherValue = firstValue;
          System.out.println(firstValue);
          System.out.println(otherValue);
          firstValue = 50;
          System.out.println(firstValue);
          otherValue = 75;
          System.out.println(otherValue);

//          Arithmetic Operator
//          Prefix and Postfix and compound Operators
          //prefix
          int someValue = 5;
          System.out.println(++someValue);
          System.out.println(someValue);
          //postfix
          int someOtherValue = 5;
          System.out.println(someOtherValue++);
          System.out.println(someOtherValue);

          //Compound Assignment operators
          int myValue = 50;
          myValue -= 5;
          System.out.println(myValue);

          int myOtherValue = 100;
          int val1 = 5;
          int val2 = 10;
          myOtherValue /= val1 * val2;
          System.out.println(myOtherValue);

          // A closer look at Operator Precedence
          int valA = 21;
          int valB = 6;
          int valC =3;
          int valD = 1;

          int result1 = valA - valB / valC;

          int result2 = (valA - valB) / valC;

          System.out.println(result1);
          System.out.println(result2);

          int result3 = valA / valC * valD + valB;

          int result4 =  valA / (valC * (valD + valB));

          System.out.println(result3);
          System.out.println(result4);

//          A closer look at type conversions
          float floatVal = 1.0f;
          double doubleVal = 4.0d;
          byte byteVal = 7;
          short shortVal = 7;
          long longVal = 5;

          short result1 = (short) longVal;
          short result2 = (short) (byteVal - longVal);
          float result3 = longVal - floatVal;

          System.out.println("Success");
      }

}

