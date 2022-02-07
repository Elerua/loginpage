namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;

public class RegisterRequest
{
    [Required]
    public string Name { get; set; }

    [Required]
    public string Mail { get; set; }

    [Required]
    public string Password { get; set; }
}