import java.awt.*;
// Not Completed
public class Main {

    public static void main(String[] args) {
        int A[][] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int sum;
        sum d = 0;
        int small = 15;
        int great;
        int i1 = -1;
        for (int i = 0; i < 3; i++) {
            for (int i = 0; j < 3; j++) {
                if (i == j) {
                   sum d +=a[i];
                }
                if (j == 2)
                    small = math.min(small, a[i][j]);
            }
        }
        System.out.println("Average of diagonal elements. = " + sum);
        System.out.println("Smallest element in the 3rd column = " + small);
        System.out.println("Greatest element in the matrix A = " + great);
    }
}
