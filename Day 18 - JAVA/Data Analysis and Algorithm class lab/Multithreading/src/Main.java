import java.util.Random;
// multithreading
class Square extends Thread {

    int x;
    Square(int n){
        x=n;
    }
    public void run(){
        int sq=x*x;
        System.out.println("Square of x= "+sq);

    }
}
class Cube extends Thread
{
    int x;
    Cube(int n){
        x=n;
    }
    public void run()
    {
        int cub=x*x*x;
        System.out.println("Cube= "+cub);


    }
}
class Number extends Thread
{
    public void run()
    {
        Random r=new Random();
        for(int i=0;i<5;i++)
        {
            int num=r.nextInt(100);
            System.out.println("The NUmber generated is= "+num);
            Square s=new Square(num);
            s.start();
            Cube c=new Cube(num);
            c.start();
            try {
                Thread.sleep(100);

            }
            catch(InterruptedException e)
            {
                System.out.println(e);
            }

        }

    }

}
class Gemechu{
    public static void main(String args[]){
        Number n=new Number();
        n.start();
    }
}