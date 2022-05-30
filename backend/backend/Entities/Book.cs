using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace backend.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int TotalPages { get; set; }
        public string Description { get; set; }
        public string UserId { get; set; }
        public IdentityUser User { get; set; }

    }
}
