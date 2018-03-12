using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    public class <%=data.featureName%>Controller : Controller
    {


       

        [HttpGet]
        public IEnumerable<<%=data.featureName%>Dto> Get()
        {
            <%- data.getFakeData(data.featureName) %>
        }
        
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "<%=data.featureName%>" + id.ToString();
        }
    }

     <%- data.getDto(data.featureName) %>
}
