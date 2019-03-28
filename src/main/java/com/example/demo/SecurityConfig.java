package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
	
	
	
    @Override
    protected void configure(HttpSecurity http) throws Exception
    {   
//    	http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//    	which makes that stateless
    	http.addFilterAfter(new SimpleCORSFilter(), BasicAuthenticationFilter.class)
         .authorizeRequests().anyRequest().authenticated()
         .and()
         .httpBasic();
    }
    
  
//    @Override
//	public void configure(WebSecurity web) throws Exception {
//    	web.ignoring().antMatchers("/user");
//	}


	@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)
            throws Exception
    {
        auth.inMemoryAuthentication()
        .withUser("vidya").password(passwordEncoder().encode("vidya1234"))
        .authorities("ROLE_USER");
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
