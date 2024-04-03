let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = some; // Приведення типу тільки якщо some є рядком
} else {
    // Обробка ситуації, коли some не є рядком
}
export {};