package com.duylong.backend.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:9999")

public class SaymynameController {
    
    @GetMapping("/saymyname")
    public String saymyname() {
        return "Hello, my name is Duy Long";
    }
    @PostMapping("/createproduct/{para}")
    public String createProduct(@PathVariable String para) {
        return "Create product with parameter: " + para;
    }
}
