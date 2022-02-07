namespace WebApi.Models.Users;

public class UpdateRequest
{
    public string Name { get; set; }
    public string Mail { get; set; }
    public string Password { get; set; }
}