import { useState } from 'react'
import Scan from './core/Scan'

const BookScan = () => {
    const [barcode, setBarcode] = useState<string>('')
    return <>{barcode}<Scan onScanSuccess={(code) => { setBarcode(code) }} /></>
}

export default BookScan