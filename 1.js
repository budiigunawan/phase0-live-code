/**
 * Function maxSum menerima input berupa array berisi integer. 
 * maxSum akan mencari 'pasangan' integer yang akan menghasilkan jumlah terbesar jika
 * keduanya dijumlahkan. Pasangan integer ini tidak boleh terdiri dari integer yang sama ([9,9], [3,3] tidak boleh!)
 * 
 * Output yang diharapkan adalah sebuah array berisi kedua angka tersebut. 
 * Jika input merupakan kumpulan angka yang sama maka output adalah angka tersebut dalam sebuah array. (Ini karena tidak ada pasangan angka di dalam array tersebut).
 * Lihatlah contoh test case untuk lebih jelasnya. Tuliskanlah Pseudocode kalian diatas code tersebut.
 * 
 * Contoh:
 * -Input: [1,2,3]
 * -Output: [2,3]
 * 
 * -Input:[1]
 * -Output[1]
 * 
 * 
 * Rules:
 * -Tulislah Pseudocode diatas Code kalian
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

//Write pseudocode here
/**
 * SET "array" with array of number
 * SET "hasil" with empty array
 * SET "temp" with empty array
 * 
 * FOR "i" = 0 - "i" < "array".length
 *  SET "cek" TO FALSE
 *  
 *  FOR "t" = 0 - "t" < "temp".length
 *      IF "array"[i] == "temp"[t] THEN "cek" IS TRUE
 *      ENDIF
 *  ENDFOR
 *  
 *  IF "cek" IS FALSE THEN PUSH "array"[i] TO "temp"
 *  ENDIF
 * ENDFOR
 * 
 * IF "temp".length IS 1 THEN RETURN "temp"
 * ELSE
 *  SET "jumlah" with 0
 *  SET "x" with 0
 *  SET "y" with 0
 *  
 *  FOR "i" = 0 - "i" < "temp".length
 *      FOR "j" = (i + 1) - "j" < "temp".length
 *          SET "jumlahTemp" with "temp"[i] + "temp"[j]
 *          IF "jumlahTemp" > "jumlah" THEN 
 *              "jumlah" IS "jumlahTemp"
 *              "x" IS "i"
 *              "y" IS "j"
 *          ENDIF
 *      ENDFOR
 *  ENDFOR
 * ENDIF
 * 
 * PUSH "temp"[x], "temp"[y] TO "hasil"
 * RETURN "hasil"
 */

function maxSum(array) {
    var hasil = []
    var temp = []

    for (var i = 0; i < array.length; i++) {
        var cek = false

        for (var t = 0; t < temp.length; t++) {
            if (array[i] == temp[t]) {
                cek = true
            }
        }

        if (!cek) {
            temp.push(array[i])
        }
    }

    if (temp.length == 1) {
        return temp
    }
    else {
        var jumlah = 0
        var x = 0
        var y = 0

        for (var i = 0; i < temp.length; i++) {
                for (var j = i + 1; j < temp.length; j++) {
                    var jumlahTemp = temp[i] + temp[j]
                    if (jumlahTemp > jumlah) {
                        jumlah = jumlahTemp
                        x = i
                        y = j
                    }
                }
            }
        
        hasil.push(temp[x], temp[y])
        return hasil
    }
}

console.log(maxSum([1, 3, 5, 1, 9])) //[5,9]
console.log(maxSum([1])) //[1]
console.log(maxSum([5, 5, 5, 4])) //[5,4]
console.log(maxSum([5, 5, 5, 5])) //[5]