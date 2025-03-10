package com.example.demo.SoftwareEngineer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/software-engineers")
public class SoftwareEngineerController {

    @GetMapping
    public List<SoftwareEngineer> getSoftwareEngineers() {
        return List.of(
                new SoftwareEngineer(
                        1,
                        "Robert",
                        "angular, typescript"
                ),
                new SoftwareEngineer(
                        2,
                        "Alex",
                        "C++/C#"
                )
        );
    }

}
