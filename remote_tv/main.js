function Remote(id, tv) {
    this.id = id;
    this.tv = tv;

    this.setChanel = function (chanel) {
        this.tv.chanel = chanel;
    }

    this.setVolume = function (volume) {
        this.tv.volume = volume;
    }
}

function Tivi(chanel, volume) {
    this.chanel = chanel;
    this.volume = volume;
    this.trangThai = false; // Khai báo trạng thái là thuộc tính của object

    this.getTrangthai = function () {
        if (this.trangThai) {
            console.log("Tivi đang bật");
        } else {
            console.log("Tivi đang tắt");
        }
    }

    this.turnOn = function () {
        this.trangThai = true;
    }

    this.turnOff = function () {
        this.trangThai = false;
    }

    this.getChanelTV = function () {
        return this.chanel;
    }

    this.getVolumeTV = function () {
        return this.volume;
    }

    this.setChanelTV = function (new_chanel) {
        this.chanel = new_chanel;
    }

    this.setVolumeTV = function (new_volume) {
        this.volume = new_volume;
    }
}

// Tạo object
let Sony = new Tivi(2, 10);
let remote1 = new Remote(1, Sony);

// Sử dụng
Sony.turnOn();
Sony.getTrangthai();

Sony.setChanelTV(7);
console.log("Kênh hiện tại:", Sony.getChanelTV()); // Kênh hiện tại: 7

remote1.setChanel(3);
remote1.setVolume(12);

console.log("Kênh sau khi remote điều chỉnh:", Sony.getChanelTV()); // Kênh: 3
console.log("Âm lượng sau khi remote điều chỉnh:", Sony.getVolumeTV()); // Âm lượng: 12
