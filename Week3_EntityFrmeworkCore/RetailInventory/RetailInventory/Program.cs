using System;
using System.Threading.Tasks;
using RetailInventory.Models;

using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RetailInventory.Models;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        Console.WriteLine("🔎 Retrieving all products...");

        
        var products = await context.Products.ToListAsync();
        foreach (var p in products)
        {
            Console.WriteLine($"{p.Name} - ₹{p.Price}");
        }

       
        var product = await context.Products.FindAsync(1);
        Console.WriteLine($"\n🔍 Found by ID: {product?.Name}");

     
        var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
        Console.WriteLine($"💰 Expensive product: {expensive?.Name}");
    }
}
