function Chuot(ten, khoiluong, tocdo) {
    this.ten_chuot = ten;
    this.khoiluong_chuot = khoiluong;
    this.tocdo_chuot = tocdo;
    this.trangthai = true;

    this.getTrangThai = function () {
        if (this.trangthai) {
            console.log('Chuột sống');
        } else {
            console.log('Chuột chết');
        }
    }

    this.chet = function () {
        this.trangthai = false;
    }

    this.song = function () {
        this.trangthai = true;
    }

    this.chuotKeu = function (sound) {
        console.log(sound);
    }
}

function Meo(ten, khoiluong, tocdo, chuot) {
    this.ten_meo = ten;
    this.khoiluong_meo = khoiluong;
    this.tocdo_meo = tocdo;
    this.chuot = chuot;

    this.meoKeu = function (sound) {
        console.log(sound);
    }

    this.layKhoiluongMeo = function () {
        return this.khoiluong_meo;
    }

    this.meoBatChuot = function () {
        if (this.chuot.tocdo_chuot < this.tocdo_meo) {
            console.log("Mèo đã bắt được chuột");
        } else {
            console.log("Mèo không bắt được chuột");
        }
    }

    this.meoAnChuot = function () {
        if (this.chuot.trangthai) {
            this.khoiluong_meo = this.khoiluong_meo + this.chuot.khoiluong_chuot;
            this.chuot.trangthai = false;
            console.log("Chuột đã bị mèo ăn");
        } else {
            console.log("Chuột đã chết, không ăn được");
        }
    }
}

let chuot = new Chuot("Chuột", 10, 100);
let meo = new Meo("Mèo", 20, 200, chuot);

chuot.song(); // Chuột sống

meo.meoBatChuot(); // Kiểm tra bắt chuột
meo.meoAnChuot(); // Mèo ăn chuột

console.log("Khối lượng mèo sau khi ăn:", meo.layKhoiluongMeo()); // In khối lượng mèo mới
