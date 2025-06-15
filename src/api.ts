import { CreateNoteRequest } from "./types/createNoteRequest.js";
import { NoteResponse } from "./types/noteResponse.js";
import { PaginatedResponse } from "./types/paginatedResponse.js";
import { UpdateNoteRequest } from "./types/updateNoteRequest.js";

export interface ApiInterface {
  getNotes(
    pageNumber: number,
    pageSize: number,
  ): Promise<PaginatedResponse<NoteResponse>>;
  getNote(noteId: string): Promise<NoteResponse>;
  updateNote(noteId: string, request: UpdateNoteRequest): Promise<void>;
  createNote(request: CreateNoteRequest): Promise<NoteResponse>;
  deleteNote(noteId: string): Promise<void>;
}

export class Api implements ApiInterface {
  private readonly API_BASE_URL: string;

  constructor(baseUrl: string) {
    this.API_BASE_URL = `${baseUrl}/notes`;
  }

  async getNotes(
    pageNumber: number,
    pageSize: number,
  ): Promise<PaginatedResponse<NoteResponse>> {
    const response = await fetch(
      `${this.API_BASE_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    );
    const data = await response.json();
    return data as PaginatedResponse<NoteResponse>;
  }

  async getNote(noteId: string): Promise<NoteResponse> {
    const response = await fetch(`${this.API_BASE_URL}/${noteId}`);
    const data = await response.json();
    return data as NoteResponse;
  }

  async updateNote(noteId: string, request: UpdateNoteRequest): Promise<void> {
    await fetch(`${this.API_BASE_URL}/${noteId}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async createNote(request: CreateNoteRequest): Promise<NoteResponse> {
    const response = await fetch(this.API_BASE_URL, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data as NoteResponse;
  }

  async deleteNote(noteId: string): Promise<void> {
    await fetch(`${this.API_BASE_URL}/${noteId}`, {
      method: "DELETE",
    });
  }
}
