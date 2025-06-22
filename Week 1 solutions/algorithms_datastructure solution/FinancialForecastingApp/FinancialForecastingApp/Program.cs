using System;
using System.Collections.Generic;

namespace FinancialForecastingApp
{
    class Program
    {
       
        private static Dictionary<int, double> memo = new Dictionary<int, double>();

        
        static double CalculateFutureValue(double principal, double rate, int years)
        {
            if (memo.ContainsKey(years))
                return memo[years];

            
            if (years == 0)
                return principal;

 
            double result = CalculateFutureValue(principal * (1 + rate), rate, years - 1);
            memo[years] = result;
            return result;
        }

        static void Main(string[] args)
        {
            Console.Write("Enter the initial amount: ");
            double principal = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter the annual growth rate (as a decimal, e.g., 0.1 for 10%): ");
            double rate = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter the number of years: ");
            int years = Convert.ToInt32(Console.ReadLine());

            double futureValue = CalculateFutureValue(principal, rate, years);
            Console.WriteLine($"\nFuture Value: {futureValue:F2}");

            Console.WriteLine("\nTime Complexity:");
            Console.WriteLine("Without memoization: O(n)");
            Console.WriteLine("With memoization: O(1) for repeated years");

            Console.ReadLine();
        }
    }
}
