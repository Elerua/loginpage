namespace WebApi.Models.Users;

using System.ComponentModel.DataAnnotations;

public class AuthenticateRequest
{
    [Required]
    public string Mail { get; set; }

    [Required]
    public string Password { get; set; }
}