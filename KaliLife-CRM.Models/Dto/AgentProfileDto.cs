namespace KaliLife_CRM.Dto
{
    public class AgentProfileDto
    {

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool EmailUpdates { get; set; }
        public bool SmsUpdates { get; set; }
        public AddressDto Address { get; set; }

    }
}
