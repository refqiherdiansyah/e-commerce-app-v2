import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"
import Container from "../components/Container";


const RefundPolicy = () => {
    return (
        <>
            <Meta title={'Refund Policy'} />
            <BreadCrumb title="Refund Policy" />
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy">
                                <h2>[Permintaan Pengajuan] Bisakah saya mengubah jadwal atau meminta pengembalian dana Tiket Bus & Travel saya?</h2>
                                <p>Perubahan Jadwal

                                    Kebijakan terkait perubahan jadwal ditentukan oleh masing-masing perusahaan Bus dan Travel.



                                    Pengajuan Pembatalan Tiket

                                    Anda dapat mengajukan pembatalan tiket dengan mengisi formulir ini.



                                    Apabila Anda telah mengisi semua data dengan lengkap di formulir, tim Shopee akan menghubungi Anda untuk memproses pengembalian dana dalam waktu 3x24 jam. Mohon diperhatikan bahwa perusahaan Bus dan Travel akan mengenakan biaya pembatalan harga tiket sesuai yang tertera di Rincian Pengembalian.



                                    <br>⚠️ Catatan:</br>
                                    <br>
                                        Untuk metode pembayaran kartu kredit, pengembalian dana Anda akan dikembalikan ke rekening kartu kredit Anda. 
                                        Untuk metode pembayaran lainnya, pengembalian dana akan dikembalikan ke ShopeePay atau rekening bank Anda, tergantung dari jumlah dana yang dikembalikan. 
                                    </br>
                                    <br>Mohon perhatikan bahwa pengembalian dana hanya dapat diproses jika Anda mencantumkan rekening bank milik Pemesan, atau salah satu Penumpang, untuk pengembalian dana.</br>
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default RefundPolicy;