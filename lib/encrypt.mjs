import bcrypt from "bcrypt";

// Add additional salt rounds to increase the computational complexity. A value
// of 10 is the recommended default
const saltRounds = 10;

// Wrapper function to generate a password hash utilizing a consistent number
// of salt rounds. The returned hash includes both the salt and the actual
// password hash in the same string
export function generateHash(input) {
  return bcrypt.hash(input, saltRounds);
}

// Wrapper fuction to compare a plaintext password to an existing hash
export function compareHash(input, hash) {
  return bcrypt.compare(input, hash);
}
