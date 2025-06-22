using System;
using System.Collections.Generic;

namespace ProductSearchExample
{
    class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        public Product(int id, string name, string category)
        {
            ProductId = id;
            ProductName = name;
            Category = category;
        }

        public override string ToString()
        {
            return $"Product ID: {ProductId}, Name: {ProductName}, Category: {Category}";
        }
    }

    class Program
    {
        static Product LinearSearch(List<Product> products, int id)
        {
            foreach (var product in products)
            {
                if (product.ProductId == id)
                    return product;
            }
            return null;
        }

        static Product BinarySearch(List<Product> products, int id)
        {
            int left = 0, right = products.Count - 1;
            while (left <= right)
            {
                int mid = left + (right - left) / 2;
                if (products[mid].ProductId == id)
                    return products[mid];
                else if (products[mid].ProductId < id)
                    left = mid + 1;
                else
                    right = mid - 1;
            }
            return null;
        }

        static void Main(string[] args)
        {
            Console.Write("Enter number of products: ");
            int count = int.Parse(Console.ReadLine());

            List<Product> products = new List<Product>();

            for (int i = 0; i < count; i++)
            {
                Console.WriteLine($"\nEnter details for product {i + 1}:");
                Console.Write("Product ID: ");
                int id = int.Parse(Console.ReadLine());

                Console.Write("Product Name: ");
                string name = Console.ReadLine();

                Console.Write("Category: ");
                string category = Console.ReadLine();

                products.Add(new Product(id, name, category));
            }

            
            products.Sort((a, b) => a.ProductId.CompareTo(b.ProductId));

            Console.Write("\nEnter Product ID to search: ");
            int searchId = int.Parse(Console.ReadLine());

            
            var resultLinear = LinearSearch(products, searchId);
            if (resultLinear != null)
                Console.WriteLine("Product found using Linear Search: " + resultLinear);
            else
                Console.WriteLine("Product not found using Linear Search.");

           
            var resultBinary = BinarySearch(products, searchId);
            if (resultBinary != null)
                Console.WriteLine("Product found using Binary Search: " + resultBinary);
            else
                Console.WriteLine("Product not found using Binary Search.");

            Console.WriteLine("\nTime Complexity:");
            Console.WriteLine("Linear Search → O(n)");
            Console.WriteLine("Binary Search → O(log n) [Requires sorted data]");
        }
    }
}
