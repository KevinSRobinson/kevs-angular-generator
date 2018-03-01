using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    public class <%=data.featureName%>Controller : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "<%=data.featureName%>1", "<%=data.featureName%>  2" };
        }
        
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "<%=data.featureName%>" + id.ToString();
        }
    }
}
