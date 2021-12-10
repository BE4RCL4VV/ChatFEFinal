export interface Post {
    name: string,
    body: string,
    id: string,
    created_on: Date,
    updated_on: undefined
}

export interface ChatMessage {
    name: string,
    body: string,
    id: string,
    created_on: Date,
    updated_on?: Date,
    channel: string
}