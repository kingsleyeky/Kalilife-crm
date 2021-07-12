namespace KaliLife_CRM.Dto
{
    public class PagedAndSortedResultRequestDto
    {
        public virtual string Sorting { get; set; }

        public virtual int Offset { get; set; }

        public virtual int MaxResultCount { get; set; }
        public virtual bool RequestCount { get; set; } = false;
    }
}
