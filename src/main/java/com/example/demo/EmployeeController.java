package com.example.demo;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class EmployeeController {
	
//	@Autowired
//	EmployeeService employeeservice;
	
	  @PreAuthorize("hasRole('ROLE_USER')")
	   @GetMapping("/user")
	    @ResponseBody
	    public ResponseEntity<Employee> currentUserName(final Principal principal) {
	       String username= principal.getName();
	       System.out.println("username:"+username);
	       Employee emp=new Employee();
	       emp.setUserName(username);
	       emp.setToken("dmlkeWE6dmlkeWExMjM0");
	       return ResponseEntity.ok().body(emp);	
	    }
	
//	 @GetMapping("/user")
//	    @ResponseBody
//	    public String currentUserName() {
//	        employeeservice.name();
//	       return "ok" ;	
//	    }
//	  
	  

	
	 
	
	  
	  
	  
//	  @PostMapping("/user1")
//	  public String postMethodName(@RequestBody Employee user) {
//	  	   String username=user.getUserName();
//	  	return username;
//	  }
	  
}