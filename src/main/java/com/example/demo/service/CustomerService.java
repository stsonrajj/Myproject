package com.example.demo.service;

import javax.websocket.server.ServerEndpoint;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.demo.document.Customer;
import com.example.demo.document.Login;
import com.example.demo.repository.CustomerRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository customerRepo;
	BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public Customer setCustomerDetails(Customer customer) {
		if ((customer.geteMail() != null && customer.geteMail() != "")
				&& (customer.getPassword() != null && customer.getPassword() != "")) {
			String encrypted = encoder.encode(customer.getPassword());
			customer.setPassword(encrypted);
			return customerRepo.save(customer);
		}
		return new Customer();
	}

	public Customer getCustomerByEmail(Login login) {

		Optional<Customer> customer = customerRepo.findByeMail(login.getEmail());
		if (customer.isPresent()) {
			if (encoder.matches(login.getPassword(), customer.get().getPassword())) {
				return customer.get();
			} else {
				return new Customer();
			}
		} else {
			return new Customer();
		}
	}

	public Customer getCustomerById(String id) {
		Optional<Customer> customer = customerRepo.findById(id);
		if (customer.isPresent()) {
			return customer.get();
		} else {
			return new Customer();
		}
	}
	
	public List<Customer> getAllCustomers() {
		List<Customer> customer = customerRepo.findAll();
		if(customer.isEmpty()) {
			return null;
		}
		else {
			return customer;
		}
	}

}
