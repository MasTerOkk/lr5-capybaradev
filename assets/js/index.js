export function generateRandomArray(length = 10, min = 0, max = 100) {
    return Array.from({ length }, () => Math.random() * (max - min) + min);
}

export function generateRandomMatrix(rows = 3, cols = 3, min = 0, max = 100) {
    return Array.from({ length: rows }, () => generateRandomArray(cols, min, max));
}