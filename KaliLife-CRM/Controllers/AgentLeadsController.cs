using System.Collections.Generic;
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


    [ApiController]
    [Route("api/[controller]")]
    public class CountyZipCodeSearchController : ControllerBase
    {
        private readonly ILogger<CountyZipCodeSearchController> _logger;

        public CountyZipCodeSearchController(ILogger<CountyZipCodeSearchController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public List<CountyZipCodeDto> Get([FromQuery] string query, [FromQuery] string countyCode, [FromQuery] string zipCode, [FromQuery] string stateCode)
        {
            var ret = new List<CountyZipCodeDto>();
            for (int i = 0; i < 10; i++)
            {
                ret.Add(new CountyZipCodeDto());
            }
            return ret;
        }


    }
}
