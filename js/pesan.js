$('.pesan-btn').click(function(){
    $('#pesan').toggleClass('toggle');
});
// Onclick pesan Sent!
$('#pesan .submit').click(pesan);

$("#pesan input, #pesan textarea").keypress(function() {
    if (event.which == 13) pesan();
});
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function pesan() {
    var ph = '';
    if ($('#pesan .nama').val() == '') { // Cek Nama
        ph = $('#pesan .nama').attr('placeholder');
        alert('Silahkan tulis ' + ph);
        $('#pesan .nama').focus();
        return false;
    }   else if ($('#nomor').val() == '') { // Cek nomor
        ph = $('#nomor').attr('placeholder');
        alert('Silahkan Tulis nomor telpon');
        $('#nomor').focus();
        return false;
    }   else if ($('#product option:selected').val() == '-') { // pilih product
        ph = $('#product option:selected').attr('placeholder');
        alert('Silahkan Pilih Product');
        $('#product option:selected').focus();
        return false;
    }   else if ($('#catatan').val() == '') { // Cek catatan
        ph = $('#catatan').attr('placeholder');
        alert('Silahkan Tulis catatan untuk penjual');
        $('#catatan').focus();
        return false;
    }   else if ($('#alamat').val() == '') { // Cek alamat
        ph = $('#alamat').attr('placeholder');
        alert('Silahkan Tulis Alamat anda untuk pengecekkan biaya ongkir');
        $('#alamat').focus();
        return false;
    } else if ($('#bank option:selected').val() == '-') { // Cek bank
        ph = $('#bank option:selected').attr('placeholder');
        alert('Silahkan pilih Bank Pembayaran');
        $('#bank option:selected').focus();
        return false;
    } else if ($('#nama1').val() == '') { // Cek atas nama
        ph = $('#nama1').attr('placeholder');
        alert('Silahkan tulis ' + ph +' di atas nama');
        $('#nama1').focus();
        return false;
    } else if ($('#nobank').val() == '') { // Cek no bank
        ph = $('#nobank').attr('placeholder');
        alert('Silahkan tulis ' + ph);
        $('#nobank').focus();
        return false;
    } else {
        if (!confirm("Lanjutkan Pesanan?")) {
            window.open("https://www.whatsapp.com/download/");
        } else {
            // Check Device (Mobile/Desktop)
            var url_pesan = 'https://web.whatsapp.com/send';
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                url_pesan = 'whatsapp://send/';
            }
            // Get Value
            var tujuan = $('#pesan .tujuan').val(),
                    via_url = location.href,
                    nama = $('#pesan .nama').val(),
                    nomor = $('#nomor').val(), 
                    product = $('#product option:selected').val(),
                    catatan = $('#catatan').val(),
                    alamat = $('#alamat').val(),
                    bank = $('#bank option:selected').val(),
                    nama1 = $('#nama1').val(),
                    nobank = $('#nobank').val(),
                    bb = $('#date').val();
            $(this).attr('href', url_pesan + '?phone=62 ' + tujuan + '&text= **Karawo%20Gorontalo**%0A---------------------------------%0A' 
                                    + 'Tanggal Transaksi%20%3A%20' + bb + '%0AJenis%20Transaksi%20%3A%20Pesanan%20Karawo%20%0A---------------------------------%0A' +
                                    ' Rincian Transaksi,%0A' +
                                    ' %0ANama : %20' + nama + 
                                    ' %0ANo.tlp : %20'+ nomor +
                                    ' %0AProduct : %20'+ product +
                                    ' %0ACatatan : %20'+ catatan +
                                    ' %0AAlamat : %20'+ alamat + '%0A' +
                                    ' %0AMetode Pembayaran'+
                                    ' %0ABank :%20'+ bank +
                                    ' %0ANominal : %20' + nama1 +
                                    ' %0ANominal : %20' + nobank +
                                    '%0A%0ABerapa biaya ongkir dan berapa jumlah yang harus dibayarkan ?' +
                                    ' %0A---------------------------------%0AOfficial%20Website%0Ahttps%3A%2F%2Fwww.karawo-gorontalo.web.app');
            var w = 960,
                    h = 540,
                    left = Number((screen.width / 2) - (w / 2)),
                    tops = Number((screen.height / 2) - (h / 2)),
                    popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
            popupWindow.focus();
            return false;
        }
    }
}