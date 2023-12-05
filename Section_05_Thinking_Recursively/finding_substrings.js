/*
 * Find subsequences of a word
 * A subsequce must be in same sequence
 * that they appear in word.
 *
 * O(n^2) time complexity
 */

function getSubsequence(word) {
  if (word === '') {
    return '';
  }

  const first = word[0];
  const rest = getSubsequence(word.substring(1));

  let result = '';
  rest.split(',').forEach((subsequence) => {
    result += ',' + first + subsequence;
    result += ',' + subsequence;
  });
  // remove first comma from result
  return result.substring(1);
}

console.log(getSubsequence('abc'));
