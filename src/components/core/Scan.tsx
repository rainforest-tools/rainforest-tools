import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect } from 'react'

const qrcodeRegionId = 'html5qr-code-full-region' as const

interface IProps {
    onScanSuccess: (decodedText: string) => void
    verbose?: boolean
}

const Scan = ({ onScanSuccess, verbose = false }: IProps) => {

    useEffect(() => {
        const qrCodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId, { fps: 10, qrbox: 250 }, verbose);
        qrCodeScanner.render(onScanSuccess, (error) => {
            // console.log(error)
        });

        return () => {
            qrCodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, [])

    return <div id={qrcodeRegionId} />
}

export default Scan;