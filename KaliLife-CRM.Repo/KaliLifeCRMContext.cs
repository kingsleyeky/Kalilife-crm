using KaliLife_CRM.Biz.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KaliLife_CRM.Biz
{
    public class KaliLifeCRMContext : DbContext
    {

        public DbSet<Users> Users { get; set; }
        public DbSet<WatchList> WatchList { get; set; }
        public DbSet<WatchListSubscription> WatchListSubscription { get; set; }

    }
}
