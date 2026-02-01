using System;
using Microsoft.EntityFrameworkCore;

namespace API.RequestHelper;

public class PageList<T>:List<T>
{
public PageList(List<T> items,int count,int pageNumber, int pageSize)
{
 MetaDeta= new PaginationMetaDeta
 {
     TotalCount=count,
     PageSize=pageSize,
     CurrentPage=pageNumber,
     TotalPage=(int)Math.Ceiling(count/(double)pageSize)
 };
 AddRange(items);
}
public PaginationMetaDeta MetaDeta { get; set; }
public static async Task<PageList<T>> ToPageList( IQueryable<T> query,int pageNumber,int pageSize)
    {
        var count= await query.CountAsync();
        var items = await query.Skip((pageNumber-1)*pageSize).Take(pageSize).ToListAsync();
        return new PageList<T>(items,count,pageNumber,pageSize);
    }
}
