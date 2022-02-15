public class Main {

    public static void main(String[] args) {
	System.out.println("Before method call");
    doSomething();
    System.out.println("After method call");

    static void doSomething() {
        System.out.println("Inside method");
        System.out.println("Still inside");
        }
    }
}
