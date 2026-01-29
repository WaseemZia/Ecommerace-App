namespace API.Entities;
public class Basket
{
 public int Id { get; set; }
 // BasketId is used for cookiies
 public required string BasketId { get; set; }
 public List<BasketItem> Items{get;set;}=[];

 
public void AddItem(Product product,int Quantity)
    {
        if(product==null) ArgumentNullException.ThrowIfNull(product);
        if(Quantity<=0) throw new ArgumentException("Quantity Should be Greater then 0",nameof(Quantity));
        var existingItem = FindItem(product.Id);
        if(existingItem==null)
        {
            Items.Add(new BasketItem
            {
                Product=product,
                Quantity=Quantity
            });

        }
        else
        {
            existingItem.Quantity+=Quantity;
        }
    }
public void RemoveItem(int productId,int Quantity)
    {
    if(Quantity<=0) throw new ArgumentException("Quantity Should be Greater then 0",nameof(Quantity));
    var existingItem=FindItem(productId);
    if(existingItem==null) return;
    existingItem.Quantity-=Quantity;
    if(existingItem.Quantity<=0) Items.Remove(existingItem);

    }
private BasketItem? FindItem(int productId)
    {
        return Items.FirstOrDefault(item=>item.ProductId==productId);
    }
}

