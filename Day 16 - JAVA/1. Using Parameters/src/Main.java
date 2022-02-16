public class Main<Static> {
    /*
    static void showSum(float x, float y, int count) {
        float sum = x + y; // sum 8.9
        for(int i = 0, i < count; i++);
        System.out.println(sum);
    }
     */
//    Method changes to parameter values
    /*
    static void swap(int i, int j) {
        int k = i;
        i = j;
        j = k;
    // i:20 j:10
        int val1 = 10;
        int val2 = 20;
        swap(val1, val2);
        System.out.println(val1); // 10
        System.out.println(val2); // 20
    }
     */
    /*
//   Exiting a Method
    Static void showSum(float x, float y, int count) {
    showSum(7.5, 1.4, 0);
    System.out.printin("Back from showSum");
        if (count < 1)
            return;
        float sum = x + y;
        for(int i = 0, i < count; i++);
            System.out.println(sum);
        return;
    }

     */
//    Returning an Array
    static double[] produceInterestHistory(double amt, double rate, int years) {
        double[] accumulatedInterest = new double[years];
        for (int yearIndex = 0; yearIndex < years; yearIndex++) {
            int year = yearIndex + 1;
            accumulatedInterest[yearIndex] = calculateInterest(amt, rate, year);
        }
        return accumulatedInterest;
    }

    private static double calculateInterest(double amt, double rate, int year) {
    }
}

