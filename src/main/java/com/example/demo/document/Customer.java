package com.example.demo.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Customer")
public class Customer {
	@Id
	private String id;
	private String customerName;
	private String eMail;
	private String password;
	private String customerAddress;
	
	public Customer() {
		super();
	}

	public Customer(String id, String customerName, String eMail, String password, String customerAddress) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.eMail = eMail;
		this.password = password;
		this.customerAddress = customerAddress;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCustomerAddress() {
		return customerAddress;
	}

	public void setCustomerAddress(String customerAddress) {
		this.customerAddress = customerAddress;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", customerName=" + customerName + ", eMail=" + eMail + ", password=" + password
				+ ", customerAddress=" + customerAddress + "]";
	}
	

	
}
