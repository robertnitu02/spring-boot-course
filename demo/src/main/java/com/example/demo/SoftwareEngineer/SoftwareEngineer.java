package com.example.demo.SoftwareEngineer;

public class SoftwareEngineer {
    private long id;
    private String name;
    private String techStack;

    public SoftwareEngineer() {

    }

    public SoftwareEngineer(long id, String name, String techStack) {
        this.id = id;
        this.name = name;
        this.techStack = techStack;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }

    public String getTechStack() {
        return techStack;
    }
}
