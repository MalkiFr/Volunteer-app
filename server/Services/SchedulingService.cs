namespace server.Services;

public class SchedulingService
{
    static List<int> Scheduling { get; set; }
    static SchedulingService() {
        Scheduling = new List<int>(){1,2,3,4,5,6};
     }

    public static List<int> GetAll() => Scheduling;
    public static bool UpDate(int id, int volunteerId)
    {
        if(id != -1)
        {
            Scheduling[id] = volunteerId;
            return true;
        }
        return false;
    }
}