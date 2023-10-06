package com.registration.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.registration.ws.shared.ApiResponse;

@RestController

public class UserController {
	
	@Autowired
	UserService userService;

	
	@PostMapping("/api/v1/users") //isimlendirme çoğul olur
	ApiResponse createUser(@RequestBody User user) { // Bir JSON Body request ile yollanacak demek
		return userService.saveUser(user);
		
	}
}
