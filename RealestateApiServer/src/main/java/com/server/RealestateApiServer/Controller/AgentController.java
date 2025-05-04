
package com.server.RealestateApiServer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.RealestateApiServer.Dto.AgentDto;
import com.server.RealestateApiServer.Entity.Agent;
import com.server.RealestateApiServer.Service.AgentService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/agents")
public class AgentController {
	
	@Autowired
	private AgentService agentService;
    
	
	@PostMapping("/register")
    public ResponseEntity<Agent> registerAgent(@RequestBody AgentDto agentDto) {
        Agent agent = agentService.registerAgent(agentDto);
        return ResponseEntity.ok(agent);
    }


	
    @PostMapping("/login")
    public ResponseEntity<Agent> loginAgent(@RequestBody AgentDto agentDto) {
        Agent agent = agentService.loginAgent(agentDto.getEmail(), agentDto.getPassword());
        if (agent != null) {
            return ResponseEntity.ok(agent);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
