using System.Collections.Generic;

namespace KaliLife_CRM.Dto
{
    public class PagedResultDto<T>
    {
        public List<T> Items { get; set; }

        public long TotalCount { get; set; }
        public PagedResultDto(long totalCount = 0, List<T> items = null)
        {
            TotalCount = totalCount;
            Items = items;
            if (Items == null) Items = new List<T>();
        }
    }
}
