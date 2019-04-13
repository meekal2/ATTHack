using AngleSharp.Html.Parser;
using ATTHack.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Web;

namespace ATTHack
{
    public class ResultsService
    {
        SqlConnection GetConnection()
        {
            var con = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString);
            con.Open();
            return con;
        }

        public void GetHeadlines()
        {

            var results = new List<SearchResult>();

            var webClient = new WebClient();
            var html = webClient.DownloadString("https://old.reddit.com/r/technews/new/");
            var parser = new HtmlParser();
            var document = parser.Parse(html);
            var container = document.QuerySelector(".sitetable");
            var posts = container.QuerySelectorAll(".thing");

            foreach (var post in posts)
            {
                var searchResult = new SearchResult();
                searchResult.Headline = post.QuerySelector("a.title").TextContent;
                searchResult.Article = post.QuerySelector("a.title").TextContent;
                searchResult.Url = post.QuerySelector("a.title").GetAttribute("href").ToString();

                results.Add(searchResult);
            }

            foreach (var item in results)
            {
                using (var con = GetConnection())
                {
                    var cmd = con.CreateCommand();

                    cmd.CommandText = "Insert_Data";
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Headline", item.Headline);
                    cmd.Parameters.AddWithValue("@Url", item.Url);
                    cmd.Parameters.AddWithValue("@Thumbnail", item.Thumbnail);
                    cmd.Parameters.AddWithValue("@DatePosted", item.DatePosted);
                    cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                    cmd.ExecuteNonQuery();

                }

            }
        }
        public List<News> GetAll(int pageIndex, int pageSize)
        {
            using (var con = GetConnection())
            {
                var cmd = con.CreateCommand();

                cmd.CommandText = "Select_AllNews";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@pageIndex", pageIndex);
                cmd.Parameters.AddWithValue("@pageSize", pageSize);

                using (var reader = cmd.ExecuteReader())
                {
                    var newslist = new List<News>();

                    while (reader.Read())
                    {
                        var news = new News
                        {
                            Id = (int)reader["Id"],
                            Headline = (string)reader["Headline"],
                            Url = (string)reader["Url"],
                            Thumbnail = (string)reader["Thumbnail"],
                            DatePosted = (DateTime)reader["DatePosted"]
                        };

                        newslist.Add(news);
                    }

                    return newslist;
                }
            }
        }
    }
}