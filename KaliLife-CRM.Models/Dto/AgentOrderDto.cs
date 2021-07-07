using System;
using System.Collections.Generic;

namespace KaliLife_CRM.Dto
{
    public class AgentOrderDto
    {
        public DateTime StartTime { get; set; }
        public int OrderState { get; set; }
        public List<AgentOrderLineDto> Lines { get; set; }

    }
}
