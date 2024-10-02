export async function deliverMsg (msg) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return msg;
}