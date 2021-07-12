using System;
using KaliLife_CRM.Models.Enums;

namespace KaliLife_CRM.Dto
{
    public class AgentOrderLineDto
    {
        public Guid Id { get; set; }
        public string State { get; set; }
        public string County { get; set; }
        public string ProductType { get; set; }
        public LeadType LeadType { get; set; }
        public int Count { get; set; }
        public double Discount { get; set; }
        public double Price { get; set; }
        public double Tax { get; set; }
    }

    public class AgentAddOrderLineDto
    {
        public string State { get; set; }
        public string County { get; set; }
        public string ProductType { get; set; }
        public LeadType LeadType { get; set; }
        public int Count { get; set; }

    }
}
