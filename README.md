# Air The Gemini ✉️

### AI Email Assistant | n8n • OpenAI • Gmail • Human-in-the-Loop Automation

Air The Gemini is an AI-powered email assistant built to help users draft, revise and send professional emails through a conversational interface, with mandatory human approval before an email can be sent.

This project explores how AI agents can automate practical tasks while keeping humans in control of consequential actions.

## Project Overview

The objective was to build an AI email workflow that combines conversational AI, tool integrations, conversation memory and human oversight.

Rather than allowing an AI agent to send emails autonomously, the workflow requires a human reviewer to approve each sending request.

## Key Features

- **AI email drafting:** Draft and revise professional emails using natural-language instructions.
- **Conversation memory:** Maintain context across interactions.
- **Gmail integration:** Prepare and send emails through a connected Gmail account.
- **Human approval:** Route sending requests through an approval step before Gmail sends the email.
- **Rejection handling:** Prevent rejected emails from being sent.
- **Frontend preview:** Provide a separate web interface demonstrating the project's visual experience.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| n8n | Workflow orchestration and automation |
| OpenAI | Language model powering the AI Agent |
| Gmail | Email approval notifications and sending |
| n8n Simple Memory | Conversation context |
| HTML, CSS and JavaScript | Web interface |
| Netlify | Frontend hosting and demo backend |
| GitHub | Version control and project documentation |

## How the Workflow Works

1. A user enters an instruction through the n8n chat.
2. The AI Agent interprets the instruction using an OpenAI model and conversation context.
3. For drafting requests, the assistant generates a response without sending an email.
4. For sending requests, the AI Agent calls the connected Gmail tool.
5. The Gmail human-review step sends an approval request to the designated reviewer.
6. If the reviewer approves, the connected Gmail sending action can proceed.
7. If the reviewer rejects, the email is not sent.

## Testing and Validation

The workflow has been tested for:

- Conversational responses
- Email drafting
- Human approval requests
- Rejected emails not being sent
- Approved emails being sent successfully

**Known limitation:** The built-in n8n chat can display `No item to return was found` during email-sending requests, even when the workflow executes successfully. Final approval outcomes are verified through workflow executions and Gmail rather than relying on the chat response.

## Website Demo

**Preview:** https://air-the-gemini.netlify.app

The publicly hosted website is an interface demonstration, not a live AI email service. Public access to email sending is intentionally disabled to prevent unauthorised requests.

The working AI agent and email approval workflow run separately in n8n.

## Design and Safety Decisions

- Human approval is required before Gmail sends an email.
- Rejected requests must not trigger email sending.
- The public frontend does not expose live email-sending functionality.
- Credentials are managed through service configurations and are not intended to be committed to the repository.

## What I Learned

Building Air The Gemini provided practical experience with:

- Configuring AI agents and connected tools in n8n
- Integrating language models with external services
- Implementing human-in-the-loop approval workflows
- Testing both successful and rejected actions
- Troubleshooting workflow executions and chat responses
- Building and deploying a frontend demonstration
- Documenting an AI automation project on GitHub

## Project Status

**Working prototype with public interface preview.**

Email drafting, human approval and approved-email sending have been tested successfully in n8n. The public website remains a safe, disconnected demonstration.

## Author

Built by Roni Coker as a hands-on AI agent and workflow automation portfolio project.
