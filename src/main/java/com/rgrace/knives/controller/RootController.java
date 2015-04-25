package com.rgrace.knives.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author matthewryoung
 * EnableAutoConfiguration will auto map:
 * /META-INF/resources/
 * /resources/
 * /static/
 * /public/
 * 
 * Don't reference the /root path.
 * Example: A file in /src/main/resources/libs/jquery/jquery.js should be referenced in HTML as: /libs/jquery/jquery.js
 */
@Controller
@EnableAutoConfiguration
public class RootController {

	@RequestMapping("/")
	public String home() {
		return "forward:/app/jgrace-app.html";
	}
}
