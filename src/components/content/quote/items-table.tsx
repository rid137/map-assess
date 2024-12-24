import { DataTable } from '../../shared/data-table'

const ItemsTable = () => {
    return (
        <div className="border rounded-lg p-6 mb-6 w-full">
            <h5 className="font-bold text-md mb-4">Item(s)</h5>
            <DataTable />
            <div className="flex mt-6">
                <div className="w-1/3"></div>
                <div className="w-1/3"></div>
                <div className="w-1/3 flex gap-16">
                    <div className="flex flex-col gap-4 text-[#475367]">
                        <p className="text-sm">Sub Total</p>
                        <p className="text-sm">Total</p>
                    </div>
                    <div className="flex flex-col gap-4 text-[#475367]">
                    <p className="text-sm">$8,000.00</p>
                    <p className="text-sm font-semibold">$8,750.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemsTable
