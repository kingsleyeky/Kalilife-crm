using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace KaliLife_CRM
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddSwaggerGen(c =>
             {
                 c.SwaggerDoc("v1", new OpenApiInfo
                 {
                     Title = "ForSureLife CRM API",
                     Version = "v1",
                     Description = "API for the UI.",
                     Contact = new OpenApiContact
                     {
                         Name = "ForSureLife CRM",
                         Email = string.Empty
                     },
                 });
                //  // todo: replace this code to match b2c
                //  c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                //  {
                //      Name = "Authorization",
                //      Type = SecuritySchemeType.ApiKey,
                //      Scheme = "Bearer",
                //      BearerFormat = "JWT",
                //      In = ParameterLocation.Header,
                //      Description = "JWT Authorization header using the Bearer scheme."
                //  });

                //  c.AddSecurityRequirement(new OpenApiSecurityRequirement
                //     {
                //          {
                //          new OpenApiSecurityScheme
                //          {
                //              Reference = new OpenApiReference
                //              {
                //                  Type = ReferenceType.SecurityScheme,
                //                  Id = "Bearer"
                //              }
                //          },
                //      new string[] {}
                //      }
                //   });
                 var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                 var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                 c.IncludeXmlComments(xmlPath);
             });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            // app.UseSwagger();
            Microsoft.AspNetCore.Builder.SwaggerBuilderExtensions.UseSwagger(app);
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "ForSureLife CRM API");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
