using KaliLife_CRM.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KaliLife_CRM.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AgentLeadsController : ControllerBase
    {
        private readonly ILogger<AgentLeadsController> _logger;

        public AgentLeadsController(ILogger<AgentLeadsController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public PagedResultDto<AgentLeadDto> Get([FromQuery] PagedAndSortedResultRequestDto query)
        {
            var ret = new PagedResultDto<AgentLeadDto>();
            for (int i = 0; i < 10; i++)
            {
                ret.Items.Add(new AgentLeadDto());
            }
            return ret;
        }


    }
}
