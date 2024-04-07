namespace server.Models;

public class Volunteer
{
    public int id { get; set; }
    public String? firstName { get; set; }
    public String? lastName { get; set; }
    public String? phone { get; set; }
    public bool[]? days{get;set;}
}