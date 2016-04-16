using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;

namespace WebApplication5.API
{
    public class UsersController : ApiController
    {
        // GET api/<controller>
        public ListResult<User> Get([FromUri]ApiFilter filter)
        {
            var result = new List<User>();

            for (var i = 0; i < 600; i++)
            {
                result.Add(new User
                {
                    FirstName = Guid.NewGuid().ToString("N").Substring(0, 6),
                    LastName = Guid.NewGuid().ToString("N").Substring(0, 9),
                    Country = Guid.NewGuid().ToString("N").Substring(0, 4),
                    Age = i,
                    CreatedUtc = DateTime.UtcNow.AddDays((i * -2)),
                    Deleted = i % 4 == 0
                });

            }

            var data = result.Skip(filter.Skip).Take(filter.Take).ToList();

            return new ListResult<User>()
            {
                Data = data,
                TotalResults = result.Count
            };

            //return result;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }

    public class ListResult<T>
    {
        public List<T> Data;
        public int TotalResults { get; set; }
    }
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public int Age { get; set; }
        public DateTime CreatedUtc { get; set; }
        public bool Deleted { get; set; }
    }

    public class ApiFilter
    {
        public int Skip { get; set; }
        public int Take { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}