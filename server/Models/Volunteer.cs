namespace server.Models;

public class Volunteer
{
    public int id { get; set; }
    public String? fullName { get; set; }
    public String? phone { get; set; }
    public bool[]? days{get;set;}
}