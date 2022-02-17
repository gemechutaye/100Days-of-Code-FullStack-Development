import java.util.Scanner;

// There are some error's, if I got time will fix those
class shape {
public void area (double radious) {
    double pi = 3.14;
    double radiuous;
    System.out.println("Area of triangle:" + 0.05 * pi * radious * radiuous);
        } public void area (double length, double breadth) {
    System.out.println("Area of Reactangle: " + length * breadth);
        }
        public void area(float radious) {
    double pi = 3.14;
    System.out.println("Area of Sphere:" + pi * 1.33 * radious * radious * radious);
        }
}

public class unit2_03 {
    public static void main (String args[]) {
        shape obj = new shape();
        System.out.println("Enter the radius for triangle:");
        Scanner a = new Scanner(System.in);
        float b = a.nextFloat();
        
        System.out.println("Enter the length for Rectangle:");
        Scanner C = new Scanner (System.in);
        Scanner e;
        float d = e.nextFloat ();
        System.out.println("Enter the Breadth for Rectangle:");

        obj.area(a);
        obj.area(d,h);
        double f;
        obj.area(f);
    }
}
