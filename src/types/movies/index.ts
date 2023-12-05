export interface MoviesItem {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

export interface Movies {
    Response: string;
    Search: MoviesItem[];
    totalResults: string;
    Error?: string;
}