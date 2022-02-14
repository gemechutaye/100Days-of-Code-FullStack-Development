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

      }
}

