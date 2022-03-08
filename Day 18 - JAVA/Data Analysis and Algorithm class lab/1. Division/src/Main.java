import java.util.Scanner;

class Division
{
    public static void main(String args[])
    {
        int a,b,result;
        Scanner sc=new Scanner(System.in);
        System.out.println("enter two integers");
        a=sc.nextInt();
        b=sc.nextInt();
        try
        {
            result=a/b;
            System.out.println("RESUTLT="+result);
        }
        catch(ArithmeticException e)
        {
            System.out.print("DIVIDE BY ZERO ERROR"+e);
        }


    }
}