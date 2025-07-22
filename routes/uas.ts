interface InputPeserta {
    nim: string;
    nama: string;
    kehadiran: number; 
    tugas: number;     
    ujian: number;     
}

interface OutputPeserta extends InputPeserta {
    skor_akhir: number;
    status: string;
}

export default {
    async POST(req: Request): Promise<Response> {
        var data: InputPeserta[] = await req.json();
        var hasil: OutputPeserta[] = data.map((peserta) => {
            var skor_akhir =
                peserta.kehadiran * 0.2 +
                peserta.tugas * 0.3 +
                peserta.ujian * 0.5;

            var status = skor_akhir >= 60 ? "Lulus" : "Tidak Lulus";

            return {
                ...peserta,
                skor_akhir: parseFloat(skor_akhir.toFixed(2)),
                status,
            };
        });

        return new Response(JSON.stringify(hasil), {
            headers: { "Content-Type": "application/json" },
        });
    },
};