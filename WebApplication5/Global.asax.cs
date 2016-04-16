using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WebApplication5
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {


            // Code that runs on application startup
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            GlobalConfiguration.Configure(ConfigureCamelCase);
            RouteConfig.RegisterRoutes(RouteTable.Routes);            
        }

        private void ConfigureCamelCase(HttpConfiguration config)
        {
            var jsonFormatter = config.Formatters.JsonFormatter;
            // This next line is not required for it to work, but here for completeness - ignore data contracts.
            jsonFormatter.UseDataContractJsonSerializer = false;
            var settings = jsonFormatter.SerializerSettings;
#if DEBUG
            // Pretty json for developers.
            settings.Formatting = Formatting.Indented;
#else
        settings.Formatting = Formatting.None;
#endif
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}