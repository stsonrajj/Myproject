package com.example.demo.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Property")
public class Property {
	@Id
	private String id;
	private String img;
	private String title;
	private String description;
	private String price;
	private String city;
	private String state;
	private String address;
	private String type;
	private String rules;
	private String amenities;
	private boolean bestseller;
	
	public Property() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Property(String id, String img, String title, String description, String price, String city, String state,
			String address, String type, String rules, String amenities, boolean bestseller) {
		super();
		this.id = id;
		this.img = img;
		this.title = title;
		this.description = description;
		this.price = price;
		this.city = city;
		this.state = state;
		this.address = address;
		this.type = type;
		this.rules = rules;
		this.amenities = amenities;
		this.bestseller = bestseller;
	}



	public Property(String id, String img, String title, String description, String price, String city, String state,
			String type, String rules, String amenities, boolean bestseller) {
		super();
		this.id = id;
		this.img = img;
		this.title = title;
		this.description = description;
		this.price = price;
		this.city = city;
		this.state = state;
		this.type = type;
		this.rules = rules;
		this.amenities = amenities;
		this.bestseller = bestseller;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}


	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRules() {
		return rules;
	}

	public void setRules(String rules) {
		this.rules = rules;
	}

	public String getAmenities() {
		return amenities;
	}

	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}

	public boolean isBestseller() {
		return bestseller;
	}

	public void setBestseller(boolean bestseller) {
		this.bestseller = bestseller;
	}



	@Override
	public String toString() {
		return "Property [id=" + id + ", img=" + img + ", title=" + title + ", description=" + description + ", price="
				+ price + ", city=" + city + ", state=" + state + ", type=" + type + ", rules=" + rules + ", amenities="
				+ amenities + ", bestseller=" + bestseller + "]";
	}



}
