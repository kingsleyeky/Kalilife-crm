using System;
using KaliLife_CRM.Models.Enums;

namespace KaliLife_CRM.Dto
{
    public class AgentLeadDto
    {

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string LeadType { get; set; }
        public string LeadSource { get; set; }
        public LeadLevel LeadLevel { get; set; }
        public AddressDto Address { get; set; }
        public DateTime DOB { get; set; }
        public string Hobby { get; set; }
        public Gender Gender { get; set; }
        public bool CurrentCoverage { get; set; }
        public decimal DesiredCoverageAmount { get; set; }
    }
}
