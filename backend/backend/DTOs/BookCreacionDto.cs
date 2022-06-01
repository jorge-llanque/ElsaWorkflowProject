using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace backend.DTOs
{
    public class BookCreacionDto
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int TotalPages { get; set; }
        public string Description { get; set; }
        public IFormFile Image { get; set; }
    }
}
