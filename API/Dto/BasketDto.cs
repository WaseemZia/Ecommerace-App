using System;

namespace API.Dto;

public class BasketDto
{ // BasketId is used for cookiies
 public required string BasketId { get; set; }
 public List<BasketItemDto> Items{get;set;}=[];
}
