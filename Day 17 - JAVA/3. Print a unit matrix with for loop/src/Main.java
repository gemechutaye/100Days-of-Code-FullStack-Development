public class Main {

        public static void main(String args[])
        {
            int i;
            int a[] = new int[10];
            for(i = 0; i < 10; i++)
            {
                a[i]=i+1;
            }
            System.out.print("Printing number from 1-10 using loop ");
            for(i=0;i<10;i++)
            {
                System.out.print(a[i]+" ");
            }
        }
    }
