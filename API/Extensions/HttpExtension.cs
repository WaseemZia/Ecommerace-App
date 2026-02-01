using System;
using System.Text.Json;
using API.RequestHelper;
using Microsoft.CodeAnalysis;
using Microsoft.Net.Http.Headers;

namespace API.Extensions;

public  static class HttpExtension
{
public static void AddPaginationHeader(this HttpResponse response,PaginationMetaDeta paginationMeta )
    {
        var options= new JsonSerializerOptions{PropertyNamingPolicy=JsonNamingPolicy.CamelCase};
        response.Headers.Append("Pagination",JsonSerializer.Serialize( paginationMeta,options));
        response.Headers.Append(HeaderNames.AccessControlExposeHeaders,"Pagination");
    }
}
