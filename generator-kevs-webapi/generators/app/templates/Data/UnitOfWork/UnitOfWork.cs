namespace Data.Repos
{
    public interface IUnitOfWork
    {
        <%-data.getInterfaceProperties%>
    }

    public class UnitOfWork: IUnitOfWork
    {
        
        <%-data.getRepoFields%>
        
        <%-data.getRepoProperties%>
       

    }
}