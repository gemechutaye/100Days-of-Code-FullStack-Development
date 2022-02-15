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

}
