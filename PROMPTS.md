# Prompts and Testing

## Overview

This document outlines the test scenarios used to validate the AI Spend Audit application.  
Each test case includes input values and the expected output based on the implemented logic.

---

## Test Case 1: High Spending

### Input
- Tool: ChatGPT  
- Plan: Pro  
- Monthly Spend: 120  
- Users: 1  
- Use Case: Content generation  

### Expected Output
- Spending Level: High  
- Suggestion: Downgrade plan  
- Estimated Savings: $30/month  

---

## Test Case 2: Moderate Spending

### Input
- Tool: Claude  
- Plan: Pro  
- Monthly Spend: 70  
- Users: 2  
- Use Case: Research  

### Expected Output
- Spending Level: Moderate  
- Suggestion: Optimize usage  
- Estimated Savings: $15/month  

---

## Test Case 3: Optimized Spending

### Input
- Tool: ChatGPT  
- Plan: Free  
- Monthly Spend: 20  
- Users: 1  
- Use Case: Learning  

### Expected Output
- Spending Level: Optimized  
- Suggestion: No changes required  
- Estimated Savings: $0/month  

---

## Edge Case Testing

### Case 1: Empty Fields
- Input: One or more fields left empty  
- Expected Output: Warning message prompting the user to complete all fields  

### Case 2: Zero Spend
- Input: Monthly Spend = 0  
- Expected Output: Classified as optimized spending  

### Case 3: Invalid Input
- Input: Non-numeric value for spend  
- Expected Output: Prevented via input validation  

---

## Observations

- The system provides immediate feedback based on user input  
- Spending categories are clearly defined and easy to understand  
- Suggestions are simple, actionable, and relevant  

---

## Conclusion

The test cases confirm that the application correctly evaluates different spending scenarios and delivers meaningful, user-friendly recommendations.
