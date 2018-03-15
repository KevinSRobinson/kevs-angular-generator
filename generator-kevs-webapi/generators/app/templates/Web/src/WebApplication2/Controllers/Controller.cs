using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Linq;
using Data.Repos;
using Dtos;
namespace WebApplication2.Controllers
{

    [EnableCors("AllowSpecific")]
    [Route("api/[controller]")]
    public class <%=data.featureName%>Controller : Controller
    {
        private IUnitOfWork _unitOfWork;
        
        public <%=data.featureName%>Controller()
        {
            _unitOfWork = new UnitOfWork();
        }
               
        [HttpGet]
        public IEnumerable<<%=data.featureName%>Dto> Get()
        {
            return _unitOfWork.<%=data.featureName%>.Get();
        }
        
        [HttpGet("{id}")]
        public <%=data.featureName%>Dto Get(int id)
        {
            return _unitOfWork.<%=data.featureName%>.Get(id);
        }
      
        
       [HttpPost()]
    public <%=data.featureName%>Dto Create([FromBody] <%=data.featureName%>Dto <%=data.featureNameCC%>Dto)
    {
      return _unitOfWork.<%=data.featureName%>.Update(<%=data.featureNameCC%>Dto);
    }

    [HttpPut("{id}")]
    public <%=data.featureName%>Dto Update([FromQuery] int id, [FromBody] <%=data.featureName%>Dto <%=data.featureNameCC%>Dto)
    {
        return _unitOfWork.<%=data.featureName%>.Update(<%=data.featureNameCC%>Dto);
    }


        
    }

    
}
