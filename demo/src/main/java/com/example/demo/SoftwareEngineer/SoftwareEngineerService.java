package com.example.demo.SoftwareEngineer;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SoftwareEngineerService {

    private final SoftwareEngineerRepository softwareEngineerRepository;

    public SoftwareEngineerService(SoftwareEngineerRepository softwareEngineerRepository) {
        this.softwareEngineerRepository = softwareEngineerRepository;
    }

    public List<SoftwareEngineer> getAllSoftwareEngineers() {
        return softwareEngineerRepository.findAll();
    }

    public void insertSoftwareEngineer(SoftwareEngineer softwareEngineer) {
        softwareEngineerRepository.save(softwareEngineer);
    }

    public SoftwareEngineer getSoftwareEngineerById(Integer id) {
        return softwareEngineerRepository.findById(id).orElseThrow(
                () -> new IllegalStateException("SoftwareEngineer with id " + id + " not found")
        );
    }

    public void deleteSoftwareEngineerById(Integer id) {
        softwareEngineerRepository.deleteById(id);
    }

    public void updateSoftwareEngineer(Integer id, SoftwareEngineer softwareEngineerUpdated) {
        SoftwareEngineer softwareEngineer = this.getSoftwareEngineerById(id);

        softwareEngineer.setName(softwareEngineerUpdated.getName());
        softwareEngineer.setTechStack(softwareEngineerUpdated.getTechStack());
        softwareEngineerRepository.save(softwareEngineer);
    }
}
