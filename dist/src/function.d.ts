export interface BiConsumer<T, U> {
    (p1: T, p2: U): void;
}
export interface BiFunction<T, U, R> {
    (p1: T, p2: U): R;
}
export interface BiPredicate<T, U> {
    (p1: T, p2: U): boolean;
}
export interface Comparator<T> {
    (p1: T, p2: T): number;
}
export interface Consumer<T> {
    (p: T): void;
}
export interface Function<T, R> {
    (p: T): R;
}
export interface Runnable {
    (): void;
}
export interface Predicate<T> {
    (p: T): boolean;
}
export interface Supplier<T> {
    (): T;
}
export interface TriConsumer<T, U, V> {
    (p1: T, p2: U, p3: V): void;
}
