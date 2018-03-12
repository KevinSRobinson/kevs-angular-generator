using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Linq;
namespace WebApplication2.Controllers
{

    [EnableCors("AllowSpecific")]
    [Route("api/[controller]")]
    public class <%=data.featureName%>Controller : Controller
    {
        private List<<%=data.featureName%>Dto> _<%=data.featureNameCC%>  = new List<<%=data.featureName%>Dto>();

        public <%=data.featureName%>Controller()
        {
            _<%=data.featureNameCC%> = <%- data.getFakeData(data.featureName) %>
        }
       

        [HttpGet]
        public IEnumerable<<%=data.featureName%>Dto> Get()
        {
           return _<%=data.featureNameCC%>; %>
        }
        
        [HttpGet("{id}")]
        public <%=data.featureName%>Dto Get(int id)
        {
            return _<%=data.featureNameCC%>.FirstOrDefault(x => x.Id == id);
        }
    }

     <%- data.getDto(data.featureName) %>
}
