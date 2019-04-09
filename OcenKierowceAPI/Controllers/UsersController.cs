using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiteDB;
using Microsoft.AspNetCore.Mvc;
using OcenKierowceAPI.Models;
using Newtonsoft.Json;
namespace OcenKierowceAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private LiteDatabase _data { get; set; }
    private BsonMapper _mapper { get; set; }
    public UsersController()
    {
      _data = new LiteDatabase(@"OcenKierowceDb.db");
      _mapper = new BsonMapper();
    }

    // GET api/values
    [HttpGet]
    public ActionResult<string> Get()
    {
      var user = JsonConvert.SerializeObject(_data.GetCollection<User>("users").FindAll());
      return user;
    }

    // GET api/users/login?email=amitrega01@gmail.com&password=insu1Haslo
    [HttpGet("login")]
    public ActionResult<string> Get(string email, string password)
    {
      var loggedUser = _data.GetCollection<User>("users")
        .FindOne(x => x.Email == email && x.Password == password);
      return JsonConvert.SerializeObject(loggedUser);
    }

    // POST api/values
    [HttpPost]
    public ActionResult<string> Post([FromBody] User newUser)
    {
      newUser.Id = Guid.NewGuid();
      if (!_data.GetCollection<User>("users").Exists(x => x.Email == newUser.Email))
      {
        _data.GetCollection("users").Insert(_mapper.ToDocument(newUser));
        return "User ADDED";
      }
      else return "USER already Exists";
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {

      _data.DropCollection("users");

    }
  }
}
