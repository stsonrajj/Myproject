package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.document.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String>{
	
	public Optional<Customer> findByeMail(String email);
	

}
