public class Main {

    public static void main(String[] args) {
        // Inital values
        int a = 5;
        int b = 7;

        // bitwise and
        // 0101 & 0111=0101 = 5
        System.out.println("a&b = " + (a & b));
        System.out.println("a|b = " + (a | b));

        // Bitwise xor
        // 0101 ^ 0111=0010 = 2
        System.out.println("a^b = " + (a ^ b));

        // bitwise not
        // ~0101=1010
        // will give 2's complement of 1010 = -6
        System.out.println("~a = " + ~a);

        // can also be combined with
        // assignment operator to provide shorthand
        // assignement
        // a=a&b
        a &= b;
        System.out.println("a= " + a);


        }
    }
