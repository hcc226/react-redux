export enum STATUS {
    TODO,
    DONE
}

export type ToDoItemType = {
    text: string;
    status: STATUS;
}

export type ToDoItemProps = {
    text: string;
    status: STATUS;
    index: number;
    onComplete: (index: number) => void;
    onDelete: (index: number) => void
}