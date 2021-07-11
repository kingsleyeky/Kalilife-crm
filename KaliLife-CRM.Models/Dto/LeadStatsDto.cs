using KaliLife_CRM.Models.Enums;

namespace KaliLife_CRM.Dto
{
    public class LeadStatsDto
    {
        public string State { get; set; }
        public string County { get; set; }
        public string ProductType { get; set; }
        public LeadType LeadType { get; set; }
        public int Count { get; set; }
        public double Price { get; set; }
    }
}
