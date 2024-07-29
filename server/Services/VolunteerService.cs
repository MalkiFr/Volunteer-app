using server.Models;

namespace server.Services;

public class VolunteerService
{
    static List<Volunteer> volunteerList { get; set; }
    static VolunteerService()
    {
        volunteerList = new List<Volunteer>()
        {
            new Volunteer() { id= 501, fullName= "Avi Buzaglo", phone= "052-7652104", days= new bool[6]{true,false,true,true,false,false} },
            new Volunteer() { id= 502, fullName= "Yomtov Gold", phone= "053-2548432", days= new bool[6]{false,false,true,true,false,false}},
            new Volunteer() { id= 503, fullName= "Gidon Ben-porat", phone= "050-9077070", days= new bool[6]{true,true,true,true,false,false} },
            new Volunteer() { id= 504, fullName= "Laiby Weiss", phone= "053-3100152", days= new bool[6]{true,false,false,true,false,false} },
            new Volunteer() { id= 505, fullName= "Dani Yarden", phone= "054-8534141", days= new bool[6]{true,false,true,true,false,false} },
            new Volunteer() { id= 506, fullName= "Yosale Goldman", phone= "058-3266626", days= new bool[6]{true,false,true,true,false,false} },
            new Volunteer() { id= 507, fullName= "Rafael Shif", phone= "054-5381121", days= new bool[6]{true,false,true,true,false,false} },
            new Volunteer() { id= 508, fullName= "Yoni Arbel", phone= "052-6017899", days= new bool[6]{true,false,true,true,false,false} },
        };
    }

    public static List<Volunteer> GetAll() => volunteerList;
    public static Volunteer? Get(int id) => volunteerList.FirstOrDefault(v => v.id == id);
    public static void Add(Volunteer volunteer)
    {
        volunteer.id = volunteerList.Last().id+1;
        volunteerList.Add(volunteer);
    }
    public static List<Volunteer> Delete(int id)
    {
        var volunteer = Get(id);
        volunteerList.Remove(volunteer);
        return volunteerList;
    }
    public static bool UpDate(Volunteer volunteer)
    {
        var index = volunteerList.FindIndex(v => v.id == volunteer.id);
        if(index != -1)
        {
            volunteerList[index] = volunteer;
            return true;
        }
        return false;
    }

    internal static void UpDate(int volunteerId)
    {
        throw new NotImplementedException();
    }
}