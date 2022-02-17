public class Main {

    public static void main(String[] args) {
        int a[][] = new int[3][3];
        for(int i = 0; i < 3; i++) {
            for(int j= 0;j < 3;j++){
                if( i == j){
                    System.out.println("1");
                }
                else{
                    System.out.println("0");
                }
            }
        }

    }
}
