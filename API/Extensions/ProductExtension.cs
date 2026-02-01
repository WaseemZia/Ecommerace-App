using System;
using API.Entities;

namespace API.Extensions;

public static class ProductExtension
{
 public static IQueryable<Product> Sort(this IQueryable<Product> query, string? orderBy)
    {
        query= orderBy switch
            {
                // "price"=>query.OrderBy(x=>x.Price),
                // "priceDesc"=>query.OrderByDescending(x=>x.Price),
                // _=>query.OrderBy(x=>x.Name)
                "price"=>query.OrderBy(x=>x.Id),
                "priceDesc"=>query.OrderByDescending(x=>x.Id),
                _=>query.OrderBy(x=>x.Id)
            };
            return query;
    }
    public static IQueryable<Product> Search(this IQueryable<Product> query,string? searchTerm)
    {
     if(string.IsNullOrEmpty(searchTerm))return query;
     var isLowerQuery=searchTerm.Trim().ToLower();   
     return query.Where(x=>x.Name.ToLower().Contains(isLowerQuery));
    }
    public static IQueryable<Product> FilterByBrandAndType(this IQueryable<Product> query,string?brands,string?type)
    {
        var brandList= new List<string>();
        var typeList= new List<string>();
        if(!string.IsNullOrEmpty(brands))
        {
         brandList.AddRange(brands.ToLower().Split(",").ToList());
        }
      if(!string.IsNullOrEmpty(type))
        {
         typeList.AddRange(type.ToLower().Split(",").ToList());
        }
        query=query.Where(x=>brandList.Count()==0 || brandList.Contains(x.Brand.ToLower()));
        query= query.Where(x=>typeList.Count()==0||typeList.Contains(x.Type.ToLower()));
        return query;
    }
}
