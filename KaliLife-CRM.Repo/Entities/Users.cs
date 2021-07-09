using KaliLife_CRM.Biz.Enums;
using KaliLife_CRM.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KaliLife_CRM.Biz.Entities
{
    public class Users
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool EmailUpdates { get; set; }
        public bool SMSUpdates { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public States State { get; set; }
        public string ZipCode { get; set; }
        public string County { get; set; }
        public LeadProgression LeadQuality {get; set; } 
        public List<WatchListSubscription> WatchListSubscription { get; set; }

    }
}
