/**
 * Similar to markdown syntax, converts specific tags to corresponding html
 * @param {string} input 
 * @returns string
 */
export default function formatText(input) {
    let processed = input.split('[rn]');
    return processed.map((block, index) => <p key={index}>{block}</p>);
}