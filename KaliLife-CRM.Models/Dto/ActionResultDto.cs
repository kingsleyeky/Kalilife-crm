using System;

namespace KaliLife_CRM.Dto
{
    public class ActionResultDto<T>
    {
        public int Error { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
        public T Value { get; set; }
        public ActionResultDto(T v) { this.Value = v; }
    }
}
