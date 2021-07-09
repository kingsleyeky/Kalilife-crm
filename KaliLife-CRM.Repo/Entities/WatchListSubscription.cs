using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KaliLife_CRM.Biz.Entities
{
    public class WatchListSubscription
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid WatchListSubscriptionId { get; set; }
        public WatchList WatchList { get; set; }
    }
}
