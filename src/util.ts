export const isSubset = (array1: any[], array2: any[]) => {
	return array1.every((val) => array2.includes(val));
};