package com.example.demo;

import javax.persistence.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@Entity
@ToString
public class Employee {
	
	private String userName;
	private String password;
	private String token;

}
