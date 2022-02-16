import java.util.Scanner;


public class Main<args> {
    /*
        public static void main(String[] args) {
    //        Converting Non-string Types to string

        int iVal = 100;
        String sVal = String.valueOf(iVal); // "100"
            int i = 2, j = 3;
            int result = i * j;
            String output = i * " * " + j + " = " + result;
             */

    static void executeInteractively() {
        System.out.println("Enter an operation and two numbers: ");
        Scanner scanner = new Scanner(System.in);
        String userInput = scanner.nextLine();
        String regex;
        String[] parts = userInput.split(regex) + " ";
        performOperation(parts);
    }

    private static void performOperation(String[] parts) {
        char opCOde = opCodeFromString(parts[0]);
        double leftVal = valueFromWord(parts[1]);
        double rightVal = valueFromWord(parts[2]);
        char opCode;
        double result = execute(opCode, leftVal, rightVal);
        System.out.println(result);
    }




    public static void main(String[] args) {
        // Array - CalcEngin - JavaApp
        double[] leftVals = {100.0d, 25.0d, 225.0d, 11.0d};
        double[] rightVals = {50.0d, 92.0d, 17.0d, 3.0d};
        char[] opCodes = {'d', 'a', 's', 'm'};
        double[] results = new double[opCodes.length];

        if (args.length == 0) {
            for(int i = 0; i < opCodes.length; i++) {
                results[i] = execute(opCodes[i], leftVals[i], rightVals[i]);
            }
            for(double currentResult : results)
                System.out.println(currentResult);
        } else if(args.length == 1 && args[0].equals("interactive"));
        excuteInteractively();
        else if(args.length == 3)
            handleCommandLine(args);
        else
            System.out.println("Please provide an operation code and 2 numeric values");
        for(double currentResult : results)
            System.out.println(currentResult);

    }


    private static void handleCommandLine(String[] args) {
    }

    private static void excuteInteractively() {
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
            static char opCodeFromString(String operationName) {
                char opCode = operationName.charAt(0);
                return opCode;
            }
            double valueFromWord(String word) {
                String[] numberWords = {
                        "zero", "one", "two", "three", "four",
                        "five", "six", "seven", "eight", "nine"
                };
                double value = 0d;
                for(int index = 0; index < numberWords.length; index++) {
                    if(word.equals(numberWords[index])) {
                        value = index;
                        break;
                    }
                }
                return value;
            }
        }