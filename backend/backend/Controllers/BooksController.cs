using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.DTOs;
using backend.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public BooksController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<BookDto>> Post([FromBody] BookDto bookDto)
        {
            var entity = mapper.Map<Book>(bookDto);
            context.Add(entity);
            await context.SaveChangesAsync();
            return mapper.Map<BookDto>(entity);
        }

        [HttpGet]
        public async Task<ActionResult<List<BookDto>>> GetAllBooks()
        {
            var entities = await context.Books.ToListAsync();
            return mapper.Map<List<BookDto>>(entities);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<BookDto>> GetById(int id)
        {
            var entity = await context.Books.FirstOrDefaultAsync(x => x.Id == id);
            if (entity == null)
            {
                return NotFound();
            }

            return mapper.Map<BookDto>(entity);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateBook(int id, [FromBody] BookDto bookDto)
        {
            var entity = await context.Books.FirstOrDefaultAsync(x => x.Id == id);
            if (entity == null)
            {
                return NotFound();
            }

            mapper.Map(bookDto, entity);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> RemoveById(int id)
        {
            var entity = await context.Books.AnyAsync(x => x.Id == id);
            if (!entity)
            {
                return NotFound();
            }

            context.Remove(new Book() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
