package com.example.demo.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signup")
public class PollingEntity{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String username;
    private String email;
    private String password;
	public PollingEntity(Long id, String username, String email,String password) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
	}
    public PollingEntity()
    {
    	
    }
    public Long getid() {
		return id;
	}
	public void setid(Long id) {
		this.id = id;
	}
	public String getusername() {
		return username;
	}
	public void setusername(String username) {
		this.username = username;
	}
	
	public String getemail() {
		return email;
	}
	public void setemail(String email) {
		this.email = email;
	}
	public String getpassword() {
		return password;
	}
	public void setpassword(String password) {
		this.password = password;
	}
    
}