package com.example.demo;
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


public class SimpleCORSFilter extends OncePerRequestFilter {

private final Logger log = LoggerFactory.getLogger(SimpleCORSFilter.class);


@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
		throws ServletException, IOException {
	String method =  request.getMethod();
	 	
	    System.out.println("CORSFilter HTTP Request: " + request.getMethod());
     
	    response.setHeader("Access-Control-Allow-Origin","http://localhost:4200");
	    response.setHeader("Access-Control-Allow-Credentials", "true");
	    response.setHeader("Access-Control-Aallow-Methods", "POST, GET, OPTIONS, DELETE");
	    response.setHeader("Access-Control-Max-Age", "3600");
	    response.setHeader("Access-Control-Allow-Headers", "*");
	   if(method.equals("OPTIONS")) {
		   response.setStatus(HttpServletResponse.SC_OK);
		   
	   }else {
		   
		   filterChain.doFilter(request, response);
	   }
	    
	
}

}