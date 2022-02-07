namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;

public class AuthenticateRequest
{
    [Required]
    public string Name { get; set; }

    [Required]
    public string Password { get; set; }
}