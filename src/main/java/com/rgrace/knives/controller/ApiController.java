package com.rgrace.knives.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {

	@RequestMapping("/test")
	public List<TestDto> test() {
		List<TestDto> list = new ArrayList<>();
		list.add(new TestDto(1, "John"));
		list.add(new TestDto(2, "Deere"));
		return list;
	}
	
	class TestDto {
		int id;
		String name;
		
		public TestDto(int id, String name) {
			this.id = id;
			this.name = name;
		}
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		
	}
	
}
