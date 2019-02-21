/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let index1;
  let index2;
  for (let i = 0; i< preferences.length; i++){
  		index1 = preferences[i]-1;
  		index2 = preferences[index1]-1;
  		if(preferences[index2] == i+1 && preferences[i] != preferences[index1] && preferences[i]!= preferences[index2] && preferences[index2] != preferences[index1]){
  			count++;
  		}
  }
  count /=3
  return count;
};
