using KaliLife_CRM.Models.Enums;

namespace KaliLife_CRM.Dto
{
    public class LeadSearchFilterDto
    {
        public string State { get; set; }
        public string County { get; set; }
        public string ProductType { get; set; }
        public LeadType LeadType { get; set; }
    }
}
