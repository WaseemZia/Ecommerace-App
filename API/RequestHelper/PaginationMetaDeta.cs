using System;

namespace API.RequestHelper;
// this class is created for client side data handling
public class PaginationMetaDeta
{
public int TotalCount { get; set; }// total product before pagination
public int PageSize { get; set; }
public int CurrentPage { get; set; }
public int TotalPage { get; set; }
}
