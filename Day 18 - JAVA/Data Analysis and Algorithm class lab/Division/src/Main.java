//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

import java.util.Scanner;

class Division {
    Division() {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter two integers");
        int a = sc.nextInt();
        int b = sc.nextInt();

        try {
            int result = a / b;
            System.out.println("RESUTLT=" + result);
        } catch (ArithmeticException var6) {
            System.out.print("DIVIDE BY ZERO ERROR" + var6);
        }

    }
}
