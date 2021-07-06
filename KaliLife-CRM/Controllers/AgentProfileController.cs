using KaliLife_CRM.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KaliLife_CRM.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgentProfileController : ControllerBase
    {
        private readonly ILogger<AgentProfileController> _logger;

        public AgentProfileController(ILogger<AgentProfileController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public AgentProfileDto Get()
        {
            var ret = new AgentProfileDto()
            {
                FirstName = ""
            };
            return ret;
        }
        [HttpPost]
        public AgentProfileDto Update([FromBody] AgentProfileDto body)
        {
            var ret = new AgentProfileDto()
            {
                FirstName = ""
            };
            return ret;
        }
        [HttpPost("UpdateAddress")]
        public AgentProfileDto UpdateAddress([FromBody] AddressDto body)
        {
            var ret = new AgentProfileDto()
            {
                FirstName = ""
            };
            return ret;
        }
        [HttpPost("UpdateNotification")]
        public AgentProfileDto UpdateNotification([FromQuery] string type, [FromQuery] bool value)
        {
            var ret = new AgentProfileDto()
            {
                FirstName = ""
            };
            return ret;
        }
    }
}
