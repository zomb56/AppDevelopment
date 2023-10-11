package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.Entity.FeedbackEntity;
import com.example.demo.Repository.FeedbackRepository;

public class FeedbackService {

	@Autowired
    private FeedbackRepository feedbackRepository;

    public Iterable<FeedbackEntity> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    public FeedbackEntity getFeedbackById(Long feedbackId) {
        return feedbackRepository.findById(feedbackId).orElse(null);
    }

    public FeedbackEntity saveFeedback(FeedbackEntity feedback) {
        return feedbackRepository.save(feedback);
    }

    public void deleteFeedback(Long feedbackId) {
        feedbackRepository.deleteById(feedbackId);
    }
	
}
