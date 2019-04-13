using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace ATTHack.Controllers
{
    public class ResultsController
    {
    
        [RoutePrefix("api/technews")]
        public class NewScrapperController : ApiController
        {
            readonly NewsScrapperService newsScrapperService = new NewsScrapperService();

            [HttpPost, Route]
            public void GetHeadlines()
            {
                newsScrapperService.GetHeadlines();
            }
            [HttpGet, Route("get/{pageIndex:int}/{pageSize:int}")]
            public List<News> GetAll(int pageIndex, int pageSize)
            {
                return newsScrapperService.GetAll(pageIndex, pageSize);
            }
        }
    }
}
}