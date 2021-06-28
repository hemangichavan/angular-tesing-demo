import { greet } from "./greet";

describe('greet',()=>{
    it ('should include name in the message',()=>{
const result = greet('rani');
expect(result).toContain('rani');
    })
})