using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.GetInstance();
        Logger logger2 = Logger.GetInstance();

        Console.WriteLine();

        if (logger1 == logger2)
        {
            Console.WriteLine("Logger instances are the same.");
        }
        else
        {
            Console.WriteLine("Logger instances are different.");
        }

        logger1.Log("This is a test log message.");
        logger2.Log("This is another test log message.");
    }
}
