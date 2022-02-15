public class Main {

    public static void main(String[] args) {
	// Array - CalcEngin - JavaApp
    double[] leftVals = {100.0d, 25.0d, 225.0d, 11.0d};
    double[] rightVals = {50.0d, 92.0d, 17.0d, 3.0d};
    char[] opCodes = {'d', 'a', 's', 'm'};
    double[] results = new double[opCodes.length];

    for(int i = 0; i < opCodes.length; i++) {
        switch (opCodes[i]) {
            case 'a':
                results[i] = leftVals[i] + rightVals[i];
                break;
            case 's':
                results[i] = leftVals[i] - rightVals[i];
                break;
            case 'm':
                results[i] = leftVals[i] * rightVals[i];
                break;
            case 'd':
                results[i] = leftVals[i] != 0 ? leftVals[i] / rightVals[i] : 0.0d;
                break;
            default:
            System.out.println("Invalid opCode: " + opCodes[i]);
            results[i] = 0.0d;
            break;
        }
    }
    for(double currentResult : results)
        System.out.println(currentResult);
    }

    // for each loop with arrays
    /*
    float[] theVals = { 10.0f, 20.0f, 15.0f };
    float sum = 0.0f;
    for(float currentVal : theVals)
        sum += currentVal;
    System.out.println(sum); // dispaly 45
     */
}
