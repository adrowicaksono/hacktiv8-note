var arr = [1, 9, 2, 9, 8, 5, 4, 1];

console.log(arr);

function swap(arr) {
	
	//membuat pengecekan
	var signal = true;
	for (j = 0; j < arr.length; j++) {
		if (arr[j] < arr[j + 1]) {
			signal = false;
			break;
		}
	}

	//console.log(signal);
	if (signal === true) {
		return arr;
	}

	var panjang = arr.length - 1;
  //buble sort
	for (var i = 0; i < panjang; i++) {
		var min = 0;
		var max = 0;
		//console.log('ini indeks i:' + arr[i]);
		//console.log('ini indeks i+1 :' + arr[i + 1]);
		if (arr[i + 1] < arr[i]) {
			min += arr[i + 1];
			max += arr[i];
		} else {
			min += arr[i];
			max += arr[i + 1];
		}
		
		//pengisian nilai min / max
		arr[i] = max;
		arr[i + 1] = min;
	}
	return swap(arr);
}

console.log(swap(arr));

