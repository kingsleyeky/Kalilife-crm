using KaliLife_CRM.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KaliLife_CRM.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgentOrderController : ControllerBase
    {
        private readonly ILogger<AgentOrderController> _logger;

        public AgentOrderController(ILogger<AgentOrderController> logger)
        {
            _logger = logger;
        }
        [HttpGet("CurrentOrder")]
        public AgentOrderDto CurrentOrder()
        {
            var ret = new AgentOrderDto()
            {

            };
            return ret;
        }
        [HttpPost("AddItem")]
        public ActionResultDto<AgentOrderLineDto> AddItem(AgentOrderLineDto line)
        {

            return new ActionResultDto<AgentOrderLineDto>(line);
        }
        [HttpDelete("DeleteItem")]
        public AgentOrderLineDto DeleteItem(AgentOrderLineDto line)
        {

            return line;
        }
        [HttpPost("ProcessCurrentOrder")]
        public ActionResultDto<AgentOrderDto> ProcessCurrentOrder()
        {

            return new ActionResultDto<AgentOrderDto>(new AgentOrderDto());
        }


    }
}
