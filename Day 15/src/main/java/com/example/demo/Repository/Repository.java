package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.PollingEntity;

public interface Repository extends JpaRepository<PollingEntity,Long> {

	
}