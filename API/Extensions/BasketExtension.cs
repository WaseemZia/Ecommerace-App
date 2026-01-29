using System;
using API.Dto;
using API.Entities;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace API.Extensions;

public static class BasketExtension
{
   public static BasketDto ToDto(this Basket basket)
    {
        return new BasketDto
        {
           
            BasketId=basket.BasketId,
            Items=basket.Items.Select(x=>new BasketItemDto
            {
                ProductId=x.ProductId,
                Name=x.Product.Name,
                Price=x.Product.Price,
                PictureUrl=x.Product.PictureUrl,
                Type=x.Product.Type,
                Quantity=x.Quantity,
                Brand=x.Product.Brand
            
            }).ToList()
        };
    }
}
