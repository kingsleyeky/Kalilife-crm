using KaliLife_CRM.Models.Enums;

namespace KaliLife_CRM.Dto
{
    public class AgentOrderLineDto
    {
        public string State { get; set; }
        public string County { get; set; }
        public string LeadType { get; set; }
        public LeadLevel LeadLevel { get; set; }
        public int Count { get; set; }
        public double Discount { get; set; }
        public double Price { get; set; }
        public double Tax { get; set; }
    }
}
