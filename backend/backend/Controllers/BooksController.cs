using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.DTOs;
using backend.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly UserManager<IdentityUser> userManager;

        public BooksController(ApplicationDbContext context, IMapper mapper, UserManager<IdentityUser> userManager)
        {
            this.context = context;
            this.mapper = mapper;
            this.userManager = userManager;
        }

        [HttpPost]
        public async Task<ActionResult<BookDto>> Post([FromBody] BookDto bookDto)
        {
            var emailClaim = HttpContext.User.Claims.Where(claim => claim.Type == "email").FirstOrDefault();
            var email = emailClaim.Value;
            var usuario = await userManager.FindByEmailAsync(email);
            var usuarioId = usuario.Id;

            var entity = mapper.Map<Book>(bookDto);
            entity.UserId = usuarioId;
            context.Add(entity);
            await context.SaveChangesAsync();
            return mapper.Map<BookDto>(entity);
        }
        [AllowAnonymous]
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
