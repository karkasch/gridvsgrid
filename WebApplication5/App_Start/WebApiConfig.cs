using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebApplication5
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
//            var jsonFormatter = config.Formatters.JsonFormatter;
//            // This next line is not required for it to work, but here for completeness - ignore data contracts.
//            jsonFormatter.UseDataContractJsonSerializer = false;
//            var settings = jsonFormatter.SerializerSettings;
//#if DEBUG
//            // Pretty json for developers.
//            settings.Formatting = Formatting.Indented;
//#else
//        settings.Formatting = Formatting.None;
//#endif
//            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
