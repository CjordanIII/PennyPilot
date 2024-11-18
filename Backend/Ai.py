import google.generativeai as genai
import json
import requests  # For making HTTP requests to the summarizer API

# Configure Gemini API
genai.configure(api_key="")

# Google built-in-Ai Summarizer API key and endpoint
SUMMARIZER_API_KEY = ""
SUMMARIZER_API_ENDPOINT = "https://api.summarizer.com/v1/summarize"

def process_query(query, user_data):
    # Create a context-aware prompt
    context = f"""
    You are a personal finance assistant for PennyPilot. The user's current financial status is:
    Balance: ${user_data['balance']}
    Savings: ${user_data['savings']}
    Income: ${user_data['income']}
    Expenses: ${user_data['expenses']}

    Their savings goals are:
    {', '.join([f"{goal['name']} ({goal['progress']}%)" for goal in user_data['savings_goals']])}

    Recent transactions:
    {', '.join([f"{t['description']} (${t['amount']})" for t in user_data['transactions'][:3]])}

    Respond to the following query in the context of this financial information: {query}
    """

    model = genai.GenerativeModel('gemini-pro')
    gemini_response = model.generate_content(context)
    
    # Use the Summarizer API to get a concise version of the Gemini response
    summary = summarize_text(gemini_response.text)
    
    # Process the response
    processed_response = process_response(summary, query)
    
    return {"response": processed_response, "full_response": gemini_response.text}

def summarize_text(text):
    # Calling the Summarizer API
    response = requests.post(
        SUMMARIZER_API_ENDPOINT,
        headers={"Authorization": f"Bearer {SUMMARIZER_API_KEY}"},
        json={"text": text, "max_length": 100}  # Adjusting max_length as needed
    )
    if response.status_code == 200:
        return response.json()["summary"]
    else:
        return "Failed to summarize the response."

def process_response(response, query):
    # Add logic here to format the response based on query type
    if "budget" in query.lower():
        return format_budget_response(response)
    elif "savings" in query.lower():
        return format_savings_response(response)
    elif "transaction" in query.lower():
        return format_transaction_response(response)
    else:
        return response

def format_budget_response(response):
    return f"Budget Insight: {response}"

def format_savings_response(response):
    return f"Savings Advice: {response}"

def format_transaction_response(response):
    return f"Transaction Analysis: {response}"

# Example usage
user_data = {
    "balance": 4987.00,
    "savings": 11000.00,
    "income": 2670.00,
    "expenses": 1456.00,
    "savings_goals": [
        {"name": "Move out of home", "progress": 32},
        {"name": "Camping trip", "progress": 15},
        {"name": "New computer", "progress": 54}
    ],
    "transactions": [
        {"description": "Dinner at Pizza Pizza", "amount": 31.00},
        {"description": "Uber to dinner", "amount": 18.00},
        {"description": "Stock up on snacks", "amount": 45.00}
    ]
}

query = "How am I doing with my budget this month?"
result = process_query(query, user_data)
print("Summarized Response:", result["response"])
print("\nFull Response:", result["full_response"])



