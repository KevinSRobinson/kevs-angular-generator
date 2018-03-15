using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dtos;

namespace Data.Repos
{
    public interface I<%=data.featureName%>Repo
    {

        IEnumerable<<%=data.featureName%>Dto> Get();
        <%=data.featureName%>Dto Get(int id);
        <%=data.featureName%>Dto Update(<%=data.featureName%>Dto <%=data.featureName%>Dto);
    }

    class <%=data.featureName%>Repo : I<%=data.featureName%>Repo
    {
         private List<<%=data.featureName%>Dto> _<%=data.featureNameCC%>  = new List<<%=data.featureName%>Dto>();

        public <%=data.featureName%>Repo()
        {
             _<%=data.featureNameCC%> = <%- data.getFakeData(data.featureName) %>
        }
    

        public IEnumerable<<%=data.featureName%>Dto> Get()
        {
               return _<%=data.featureNameCC%>; %>
        }

        public <%=data.featureName%>Dto Get(int id)
        {
             return _<%=data.featureNameCC%>.FirstOrDefault(x => x.Id == id);
        }

        
        public <%=data.featureName%>Dto Update(<%=data.featureName%>Dto <%=data.featureNameCC%>Dto)
        {
            return  <%=data.featureNameCC%>Dto; 
        }
    }
}
