public class Main {

    public static void main(String[] args) {

//        While loop
    int someValue = 4;
    int factorial = 1;
    while(someValue > 1); {
    someValue--;
    }
        System.out.println(factorial);
    }

//    Do while loop
    int iVal = 80;
    do {
        System.out.print(iVal);
        System.out.print(" * 2 = ");
        iVal *= 2;
        System.out.println(iVal);
    } while(iVal <  25);

//    While loop and for loop examples
    int i = 1;
    while(i<100) {
        System.out.println(i);
        i *= 2;
    }
    ////////
    for (int i = 1; i < 100; i *= 2)
        System.out.println(i);

//    Array
    float[] theVals = new float[3];
    theVals[0] = 10.0f;
    theVals[1] = 20.0f;
    theVals[2] = 15.0f;
    float sum = 0.0f;
    for(int index = 0; index < theVals.length; index++)
        sum += theVals[index];
    System.out.println(sum); // displays 45

//    Optional way
    float[] TheVals = { 10.0F, 20.0F, 15.0F };
    float sum = 0.0f;
    for(int index = 0; index < theVals.length; index++)
    sum += theVals[index];
    System.out.println(sum); // displays 45

}

