public class Main {

      public static void main(String[] args) {
          // declaring variables
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
          int someOtherVariable = 100;
          someVariable = someOtherVariable;
          System.out.println(someVariable);

      }
}

