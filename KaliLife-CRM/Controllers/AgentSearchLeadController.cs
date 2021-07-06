using System.Collections.Generic;
using KaliLife_CRM.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace KaliLife_CRM.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AgentSearchLeadController : ControllerBase
    {
        private readonly ILogger<AgentSearchLeadController> _logger;

        public AgentSearchLeadController(ILogger<AgentSearchLeadController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public IEnumerable<LeadStatsDto> Get([FromQuery] LeadSearchFilterDto filter)
        {
            var l = new List<LeadStatsDto>();
            for (int i = 0; i < 100; i++)
            {
                l.Add(new LeadStatsDto());
            }
            return l;
        }


    }
}
