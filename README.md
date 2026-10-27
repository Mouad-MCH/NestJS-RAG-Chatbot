# NestJS RAG Chatbot

An AI-powered chatbot built with NestJS and LangChain that enables
users to upload PDF documents and ask questions about their content.

The application uses Retrieval-Augmented Generation (RAG) to retrieve
relevant information from uploaded documents and generate
context-aware answers using a Large Language Model (LLM).

## Features

- PDF document loading and text extraction
- Text chunking for efficient document processing
- Text embeddings using Ollama
- Semantic search using a vector store
- AI-powered question answering
- LangChain integration for building the RAG pipeline
- NestJS REST API
- LLM integration through OpenRouter

## Tech Stack

- **Backend:** NestJS, Node.js, TypeScript
- **LLM Framework:** LangChain
- **Embedding Model:** Ollama (mxbai-embed-large)
- **Language Model:** DeepSeek through OpenRouter
- **Vector Store:** LangChain MemoryVectorStore
- **Document Processing:** PDFLoader
- **AI Architecture:** Retrieval-Augmented Generation (RAG)

## How It Works

1. Upload a PDF document or provide text.
2. Extract and split the document into smaller chunks.
3. Generate embeddings for the chunks using Ollama.
4. Store the embeddings in a vector store.
5. Submit a question through the chatbot API.
6. Retrieve the most relevant document chunks.
7. Send the question and retrieved context to the LLM.
8. Generate an answer based on the provided context.

## Project Goal

The goal of this project is to learn and implement the fundamentals
of AI chatbots, LangChain, embeddings, vector search, and
Retrieval-Augmented Generation using NestJS.

## Current Limitations

- The in-memory vector store does not persist data after a server restart.
- Persistent vector database integration is not yet implemented.
- Authentication and user-specific document access are not yet implemented.
- Conversation history is not yet implemented.

## Future Improvements

- Integrate PostgreSQL with pgvector for persistent vector storage.
- Add document management and deletion.
- Implement conversational RAG with chat history.
- Return document sources with generated answers.
- Add authentication and authorization.
- Support multiple documents and company knowledge bases.

## Learning Objectives

This project explores:

- Building REST APIs with NestJS
- Integrating LangChain with a backend application
- Working with LLMs and embedding models
- Understanding vector databases and semantic search
- Implementing a RAG pipeline for document question answering
