public class Main {

    public static void main(String[] args) {
	String location = "Florida";
    int flightNumber = 175;
    StringBuilder sb = new StringBuilder(40);
    sb.append("I flew to ");
    sb.append(location);
    sb.append(" on Flight #");
    sb.append(flightNumber);
    String message = sb.toString();
    System.out.println(message);
        String time = "9:00";
        int pos = sb.indexOf(" on");
        sb.insert(pos, " at ");
        sb.insert(pos + 4, time);
        message = sb.toString();
        System.out.println(message);
    }
}
