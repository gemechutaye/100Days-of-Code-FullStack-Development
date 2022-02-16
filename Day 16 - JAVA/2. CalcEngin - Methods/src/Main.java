public class Main {

    public static void main(String[] args) {
	// Array - CalcEngin - JavaApp
    double[] leftVals = {100.0d, 25.0d, 225.0d, 11.0d};
    double[] rightVals = {50.0d, 92.0d, 17.0d, 3.0d};
    char[] opCodes = {'d', 'a', 's', 'm'};
    double[] results = new double[opCodes.length];

    for(int i = 0; i < opCodes.length; i++) {
        results[i] = execute(opCodes[i], leftVals[i], rightVals[i]);
    }

    for(double currentResult : results)
        System.out.println(currentResult);
    }

    static double execute(char opCode, double leftVal, double rightVal) {
        double result;

        switch (opCode) {
            case 'a' -> result = leftVal + rightVal;
            case 's' -> result = leftVal - rightVal;
            case 'm' -> result = leftVal * rightVal;
            case 'd' -> result = leftVal != 0 ? leftVal / rightVal : 0.0d;
            default -> {
                System.out.println("Invalid opCode: " + opCode);
                result = 0.0d;
            }
        }

        return result;
    }
}
